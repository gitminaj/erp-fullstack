import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const QuotationForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bdId, leadId } = location.state || {};

    const [formData, setFormData] = useState({
        quotationNo: '',
        clientName: '',
        revisionNumber: '',
        leadId: leadId || '',
        standards: '',
        certificationType: '',
        surveillanceType: '',
        requestedScope: '',
        businessActivity: '',
        applicationFees: 0,
        accreditationFees: 0,
        surveillanceAudit1Fees: 0,
        surveillanceAudit2Fees: 0,
        stage1AuditFees: 0,
        stage2AuditFees: 0,
        totalFees: 0,
        currencyType: '',
        isDiscountGiven: 'false',
        approvedQuotationAmount: 0,
        discountAmount: 0,
        discountPercentage: "",  
        reasonForDiscount: '',
    });

    const [mandayInfo, setMandayInfo] = useState({
        mainSiteStage1: 2,
        mainSiteStage2: 5,
        mainSiteSA1: 3.5,
        mainSiteSA2: 3.5,
    });

    const [zone, setZone] = useState([]);
    const [surv, setSurv] = useState([]);
    const [cert, setCert] = useState([]);
    const [curr, setCurr] = useState([]);
    const [stand, setStand] = useState([]);
    const [stand1, setStand1] = useState([]);
    const [selectedStandard, setSelectedStandard] = useState("");
    const [contractReviews, setContractReviews] = useState([]);
    const [needsApproval, setNeedsApproval] = useState(false);

    const [fees, setFees] = useState({
        applicationFees: { "1-65": "", "65+": "" },
        accreditationFees: { "1-65": "", "65+": "" },
        auditFeesPerManday: { "1-65": "", "65+": "" }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [resp1, resp2, resp3, resp5, resp6, dummyResp] = await Promise.all([
                    axios.get('http://localhost:8000/api/questionnaire/zone'),
                    axios.get('http://localhost:8000/api/questionnaire/surveillance'),
                    axios.get('http://localhost:8000/api/questionnaire/certification'),
                    axios.get('http://localhost:8000/api/quotation/currency'),
                    axios.get('http://localhost:8000/api/auditor/auditorStandards'),
                    axios.get("http://localhost:8000/api/formsIATF/dummy-price")
                ]);

                setZone(resp1.data.data);
                setSurv(resp2.data.data || []);
                setCert(resp3.data.data);
                setCurr(resp5.data.data);
                setStand(resp6.data);
                setStand1(dummyResp.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        calculateFees();
    }, [formData.applicationFees, formData.accreditationFees, formData.auditFeesPerManday, mandayInfo]);

    const handleStandardChange = (e) => {
        const selected = e.target.value;
        setSelectedStandard(selected);
        setFormData(prev => ({ ...prev, standards: selected }));

        const standard = stand1.find((item) => item.standard === selected);
        if (standard) {
            setFees({
                applicationFees: standard.applicationFees,
                accreditationFees: standard.accreditationFees,
                auditFeesPerManday: standard.auditFeesPerManday
            });
        }
    };

   const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'number' ? parseFloat(value) || 0 : value;

    setFormData(prev => ({
        ...prev,
        [name]: newValue,
    }));

    if (name === 'discountPercentage') {
        const discountPercentage = newValue;
        const totalFees = formData.totalFees;

        const discountAmount = totalFees * (discountPercentage / 100);
        const approvedQuotationAmount = totalFees - discountAmount;

        // Set needsApproval flag based on discount percentage
        if (discountPercentage === 5) {
            setNeedsApproval(false);
        } else if ([15, 20, 30].includes(discountPercentage)) {
            setNeedsApproval(true);
        }

        setFormData(prev => ({
            ...prev,
            discountAmount: discountAmount,
            approvedQuotationAmount: approvedQuotationAmount,
        }));
    }
};

    

    const handleMandayChange = (e) => {
        const { name, value } = e.target;
        setMandayInfo(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    };

    const calculateFees = () => {
        const { applicationFees, accreditationFees, auditFeesPerManday } = fees;
        const { mainSiteStage1, mainSiteStage2, mainSiteSA1, mainSiteSA2 } = mandayInfo;

        const stage1Fees = (auditFeesPerManday["1-65"] || 0) * mainSiteStage1;
        const stage2Fees = (auditFeesPerManday["1-65"] || 0) * mainSiteStage2;
        const sa1Fees = (auditFeesPerManday["1-65"] || 0) * mainSiteSA1;
        const sa2Fees = (auditFeesPerManday["1-65"] || 0) * mainSiteSA2;

        const totalFees = (parseFloat(applicationFees["1-65"]) || 0) + (parseFloat(accreditationFees["1-65"]) || 0) + stage1Fees + stage2Fees + sa1Fees + sa2Fees;
        let discountPercentage = formData.isDiscountGiven === 'true' ? parseFloat(formData.discountPercentage) : 0;
        const discountAmount = totalFees * (discountPercentage / 100);
        const approvedQuotationAmount = totalFees - discountAmount;

        setNeedsApproval(discountPercentage > 5);

        setFormData(prev => ({
            ...prev,
            stage1AuditFees: stage1Fees,
            stage2AuditFees: stage2Fees,
            surveillanceAudit1Fees: sa1Fees,
            surveillanceAudit2Fees: sa2Fees,
            totalFees: totalFees,
            discountAmount: discountAmount,
            approvedQuotationAmount: approvedQuotationAmount
        }));
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.currencyType || !formData.certificationType || !formData.surveillanceType) {
            alert("Please fill in all required fields");
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const dataToSubmit = {
                ...formData,
                needsApproval: needsApproval
            };

            const response = await axios.post('http://localhost:8000/api/quotation/create', dataToSubmit, config);
            console.log(response.data);

            alert(needsApproval ? "Quotation submitted for approval" : "Data saved successfully");
            navigate("/business/quotation");
        } catch (error) {
            console.error('Error submitting quotation:', error);
            alert("Error saving quotation");
        }
    };

    useEffect(() => {
        // Fetch contract reviews
        const fetchContractReviews = async () => {
            try {
                
                const response = await axios.get("http://localhost:8000/api/contract-reviews/contract-reviews/");

                const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                const data = sortedData[0] || {};

                setContractReviews(response.data);
            } catch (error) {
                console.error("Error fetching contract reviews:", error);
            }
        };
        fetchContractReviews();
    }, []);

    

    return (
        <Container>
            <h1 className="pb-4 text-black font-bold" style={{ fontSize: '2rem' }}>Quotation Information</h1>

            <Form className="text-black font-bold" onSubmit={handleSubmit}>
                <h5 className="text-black pb-4" style={{ fontSize: '1.5rem', fontWeight: '500' }}>General Information</h5>
                <Row className="mb-3">
                    {/* <Col md={4}>
                        <Form.Group controlId="quotationNo">
                            <Form.Label>Quotation No</Form.Label>
                            <Form.Control
                                type="text"
                                name="quotationNo"
                                value={formData.quotationNo}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col> */}
                    <Col md={4}>
                        <Form.Group controlId="clientName">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="clientName"
                                value={formData.clientName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="revisionNumber">
                            <Form.Label>Revision Number</Form.Label>
                            <Form.Control
                                type="number"
                                name="revisionNumber"
                                value={formData.revisionNumber}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="standards">
                            <Form.Label>Select Standard</Form.Label>
                            <Form.Control
                                as="select"
                                name="standards"
                                value={formData.standards}
                                onChange={handleStandardChange}
                                required
                            >
                                <option value="">Select a standard</option>
                                {stand1.map((standard) => (
                                    <option key={standard.id} value={standard.standard}>
                                        {standard.standard}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="certificationType">
                            <Form.Label>Certification Type</Form.Label>
                            <Form.Control
                                as="select"
                                name="certificationType"
                                value={formData.certificationType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select certification type</option>
                                {cert.map((type) => (
                                    <option key={type.id} value={type.name}>
                                        {type.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="surveillanceType">
                            <Form.Label>Surveillance Type</Form.Label>
                            <Form.Control
                                as="select"
                                name="surveillanceType"
                                value={formData.surveillanceType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select surveillance type</option>
                                {surv.map((type) => (
                                    <option key={type.id} value={type.name}>
                                        {type.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="requestedScope">
                            <Form.Label>Requested Scope</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="requestedScope"
                                value={formData.requestedScope}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="businessActivity">
                            <Form.Label>Business Activity</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="businessActivity"
                                value={formData.businessActivity}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <h5 className="text-black pb-4" style={{ fontSize: '1.5rem', fontWeight: '500' }}>Mandays Information</h5>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Standard</th>
                            <th>Accreditation Provided</th>
                            <th>Total Stage1 OnSite Mandays</th>
                            <th>Total Stage2 OnSite Mandays</th>
                            <th>Sur.1 OnSite Mandays</th>
                            <th>Sur.2 OnSite Mandays</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{formData.standards || 'IATF 16949'}</td>
                            <td>{formData.standards ? 'IATF' : '-'}</td>
                            <td>
                                <Form.Control
                                    type="number"
                                    name="mainSiteStage1"
                                    value={mandayInfo.mainSiteStage1}
                                    onChange={handleMandayChange}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="number"
                                    name="mainSiteStage2"
                                    value={mandayInfo.mainSiteStage2}
                                    onChange={handleMandayChange}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="number"
                                    name="mainSiteSA1"
                                    value={mandayInfo.mainSiteSA1}
                                    onChange={handleMandayChange}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="number"
                                    name="mainSiteSA2"
                                    value={mandayInfo.mainSiteSA2}
                                    onChange={handleMandayChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <h5 className="text-black pb-4" style={{ fontSize: '1.5rem', fontWeight: '500' }}>Payment Information</h5>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="applicationFees">
                            <Form.Label>Application Fees</Form.Label>
                            <Form.Control
                                type="number"
                                name="applicationFees"
                                value={fees.applicationFees["1-65"]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="accreditationFees">
                            <Form.Label>Accreditation Fees</Form.Label>
                            <Form.Control
                                type="number"
                                name="accreditationFees"
                                value={fees.accreditationFees["1-65"]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="auditFeesPerManday">
                            <Form.Label>Audit Fees Per Manday</Form.Label>
                            <Form.Control
                                type="number"
                                name="auditFeesPerManday"
                                value={fees.auditFeesPerManday["1-65"]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={3}>
                        <Form.Group controlId="stage1AuditFees">
                            <Form.Label>Stage 1 Audit Fees</Form.Label>
                            <Form.Control
                                type="number"
                                name="stage1AuditFees"
                                value={formData.stage1AuditFees}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="stage2AuditFees">
                            <Form.Label>Stage 2 Audit Fees</Form.Label>
                            <Form.Control
                                type="number"
                                name="stage2AuditFees"
                                value={formData.stage2AuditFees}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="surveillanceAudit1Fees">
                            <Form.Label>Surveillance Audit #1 Fees</Form.Label>
                            <Form.Control
                                type="number"
                                name="surveillanceAudit1Fees"
                                value={formData.surveillanceAudit1Fees}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="surveillanceAudit2Fees">
                            <Form.Label>Surveillance Audit #2 Fees</Form.Label>
                            <Form.Control
                                type="number"
                                name="surveillanceAudit2Fees"
                                value={formData.surveillanceAudit2Fees}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="totalFees">
                            <Form.Label>Total Fees</Form.Label>
                            <Form.Control
                                type="number"
                                name="totalFees"
                                value={formData.totalFees}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="currencyType">
                            <Form.Label>Currency Type</Form.Label>
                            <Form.Control
                                as="select"
                                name="currencyType"
                                value={formData.currencyType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select currency</option>
                                {curr.map((currency) => (
                                    <option key={currency.id} value={currency.name}>
                                        {currency.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="isDiscountGiven">
                            <Form.Label>Discount Given</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="isDiscountGiven"
                                value="true"
                                checked={formData.isDiscountGiven === 'true'}
                                onChange={handleChange}
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="isDiscountGiven"
                                value="false"
                                checked={formData.isDiscountGiven === 'false'}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {formData.isDiscountGiven === 'true' && (
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group controlId="discountPercentage">
                                <Form.Label>Discount Percentage</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="discountPercentage"
                                    value={formData.discountPercentage}
                                    onChange={handleChange}
                                    required
                                    // readOnly
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="discountAmount">
                                <Form.Label>Discount Amount</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="discountAmount"
                                    value={formData.discountAmount}
                                    readOnly
                                />
                            </Form.Group>
                        </Col>
                        
                        <Col md={4}>
                            <Form.Group controlId="reasonForDiscount">
                                <Form.Label>Reason for Discount</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="reasonForDiscount"
                                    value={formData.reasonForDiscount}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                )}

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="approvedQuotationAmount">
                            <Form.Label>Approved Quotation Amount</Form.Label>
                            <Form.Control
                                type="number"
                                name="approvedQuotationAmount"
                                value={formData.approvedQuotationAmount}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="text-end">
                    <Button variant="secondary" className="me-2 text-black" onClick={() => navigate("/business/quotation")}>
                        Close
                    </Button>
                    <Button style={{ background: '#152238' }} type="submit">Save Changes</Button>
                </div>
            </Form>
        </Container>
    );
};

export default QuotationForm;

