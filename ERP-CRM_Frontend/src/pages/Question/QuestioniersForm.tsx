
import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface CompanyDetails {
  CompanyName: string;
  address: string;
  invoiceAddress: string;
  phoneNo: string;
  email: string;
  panNo: string;
  gstDetails: string;
  pinCode: string;
  website: string;
  faxNo: string;
  tanNo: string;
}

interface ContactPerson {
  contactName: string;
  contactDesignation: string;
  contactPhone: string;
  contactMobile: string;
  contactEmail: string;
}

interface ManufacturingSite {
  address: string;
  product: string;
  language: string;
  outsourcedProcesses: string;
  nonApplicableClauses: string;
  hasApprovals: boolean;
}

interface ExtendedSite {
  mainSiteAddress: string;
  extendedSiteAddress: string;
  transitTimeOrDistance: string;
  activities: string;
}

interface SrslLocation {
  address: string;
  functions: string;
  language: string;
  isAuditedByOtherBody: boolean;
}

interface FormState {
  questionnaireNo: string;
  date: string;
  companyDetails: CompanyDetails;
  contactPersons: ContactPerson[];
  MultisiteOrganization: boolean;
  isUnderCorporateScheme: boolean;
  corporateHeaderName: string;
  remarks: string;
  businessActivity: string;
  desiredScopeOfCertification: string;
  productDesignResponsibility: {
    organizationResponsible: boolean;
    outsourced: boolean;
    customerResponsible: boolean;
  };
  manufacturingSites: ManufacturingSite[];
  extendedSites: ExtendedSite[];
  srslLocations: SrslLocation[];
  expectedAuditDate: Date | null; 

  otherCertification:string;
  certificationType:string;
  createdByType: 'Client'
  

}
interface ManufacturingSite1 {
  siteType: string;
  noOfShifts: string;
  fullTimeEmployees: string;
  partTimeEmployees: string;
  contractEmployees: string;
  temporaryEmployees: string;
  averageNumberOfDailyWorkers: string;
}

interface FormState {
  manufacturingSites1: ManufacturingSite1[];
}

interface Totals {
  noOfShifts: number;
  fullTimeEmployees: number;
  partTimeEmployees: number;
  contractEmployees: number;
  temporaryEmployees: number;
  averageNumberOfDailyWorkers: number;
}


const QuestioniersForm = () => {
  const navigate = useNavigate();
    const token=localStorage.getItem('token');
    const [formState, setFormState] = useState<FormState>({
      questionnaireNo: '',
      date: '',
      companyDetails: {
        CompanyName: '',
        address: '',
        invoiceAddress: '',
        phoneNo: '',
        email: '',
        panNo: '',
        gstDetails: '',
        pinCode: '',
        website: '',
        faxNo: '',
        tanNo: '',
      },
      contactPersons: [
        {
          contactName: '',
          contactDesignation: '',
          contactPhone: '',
          contactMobile: '',
          contactEmail: '',
        },
      ],
      
      MultisiteOrganization: false,
      isUnderCorporateScheme: false,
      corporateHeaderName: '',
      remarks: '',
      businessActivity: '',
      desiredScopeOfCertification: '',
      productDesignResponsibility: {
        organizationResponsible: false,
        outsourced: false,
        customerResponsible: false,
      },
      manufacturingSites: [
        {
          address: '',
          product: '',
          language: '',
          outsourcedProcesses: '',
          nonApplicableClauses: '',
          hasApprovals: false,
        },
      ],
      extendedSites: [
        {
          mainSiteAddress: '',
          extendedSiteAddress: '',
          transitTimeOrDistance: '',
          activities: '',
        },
      ],
      srslLocations: [
        { address: '', functions: '', language: '', isAuditedByOtherBody: false },
      ],
      expectedAuditDate: '', 
      otherCertification:'',
      certificationType: '',
      createdByType: 'Client', // Add this field
      manufacturingSites1: [
        {
          siteType: "Main Manufacturing Site",
          noOfShifts: "",
          fullTimeEmployees: "",
          partTimeEmployees: "",
          contractEmployees: "",
          temporaryEmployees: "",
          averageNumberOfDailyWorkers: "",
        },
        {
          siteType: "Extended Site(s)",
          noOfShifts: "",
          fullTimeEmployees: "",
          partTimeEmployees: "",
          contractEmployees: "",
          temporaryEmployees: "",
          averageNumberOfDailyWorkers: "",
        },
        {
          siteType: "Standalone Remote Support Locations (SRSL)",
          noOfShifts: "",
          fullTimeEmployees: "",
          partTimeEmployees: "",
          contractEmployees: "",
          temporaryEmployees: "",
          averageNumberOfDailyWorkers: "",
        },
      ],
  
    })
    const [expectedAuditDate, setExpectedAuditDate] = useState<string | null>(null);
    const [otherCertificationSchemes, setOtherCertificationSchemes] = useState<string>("");
    const [cert, setCert] = useState([]);
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setExpectedAuditDate(event.target.value);
    };
  
    const handleInputChange = (
      section: keyof FormState,
      key: string,
      value: string | boolean,
    ) => {
      console.log("key================",key)
      console.log("value================",value)
      console.log("section================",section)
      setFormState((prev) => {
        if (section === 'companyDetails') {
          // if(key =="CompanyName"){
          //   key = "companyName"
          // }
          // For companyDetails, update a specific key in the object
          return {
            ...prev,
            [section]: {
              ...prev[section],
              [key]: value,
            },
          };
        } else {
          // For desiredScopeOfCertification (or other simple fields), just update the value
          return {
            ...prev,
            [section]: value,
          };
        }
      });
    };

    const [totals, setTotals] = useState<Totals>({
      noOfShifts: 0,
      fullTimeEmployees: 0,
      partTimeEmployees: 0,
      contractEmployees: 0,
      temporaryEmployees: 0,
      averageNumberOfDailyWorkers: 0,
    });
    const [grandTotal, setGrandTotal] = useState<number>(0);

    const handleInputChange1 = (
      index: number,
      key: keyof ManufacturingSite1,
      value: string
    ) => {
      const numericValue = key !== 'siteType' ? value.replace(/[^0-9]/g, '') : value;
      setFormState((prev) => {
        const updatedSites = [...prev.manufacturingSites1];
        updatedSites[index] = { ...updatedSites[index], [key]: numericValue };
        return { ...prev, manufacturingSites1: updatedSites };
      });
    };
  
    // Calculate totals when the user inputs data
    const calculateTotals = () => {
      const newTotals = formState.manufacturingSites1.reduce((acc, site) => {
        Object.keys(site).forEach((key) => {
          if (key !== 'siteType') {
            acc[key as keyof Totals] = (acc[key as keyof Totals] || 0) + Number(site[key as keyof ManufacturingSite1] || 0);
          }
        });
        return acc;
      }, {} as Totals);
  
      setTotals(newTotals);
      setGrandTotal(Object.values(newTotals).reduce((a, b) => a + b, 0));
    };
  
    useEffect(() => {
      calculateTotals();
    }, [formState]);
  
    const showAllData = () => {
      console.log("All Form Data:", formState);
      console.log("Totals:", totals);
      console.log("Grand Total:", grandTotal);
    };
  
    const handleContactChange = (index: number, key: string, value: string) => {
      const updatedContacts = [...formState.contactPersons];
      updatedContacts[index] = {
        ...updatedContacts[index],
        [key]: value,
      };
      setFormState((prev) => ({ ...prev, contactPersons: updatedContacts }));
    };
  
    const handleProductDesignResponsibilityChange = (
      key: keyof FormState['productDesignResponsibility'],
      value: boolean,
    ) => {
      setFormState((prev) => ({
        ...prev,
        productDesignResponsibility: {
          ...prev.productDesignResponsibility,
          [key]: value,
        },
      }));
    };

    useEffect(() => {
      const fetchData = async () => {
          try {
              const resp3 = await axios.get('http://localhost:8000/api/questionnaire/certification');
              console.log('Certification types fetched:', resp3.data.data); // Check the structure
              setCert(resp3.data.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      fetchData();
  }, []);
  
    const handleManufacturingSiteChange = (
      index: number,
      key: keyof ManufacturingSite,
      value: string | boolean,
    ) => {
      const updatedSites = [...formState.manufacturingSites];
      updatedSites[index] = {
        ...updatedSites[index],
        [key]: value,
      };
  
      setFormState((prev) => ({
        ...prev,
        manufacturingSites: updatedSites,
      }));
    }; 
  
    const handleExtendedSiteChange = (
      index: number,
      key: keyof ExtendedSite,
      value: string,
    ) => {
      const updatedExtendedSites = [...formState.extendedSites];
      updatedExtendedSites[index] = {
        ...updatedExtendedSites[index],
        [key]: value,
      };
      setFormState((prev) => ({ ...prev, extendedSites: updatedExtendedSites }));
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
    
          const response = await axios.get('http://localhost:8000/api/formsIATF/get', config);
    
          console.log("response", response.data);
    
          if (response.data && Array.isArray(response.data)) {
            const sortedData = response.data.sort(
              (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            const mostRecentData = sortedData[0] || {};
    
            setFormState((prev) => ({
              ...prev,
              questionnaireNo: mostRecentData.questionnaireNo || '',
              date: mostRecentData.date || '',
              companyDetails: {
                CompanyName: mostRecentData.companyName || '',
                address: mostRecentData.address || '',
                invoiceAddress: mostRecentData.invoiceAddress || '',
                phoneNo: mostRecentData.phoneNo || '',
                email: mostRecentData.email || '',
                panNo: mostRecentData.panNo || '',
                gstDetails: mostRecentData.gstDetails || '',
                pinCode: mostRecentData.pinCode || '',
                website: mostRecentData.website || '',
                faxNo: mostRecentData.faxNo || '',
                tanNo: mostRecentData.tanNo || '',
              },
              contactPersons: [
                {
                  contactName: mostRecentData.contactName || '',
                  contactDesignation: mostRecentData.contactDesignation || '',
                  contactPhone: mostRecentData.contactPhone || '',
                  contactMobile: mostRecentData.contactMobile || '',
                  contactEmail: mostRecentData.contactEmail || '',
                },
              ],
              MultisiteOrganization: mostRecentData.multisiteOrganisation || false,
              isUnderCorporateScheme: mostRecentData.isUnderCorporateScheme || false,
              corporateHeaderName: mostRecentData.corporateHeader || '',
              remarks: mostRecentData.remarks || '',
              businessActivity: mostRecentData.businessActivity || '',
              desiredScopeOfCertification: mostRecentData.desiredScopeOfCertification || '',
              manufacturingSites: mostRecentData.manufacturingSites || [],
              extendedSites: mostRecentData.extendedSites || [],
              srslLocations: mostRecentData.srslLocations || [],
              expectedAuditDate: mostRecentData.expectedAuditDate || '',
              otherCertification: mostRecentData.otherCertificationSchemes || '',
              manufacturingSites1: mostRecentData.manufacturingSites || []
            }));
          } else {
            console.warn('Unexpected response format:', response.data);
            alert('No data available.');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          alert('Failed to fetch data. Please try again.');
        }
      };
    
      fetchData();
    }, []);   
    



    const handleSrslLocationChange = (
      index: number,
      key: keyof SrslLocation,
      value: string | boolean,
    ) => {
      const updatedSrslLocations = [...formState.srslLocations];
      updatedSrslLocations[index] = {
        ...updatedSrslLocations[index],
        [key]: value,
      };
      setFormState((prev) => ({ ...prev, srslLocations: updatedSrslLocations }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      console.log('Submitting form with state:', formState);
    
      // Validation for required fields
      if (!formState.createdByType) {
        alert('Please specify who is creating this form (e.g., Client).');
        return;
      }
    
      if (!expectedAuditDate) {
        alert('Please provide an expected audit date.');
        return;
      }
  
      // Format the date fields
      const formattedAuditDate = new Date(expectedAuditDate)
        .toISOString()
        .split('T')[0];
      if (isNaN(new Date(formattedAuditDate).getTime())) {
        alert('Please provide a valid date in the format YYYY-MM-DD.');
        return;
      }
    
      const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    
      // Ensure manufacturingSites array is properly formatted
      const updatedManufacturingSites = Array.isArray(formState.manufacturingSites)
      ? formState.manufacturingSites.map((site) => ({
          address: site.address || '',
          product: site.product || '',
          language: site.language || '',
          outsourcedProcesses: site.outsourcedProcesses || '',
          nonApplicableClauses: site.nonApplicableClauses || '',
          hasApprovals: site.hasApprovals || false,
        }))
      : [];
    
    
      // Ensure extendedSites and srslLocations arrays are properly formatted
      const updatedExtendedSites = formState.extendedSites.map((site) => ({
        activities: site.activities,
        mainSiteAddress: site.mainSiteAddress,
        extendedSiteAddress: site.extendedSiteAddress,
        transitTimeOrDistance: site.transitTimeOrDistance,
      }));
    
      const updatedSrslLocations = formState.srslLocations.map((location) => ({
        address: location.address,
        functions: location.functions,
        language: location.language,
        isAuditedByOtherBody: location.isAuditedByOtherBody,
      }));
    
      // Create the final request payload
      const requestData = {
        createdByType: formState.createdByType,
        createdById: formState.createdById,
        questionnaireNo: formState.questionnaireNo,
        date: currentDate, // Set the current date for the `date` field
        companyName: formState.companyDetails.CompanyName,
        address: formState.companyDetails.address,
        invoiceAddress: formState.companyDetails.invoiceAddress,
        phoneNo: formState.companyDetails.phoneNo,
        email: formState.companyDetails.email,
        panNo: formState.companyDetails.panNo,
        gstDetails: formState.companyDetails.gstDetails,
        pinCode: formState.companyDetails.pinCode,
        website: formState.companyDetails.website,
        faxNo: formState.companyDetails.faxNo,
        tanNo: formState.companyDetails.tanNo,
        contactName: formState.contactPersons[0]?.contactName || null,
        contactDesignation:
          formState.contactPersons[0]?.contactDesignation || null,
        contactPhone: formState.contactPersons[0]?.contactPhone || null,
        contactMobile: formState.contactPersons[0]?.contactMobile || null,
        contactEmail: formState.contactPersons[0]?.contactEmail || null,
        businessActivity: formState.businessActivity,
        desiredScopeOfCertification: formState.desiredScopeOfCertification,
        manufacturingSites: updatedManufacturingSites,
        extendedSites: updatedExtendedSites,
        srslLocations: updatedSrslLocations,
        expectedAuditDate: formattedAuditDate,
        otherCertificationSchemes: formState.otherCertificationSchemes,
        submittedBy: formState.submittedBy,
        uniqueSiteCode: formState.uniqueSiteCode,
        certificateValidUntil: formState.certificateValidUntil,
        previousCertificationBody: formState.previousCertificationBody,
        readinessAssessmentFailed: formState.readinessAssessmentFailed,
        sites: formState.sites,
        certificateCancelledReason: formState.certificateCancelledReason,
        previousIATFCertificateNumber: formState.previousIATFCertificateNumber,
        usiCodeMainSite: formState.usiCodeMainSite,
        srslSupportLocations: formState.srslSupportLocations,
        isSRSLAudited: formState.isSRSLAudited,
        multisiteOrganisation: formState.multisiteOrganisation,
        isUnderConporateScheme: formState.isUnderConporateScheme,
        carporateHeader: formState.carporateHeader,
        remarks: formState.remarks,
        initialCertification: formState.initialCertification,
        upgradeFromISO9001: formState.upgradeFromISO9001,
        upgradeFromLOC: formState.upgradeFromLOC,
        transfer: formState.transfer,
        renewal: formState.renewal,
        previousIATFStatus: formState.previousIATFStatus,
        certificationStatus: formState.certificationStatus,
        certificationType: formState.certificationType,
        clientName: formState.clientName,
      };
    
      console.log('Final request payload:', requestData); // Debugging
    
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
    
        const response = await axios.post(
          'http://localhost:8000/api/formsIATF/create',
          requestData,
          config
        );
    
        console.log('Form submitted successfully:', response.data);
        alert('Form submitted successfully!');
      } catch (error: any) {
        console.error('Error submitting form:', error);
        alert(
          `An error occurred: ${error.response?.data?.error || error.message}`
        );
      }
    };



    
  return (
    <>
    {/* Header */}
    <div className="mb-4">

      <h2 className="font-bold text-black text-center mb-2 fs-4 p-2">
        Indian Register Quality Systems
        <br />
        [A Division of IRCLASS Systems & Solutions Pvt. Ltd.]
      </h2>
      <h2 className="font-bold text-black text-center mb-4 fs-3">
        Application Form for IATF 16949{' '}
      </h2>
    </div>{' '}
    {/* Main content */}
    <form onSubmit={handleSubmit}>
      <div className="mx-auto">
     


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    <div>
      <label className="font-medium text-black dark:text-white mb-3">
        Questionnaire No:
      </label>
      <input
        type="text"
        value={formState.questionnaireNo}
        onChange={(e) => setFormState({ ...formState, questionnaireNo: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
    <div>
      <label className="font-medium text-black dark:text-white mb-3">
        Date:
      </label>
      <input
        type="date"
        name="date"
        value={formState.date}
        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Enter Date"
      />
    </div>
  </div>
        {/* Company Details */}
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          1. Company and Contact Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(formState.companyDetails).map(([key, value]) => (
            <div key={key}>
              <label className="font-medium text-black dark:text-white mb-3 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                value={value}
                onChange={(e) =>
                  handleInputChange('companyDetails', key, e.target.value)
                }
                placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`}  
              />
            </div>
          ))}
        </div>


        {/* Contact Persons */}
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          Contact Persons
        </h3>
        {formState.contactPersons.map((person, index) => (
          <div  key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(person).map(([key, value]) => (
              <div key={key}>
                <label className="font-medium text-black mb-3 capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  value={value}
                  onChange={(e) =>
                    handleContactChange(index, key, e.target.value)
                  }
                  placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`}
                />
              </div>
            ))}
          </div>
        ))}
        

        {/* Multisite Organization */}
        <Row className="mb-3">
          <Form.Label>Is Multisite Organisation?</Form.Label>
          <Form.Check
            type="radio"
            label="Yes"
            name="MultisiteOrganization"
            checked={formState.MultisiteOrganization === true}
            onChange={() =>
              handleInputChange(
                'MultisiteOrganization',
                'MultisiteOrganization',
                true,
              )
            }
          />
          <Form.Check
            type="radio"
            label="No"
            name="MultisiteOrganization"
            checked={formState.MultisiteOrganization === false}
            onChange={() =>
              handleInputChange(
                'MultisiteOrganization',
                'MultisiteOrganization',
                false,
              )
            }
          />
        </Row>

        {/* Corporate Scheme */}
        <Form.Group as={Col} controlId="isCorporateScheme">
          <Form.Label>Is it under Corporate Scheme?</Form.Label>
          <Form.Check
            type="radio"
            label="Yes"
            name="isUnderCorporateScheme"
            checked={formState.isUnderCorporateScheme === true}
            onChange={() =>
              handleInputChange(
                'isUnderCorporateScheme',
                'isUnderCorporateScheme',
                true,
              )
            }
          />
          <Form.Check
            type="radio"
            label="No"
            name="isUnderCorporateScheme"
            checked={formState.isUnderCorporateScheme === false}
            onChange={() =>
              handleInputChange(
                'isUnderCorporateScheme',
                'isUnderCorporateScheme',
                false,
              )
            }
          />
        </Form.Group>

        {/* Conditional rendering for Corporate Header Name and Remarks */}
        {formState.isUnderCorporateScheme && (
          <>
            <Form.Group className="mb-3" controlId="corporateHeaderName">
              <Form.Label>If ‘Yes’, name of ‘Corporate Header’</Form.Label>
              <Form.Control
                type="text"
                value={formState.corporateHeaderName}
                onChange={(e) =>
                  handleInputChange(
                    'isUnderCorporateScheme',
                    'corporateHeaderName',
                    e.target.value,
                  )
                }
                placeholder="Enter corporate header name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="remarks">
              <Form.Label>Remarks:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formState.remarks}
                onChange={(e) =>
                  handleInputChange(
                    'isUnderCorporateScheme',
                    'remarks',
                    e.target.value,
                  )
                }
              />
            </Form.Group>
          </>
        )}

        {/* Business Activity Section */}
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          2. Business Activity (Product, Processes and/or services)
        </h3>
        <textarea
          className="w-full border rounded-lg p-2"
          value={formState.businessActivity}
          onChange={(e) =>
            handleInputChange(
              'businessActivity',
              'businessActivity',
              e.target.value,
            )
          }
          placeholder="Describe your business activities"
        ></textarea>

        {/* Scope of Certification */}
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          Desired Scope of Certification
        </h3>
        <textarea
          className="w-full border rounded-lg p-2"
          value={formState.desiredScopeOfCertification}
          onChange={(e) =>
            handleInputChange(
              'desiredScopeOfCertification',
              'desiredScopeOfCertification',
              e.target.value,
            )
          }
          placeholder="Desired scope of certification"
        ></textarea>

<Col md={4}>
    <Form.Group controlId="certificationType">
        <Form.Label>Certification Type</Form.Label>
        <Form.Select
  name="certificationType"
  value={formState.certificationType}
  onChange={(e) => handleInputChange('certificationType', e.target.name, e.target.value)}
>
  <option value="" disabled>
    {cert.length === 0 ? 'Loading options...' : 'Please select'}
  </option>
  {cert.map((src) => (
    <option key={src.name} value={src.name}>
      {src.name}
    </option>
  ))}
</Form.Select>

    </Form.Group>
</Col>
        {/* Product Design Responsibility Section */}
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          Product Design Responsibility
        </h3>
        <div className="sm:flex sm:items-center sm:gap-3">
          <Form.Label>Organization Responsible</Form.Label>
          <Form.Check
            type="checkbox"
            checked={
              formState.productDesignResponsibility.organizationResponsible
            }
            onChange={(e) =>
              handleProductDesignResponsibilityChange(
                'organizationResponsible',
                e.target.checked,
              )
            }
          />
          <Form.Label>Or Outsourced</Form.Label>
          <Form.Check
            type="checkbox"
            checked={formState.productDesignResponsibility.outsourced}
            onChange={(e) =>
              handleProductDesignResponsibilityChange(
                'outsourced',
                e.target.checked,
              )
            }
          />
          <Form.Label>Customer Responsible</Form.Label>
          <Form.Check
            type="checkbox"
            checked={
              formState.productDesignResponsibility.customerResponsible
            }
            onChange={(e) =>
              handleProductDesignResponsibilityChange(
                'customerResponsible',
                e.target.checked,
              )
            }
          />
        </div>

        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          4. QMS Structure
        </h3>

        {/* 4.a.1 Single Manufacturing Site */}

        <h4 className="font-bold text-black mb-2 mt-4 fs-6">
          Single Manufacturing Site
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(formState.manufacturingSites) &&
      formState.manufacturingSites.map((site, index) => (
            <React.Fragment key={index}>
              <div>
                <label className="font-medium text-black dark:text-white mb-3">
                  Main Manufacturing Site Address
                </label>
                <input
                  type="text"
                  value={site.address}
                  onChange={(e) =>
                    handleManufacturingSiteChange(index,'address', e.target.value)
                  }
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter address"
                />
              </div>
              <div>
                <label className="font-medium text-black dark:text-white mb-3">
                  Product at this Site
                </label>
                <input
                  type="text"
                  value={site.product}
                  onChange={(e) =>
                    handleManufacturingSiteChange(
                      index,
                      'product',
                      e.target.value,
                    )
                  }
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter product details"
                />
              </div>
              <div>
                <label className="font-medium text-black dark:text-white mb-3">
                  Language of Communication
                </label>
                <input
                  type="text"
                  value={site.language}
                  onChange={(e) =>
                    handleManufacturingSiteChange(
                      index,
                      'language',
                      e.target.value,
                    )
                  }
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter language"
                />
              </div>
              <div>
                <label className="font-medium text-black dark:text-white mb-3">
                  Outsourced Processes (if any)
                </label>
                <input
                  type="text"
                  value={site.outsourcedProcesses}
                  onChange={(e) =>
                    handleManufacturingSiteChange(
                      index,
                      'outsourcedProcesses',
                      e.target.value,
                    )
                  }
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter outsourced processes"
                />
              </div>
              <div>
                <label className="font-medium text-black dark:text-white mb-3">
                  Non-Applicable Clauses
                </label>
                <input
                  type="text"
                  value={site.nonApplicableClauses}
                  onChange={(e) =>
                    handleManufacturingSiteChange(
                      index,
                      'nonApplicableClauses',
                      e.target.value,
                    )
                  }
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter non-applicable clauses"
                />
              </div>
              <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Approvals / Regulatory Requirements
            </label>
            <div className="flex items-center">
              <Form.Check
                type="radio"
                label="Yes"
                name={`approvals-${index}`} 
                checked={site.hasApprovals === true}
                onChange={() =>
                  handleManufacturingSiteChange(index, 'hasApprovals', true)
                }
                className="mr-4"
              />
              <Form.Check
                type="radio"
                label="No"
                name={`approvals-${index}`}  
                checked={site.hasApprovals === false}
                onChange={() =>
                  handleManufacturingSiteChange(index, 'hasApprovals', false)
                }
              />
            </div>
          </div>

            </React.Fragment>
          ))}
        </div>

        <button
    type="button"
    onClick={() => {
      setFormState((prev) => ({
        ...prev,
        manufacturingSites: [
          ...prev.manufacturingSites,
          {
            address: '',
            product: '',
            language: '',
            outsourcedProcesses: '',
            nonApplicableClauses: '',
            hasApprovals: false,
          },
        ],
      }));
    }}
    className="bg-blue-500 text-white p-2 rounded mb-4"
  >
    Add Site
  </button>


        
        <h4 className="font-bold text-black mb-2 mt-4 fs-6">
          Single Manufacturing Site with Extended Sites
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Main Manufacturing Site Address
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter address"
              onChange={(e) =>
                handleInputChange(
                  'manufacturingSites',
                  'address',
                  e.target.value,
                )
              }
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Extended Site Address
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter extended site address"
              onChange={(e) =>
                handleExtendedSiteChange(
                  0,
                  'extendedSiteAddress',
                  e.target.value,
                )
              }
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Transit Time or Distance
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter transit time/distance"
              onChange={(e) =>
                handleExtendedSiteChange(
                  0,
                  'transitTimeOrDistance',
                  e.target.value,
                )
              }
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              List of Manufacturing Activities
            </label>
            <textarea
              className="w-full border rounded-lg p-2"
              placeholder="Enter manufacturing activities"
              onChange={(e) =>
                handleExtendedSiteChange(0, 'activities', e.target.value)
              }
            />
          </div>
        </div>
        
       
        <h4 className="font-bold text-black mb-2 mt-4 fs-6">
          4. a.3 Standalone Remote Support Locations (SRSL)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Number of SRSLs
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-2"
              placeholder="Enter number of SRSLs"
              onChange={(e) =>
                handleSrslLocationChange(
                  0,
                  'isAuditedByOtherBody',
                  e.target.value === 'Yes',
                )
              }
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Support Location Address
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter address"
              onChange={(e) =>
                handleSrslLocationChange(0, 'address', e.target.value)
              }
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Function(s)
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter functions"
              onChange={(e) =>
                handleSrslLocationChange(0, 'functions', e.target.value)
              }
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Language of Communication
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter language"
              onChange={(e) =>
                handleSrslLocationChange(0, 'language', e.target.value)
              }
            />
          </div>
        </div>

        <h4 className="font-bold text-black mb-2 mt-4 fs-6">
          4.a.4 Multiple Manufacturing Site(s) [Corporate Scheme]
        </h4>
        <p className="text-black dark:text-white mb-4">
          If yes, then please fill up this Application Form for each
          Manufacturing Site under Corporate Scheme.
        </p>
        <ul className="list-disc list-inside text-black dark:text-white mb-4">
          <li>
            Multiple manufacturing sites are audited collectively with common
            support locations.
          </li>
          <li>
            Separate certificate for each Manufacturing Site will be issued.
          </li>
        </ul>
        <div className="flex items-center gap-4 mb-4">
          <label className="font-medium text-black dark:text-white">
            Corporate Scheme:
          </label>
          <label>
            <input type="radio" name="corporateScheme" value="Yes" />
            <span className="ml-2">Yes</span>
          </label>
          <label>
            <input type="radio" name="corporateScheme" value="No" />
            <span className="ml-2">No</span>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Name of the Manufacturing Site
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter site name"
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Address
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter address"
            />
          </div>
        </div>
   
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          5. Type of Certification Required
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="">
            <label className="font-medium text-black dark:text-white mb-3">
              Initial Certification (Stg. 1 & Stg. 2)
            </label>
            <div className="flex items-center gap-4">
              <label>
                <input type="radio" name="initialCertification" value="Yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label>
                <input type="radio" name="initialCertification" value="No" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="">
            <label className="font-medium text-black dark:text-white mb-3">
              Upgrade from ISO 9001
            </label>
            <div>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="In case of upgrade from IRQS, kindly provide the ISO Certificate details"
              />
            </div>
          </div>
          <div className="">
            <label className="font-medium text-black dark:text-white mb-3">
              Upgrade from Letter of Conformance (LOC)
            </label>
            <div className="flex items-center gap-4">
              <label>
                <input type="radio" name="upgradeLOC" value="Yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="upgradeLOC"
                  value="Not Applicable"
                />
                <span className="ml-2">Not applicable</span>
              </label>
            </div>
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Transfer
            </label>
            <div className="flex items-center gap-4">
              <label>
                <input type="radio" name="transfer" value="Yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label>
                <input type="radio" name="transfer" value="No" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Renewal
            </label>
            <div className="flex items-center gap-4">
              <label>
                <input type="radio" name="renewal" value="Yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label>
                <input type="radio" name="renewal" value="No" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="font-medium text-black dark:text-white mb-3">
              Any changes in the Management System / Operations / Production
              Line / Location vis-à-vis last audit (To be filled at Renewal
              stage)
            </label>
            <textarea
              className="w-full border rounded-lg p-2"
              placeholder="Enter details of changes"
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="font-medium text-black dark:text-white mb-3">
              Have you been previously certified to IATF 16949 and the
              certificate has been Cancelled / Withdrawn / Expired Letter of
              Conformance?
            </label>
            <div className="flex items-center gap-4">
              <label>
                <input
                  type="radio"
                  name="iatfStatus"
                  value="Not applicable"
                />
                <span className="ml-2">Not applicable</span>
              </label>
              <label>
                <input type="radio" name="iatfStatus" value="Yes" />
                <span className="ml-2">Yes</span>
              </label>
            </div>
          </div>
          <div className="">
            <label className="font-medium text-black dark:text-white mb-3">
              Cancelled / Withdrawn / Expired Letter of Conformance (LOC)
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter reason, if applicable"
            />
          </div>
          <div className="">
            <label className="font-medium text-black dark:text-white mb-3">
              Previous IATF Certificate Number
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter certificate number"
            />
          </div>
          <div className="">
            <label className="font-medium text-black dark:text-white mb-3">
              Unique Site Identification (USI) Code of Main Manufacturing Site
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter USI code"
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Certificate valid until
            </label>
            <input type="date" className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Previous Certification Body
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter certification body name"
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="font-medium text-black dark:text-white mb-3">
              Has the organization failed in Stage 1 readiness assessments
              and/or Stage 2 certification audits conducted within the last 6
              months?
            </label>
            <div className="flex items-center gap-4">
              <label>
                <input type="radio" name="auditFailure" value="Yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label>
                <input type="radio" name="auditFailure" value="No" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          7. Details of Manpower / Employees
        </h3>
        <p className="text-black dark:text-white mb-4">
          (Note: For additional sites / SRSL, please add rows.)
        </p>
        <div className="overflow-auto">
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="border p-2">Site(s)</th>
            <th className="border p-2">No. of Shifts</th>
            <th className="border p-2">Full-time Employees</th>
            <th className="border p-2">Part-time Employees</th>
            <th className="border p-2">Contract Employees</th>
            <th className="border p-2">Temporary</th>
            <th className="border p-2">
              Average Number of Daily Workers
            </th>
          </tr>
        </thead>
        <tbody>
          {formState.manufacturingSites1.map((site, index) => (
            <tr key={site.siteType}>
              <td className="border p-2">{site.siteType}</td>
              {Object.keys(site).filter(key => key !== 'siteType').map((key) => (
                <td key={key} className="border p-2">
                  <input
                    type="text"
                    className="w-full border rounded-lg p-1"
                    value={site[key as keyof ManufacturingSite1]}
                    onChange={(e) => handleInputChange1(index, key as keyof ManufacturingSite1, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr className="font-bold bg-gray-100">
            <td className="border p-2">Total</td>
            {Object.entries(totals).map(([key, value]) => (
              <td key={key} className="border p-2">
                <input
                  type="text"
                  className="w-full border rounded-lg p-1"
                  value={value}
                  readOnly
                />
              </td>
            ))}
          </tr>
          <tr className="font-bold bg-gray-200">
            <td className="border p-2">Grand Total</td>
            <td className="border p-2" colSpan={6}>
              <input
                type="text"
                className="w-full border rounded-lg p-1"
                value={grandTotal}
                readOnly
                onClick={showAllData}
              />
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>

       
        <div className="mt-4">
          <h4 className="font-bold text-black mb-2 fs-6">
            Additional details (applicable only if a portion of the site is
            dedicated to Automotive)
          </h4>
          <div>
            <p className="font-medium text-black dark:text-white mb-3">
              i. Are all Automotive Manufacturing processes separated from
              non-automotive? (Provide shop floor layout indicating Automotive
              manufacturing and permanent barriers)
            </p>
            <div className="flex items-center gap-4">
              <label>
                <input type="radio" name="automotiveSeparation" value="Yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label>
                <input type="radio" name="automotiveSeparation" value="No" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-medium text-black dark:text-white mb-3">
              ii. Are dedicated personnel used for Automotive manufacturing?
            </p>
            <div className="flex items-center gap-4">
              <label>
                <input type="radio" name="dedicatedPersonnel" value="Yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label>
                <input type="radio" name="dedicatedPersonnel" value="No" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>

        
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          8. Details of Customer
        </h3>
        <p className="text-black dark:text-white mb-4">
          (Customer / IATF OEM Name is mandatory. Examples: General Motors,
          Ford, Chrysler, Volvo, Fiat, Jaguar, Land Rover, Stellantis, etc.)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Customer / IATF OEM Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter OEM name"
            />
          </div>
          <div>
            <label className="font-medium text-black dark:text-white mb-3">
              Vendor Code
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter vendor code"
            />
          </div>
        </div>

        
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          9. Name and Contact Details of the Management System Consultant /
          Advisor
        </h3>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-black">
                <th className="border p-2">Name of Consultancy Services</th>
                <th className="border p-2">Name of Consultant</th>
                <th className="border p-2">Email ID</th>
                <th className="border p-2">Phone No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border rounded-lg p-1"
                    placeholder="Enter consultancy name"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border rounded-lg p-1"
                    placeholder="Enter consultant name"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="email"
                    className="w-full border rounded-lg p-1"
                    placeholder="Enter email ID"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="tel"
                    className="w-full border rounded-lg p-1"
                    placeholder="Enter phone number"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          10. Expected Audit Date
        </h3>
        <div>
          <label className="font-medium text-black dark:text-white mb-3">
            Please provide the expected date for the audit:
          </label>
          <input
        type="text"
        className="w-full border rounded-lg p-2"
        value={expectedAuditDate || ""}
        onChange={handleDateChange}
      />
        </div>

        <h3 className="font-bold text-black mb-2 mt-4 fs-5">
          11. Any Other Certification Scheme(s)
        </h3>
        <p className="text-black dark:text-white mb-4">
          (Required from IRQS)
        </p>
        <div>
          <label className="font-medium text-black dark:text-white mb-3">
            Please specify:
          </label>
          <textarea
        className="w-full border rounded-lg p-2"
        placeholder="Enter other certification schemes if applicable"
        value={otherCertificationSchemes}
        onChange={(e) => setOtherCertificationSchemes(e.target.value)}
      ></textarea>
        </div>

        {/* Signature Section */}
        <div className="mt-8 border-t border-gray-300 pt-4">
          <h3 className="font-bold text-black mb-4 fs-5">
            Declaration and Authorization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="font-medium text-black dark:text-white mb-3">
                Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="font-medium text-black dark:text-white mb-3">
                Position
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Enter your position"
              />
            </div>
            <div>
              <label className="font-medium text-black dark:text-white mb-3">
                Signature
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Enter signature"
              />
            </div>
            <div>
              <label className="font-medium text-black dark:text-white mb-3">
                Date
              </label>
              <input type="date" className="w-full border rounded-lg p-2" />
            </div>
          </div>
        </div>

        <div className="text-end mt-5">
          <Button style={{ background: '#152238' }} type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
    {/* Footer */}
    <div className="text-center align-middle mt-4">
      <h3>Indian Register Quality Systems</h3>
      <p className="text-sm text-muted">
        2nd Floor, New Building, 52 A, Adi Shankaracharya Marg, , Powai,
        Mumbai - 400 072. <br />
        Tel. No. :+912230519800 Fax No.: + 91 22 2570 3611,
        E-mail:irqs@irclass.org Website: www.irqs.co.in
      </p>
    </div>
  </>
  )
}

export default QuestioniersForm
