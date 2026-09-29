import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const EditLeadTable = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [lead, setLead] = useState({});
  const [sourceOfLeadOptions, setSourceOfLeadOptions] = useState([]);
  const [leadTypeOptions, setLeadTypeOptions] = useState([]);
  const [leadStatusOptions, setLeadStatusOptions] = useState([]);
  const [qualifyOptions, setQualifyOptions] = useState([]);
  const [assignToOptions, setAssignToOptions] = useState([]);

  useEffect(() => {
    fetchSourceOfLead();
    fetchLeadType();
    fetchLeadStatus();
    fetchQualification();
    fetchAssignTo();
  }, []);

  const fetchSourceOfLead = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/lead/source');
      const data = await response.json();
      setSourceOfLeadOptions(data.sourceLead || []);
    } catch (error) {
      console.error('Error fetching source of lead options:', error);
    }
  };

  const fetchLeadType = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/lead/type');
      const data = await response.json();
      setLeadTypeOptions(data.leadType || []);
    } catch (error) {
      console.error('Error fetching lead type options:', error);
    }
  };

  const fetchLeadStatus = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/lead/status');
      const data = await response.json();
      setLeadStatusOptions(data.leadStatus || []);
    } catch (error) {
      console.error('Error fetching lead status options:', error);
    }
  };

  const fetchQualification = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/lead/qualification');
      const data = await response.json();
      setQualifyOptions(data.leadQualification || []);
    } catch (error) {
      console.error('Error fetching qualification options:', error);
    }
  };

  const fetchAssignTo = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/lead/roles');
      const data = await response.json();
      setAssignToOptions(data.roles || []);
    } catch (error) {
      console.error('Error fetching assign to options:', error);
    }
  };

  useEffect(()=>{
    const fetchList=async()=>{
    try{
      const userResp = await axios.get("http://localhost:8000/api/user/users");
      setUsers(userResp.data);

    }catch(err){

    }
  };fetchList();
  },[])

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/lead/leads/${id}`);
        const leadData = response.data.lead;
        setLead({
          leadTypeId: leadData.leadTypeId,
          leadStatusId: leadData.leadStatusId,
          sourceOfLeadId: leadData.sourceOfLeadId,
          requirementFor: leadData.requirementFor,
          leadQualification: leadData.leadQualification,
          companyName: leadData.companyName,
          firstName: leadData.firstName,
          lastName: leadData.lastName,
          phone: leadData.phone,
          mobile: leadData.mobile,
          email: leadData.email,
          designation: leadData.designation,
          country: leadData.country,
          state: leadData.state,
          city: leadData.city,
          remarks: leadData.remarks,
          assignTo: leadData.assignTo,
        });
      } catch (error) {
        console.error('Failed to fetch lead data.', error);
      }
    };
    fetchLead();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead({
      ...lead,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/lead/leads/${id}`, lead);
      navigate('/business/lead'); // Redirect after saving
    } catch (error) {
      console.error('Failed to update lead data.', error);
    }
  };

  return (
    <div>
      <h4 className='mb-4 text-black font-semibold' style={{ fontSize: '30px' }}>View/Edit Lead</h4>
      <Form onSubmit={handleSubmit} className='text-black'>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={lead.companyName || ''}
                onChange={handleChange}
                placeholder="Enter Company Name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="sourceOfLeadId">
              <Form.Label>Source Of Lead</Form.Label>
              <Form.Select
                name="sourceOfLeadId"
                value={lead.sourceOfLeadId || ''}
                onChange={handleChange}
                required
              >
                <option value="">Select Source Of Lead</option>
                {sourceOfLeadOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="leadTypeId">
              <Form.Label>Lead Type</Form.Label>
              <Form.Select
                name="leadTypeId"
                value={lead.leadTypeId || ''}
                onChange={handleChange}
                required
              >
                <option value="">Select Lead Type</option>
                {leadTypeOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="leadStatusId">
              <Form.Label>Lead Status</Form.Label>
              <Form.Select
                name="leadStatusId"
                value={lead.leadStatusId || ''}
                onChange={handleChange}
                required
              >
                <option value="">Select Lead Status</option>
                {leadStatusOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="remarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control
                type="text"
                name="remarks"
                value={lead.remarks || ''}
                onChange={handleChange}
                placeholder="Enter Remarks"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
        <Col md={6}>
            <Form.Group controlId="assignTo">
              <Form.Label>Assign To</Form.Label>
              <Form.Select
                name="assignTo"
                value={lead.assignTo || ''}
                onChange={handleChange}
                required
              >
                <option value="">Select User</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.firstName} {user.lastName}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="leadQualification">
              <Form.Label>Lead Qualification</Form.Label>
              <Form.Select
                name="leadQualification"
                value={lead.leadQualification || ''}
                onChange={handleChange}
                required
              >
                <option value="">Select Qualification</option>
                {qualifyOptions.map(status => (
                  <option key={status.name} value={status.name}>{status.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Button className='bg-black mt-4' type="submit">Save Changes</Button>
      </Form>
    </div>
  );
};

export default EditLeadTable;
