import React, { useEffect } from 'react';
import { Form, Row, Col, Button,Table} from 'react-bootstrap';
import { useState } from 'react';
// import { fontWeight } from 'html2canvas/dist/types/css/property-descriptors/font-weight';
import {data,data1} from './data.ts'
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const IATFContractReviewForm = () => {
  const  {id} = useParams();
  const navigate=useNavigate()
  const [data,setData]=useState(false)
  const [mandays,setMandays]=useState('')
  const [survillance,setSurvillance]=useState('')
  const [count,setCount]=useState(0);
  const [round,setRound]=useState('')
  const [nodesign,SetNoDesign]=useState('')
  const [secondCalculate,setSecondCalculate]=useState([]);
  const [showTable, setShowTable] = useState(false);
  const token=localStorage.getItem('token');
  const [formData, setFormData] = useState({
    id: '',
    createdBy: '',
    leadId: '',
    customerId: '',
    ContractNo: '',
    organizationName: null,
    address: null,
    scopeActivity: null,
    status: null,
    certificationType: null,
    standard: null,
    justificationForExclusion: null,
    commentOnUsage: null,
    MultisiteOrganization: null,
    isUnderCorporateScheme: null,
    corporateHeaderName: null,
    remarks: null,
    iafEAcode: null,
    naceRev2: null,
    naceRev11: null,
    accreditationToBeGranted: null,
    applicationStatus: null,
    preparedByName: null,
    preparedBySignature: null,
    preparedByDate: null,
    approvedByName: null,
    approvedBySignature: null,
    approvedByDate: null,
    managementSystem: null,
    certificateNumber: null,
    certificateExpiryDate: null,
    certificationBody: null,
    usiSiteExtension: null,
    surveillance1Onsite: null,
    surveillance1Offsite: null,
    surveillance2Onsite: null,
    surveillance2Offsite: null,
    surveillance3Onsite: null,
    surveillance3Offsite: null,
    surveillance4Onsite: null,
    surveillance4Offsite: null,
    surveillance5Onsite: null,
    surveillance5Offsite: null,
    consultantToFirm: null,
    consultantDetails: null,
    isTopManagementPartOfBoard: false,
    trainingInfluence: null,
    conflictOfInterestReview: null,
    totalMandays: null,
    stage1Mandays: null,
    stage1Onsite: null,
    stage1Offsite: null,
    stage2RenewalMandays: null,
    stage2RenewalOnsite: null,
    stage2RenewalOffsite: null,
    increasingFactor: null,
    decreasingFactor: 0,
    increaseMandaysCriteria: null,
    decreaseMandaysCriteria: null,
    increaseStandard: null,
    IncsiteName: null,
    decreaseStandard: null,
    DecsiteName: null,
    manpowerAtSite: null,
    manpowerAtSiteExtension: null,
    manpowerAtSRSL: null,
    markUsageComment: null,
    siteExtensionManPower: null,
    siteExtensionManday: null,
    siteExtensionStage1: null,
    siteExtensionStage2: null,
    siteExtensionSpecialAudit: null,
    siteExtensionSA1: null,
    siteExtensionSA2: null,
    siteExtensionTransfer: null,
    mainSiteManPower: null,
    mainSiteManday: null,
    mainSiteStage1: null,
    mainSiteStage2: null,
    mainSiteSpecialAudit: null,
    mainSiteSA1: null,
    mainSiteSA2: null,
    mainSiteTransfer: null,
    upperPercentage: null
});
  const [naceCode1,setNaceCode1]=useState([]);
  const [contractData,setCOntractData]=useState();
  const [naceCode2,setNaceCod2]=useState([]);
  const [iaf,setIaf]=useState([])
  const [increase,setIncrease]=useState([]);
  const [decrease,setDecrease]=useState([]);

  const [recretification,setRecertification]=useState('');

  // const fetchNace=async()=>{
  //   try{
  //     const resp=await axios.get("http://localhost:8000/api/auditor/naceCodeRev1");
  //     console.log("nace1",resp.data)
  //     setNaceCode1(resp.data)

  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  
  useEffect(()=>{
    const data=async()=>{
      try{
      const data1= await axios.get("http://localhost:8000/api/formsIATF/certification-forms");
   console.log(data1.data)

   const abc=data1.data[0].manufacturingSites[0].nonApplicableClauses
  //  console.log("abc",abc)
     SetNoDesign(abc);

   
      }catch(err){
        console.log(err)
      }
    };

    data();
  },[])

  useEffect(()=>{
    const fetchNace=async()=>{
      try{
        const resp=await axios.get("http://localhost:8000/api/auditor/naceCodeRev1");
        const response=await axios.get("http://localhost:8000/api/auditor/auditorNaceRev2")
        const resp1=await axios.get("http://localhost:8000/api/auditor/auditorIAFCodes")

        // console.log("nace1",resp.data)
        // console.log("nace2",response.data)
        // console.log("resp1",resp1.data)
        setNaceCode1(resp.data)
        setNaceCod2(response.data)
        setIaf(resp1.data)
  
      }catch(err){
        console.log(err)
      }
    };
    fetchNace()

  },[])

  const [increaseRows, setIncreaseRows] = useState([
    {
      increaseStandard: '',
      IncsiteName: '',
      increaseMandaysCriteria: '',
      increasingFactor: '',
    },
  ]);

  const [decreaseRows, setDecreaseRows] = useState([
    {
      decreaseStandard: '',
      DecsiteName: '',
      decreaseMandaysCriteria: '',
      decreasingFactor: '',
    },
  ]);
  const handleIncreaseRowChange = (index, field, value) => {
    const updatedRows = [...increaseRows];
    updatedRows[index][field] = value;
    setIncreaseRows(updatedRows);
  };

  const handleDecreaseRowChange = (index, field, value) => {
    const updatedRows = [...decreaseRows];
    updatedRows[index][field] = value;
    setDecreaseRows(updatedRows);
  };

  const handleAddIncreaseRow = () => {
    setIncreaseRows([
      ...increaseRows,
      {
        increaseStandard: '',
        IncsiteName: '',
        increaseMandaysCriteria: '',
        increasingFactor: '',
      },
    ]);
  };

  const handleAddDecreaseRow = () => {
    setDecreaseRows([
      ...decreaseRows,
      {
        decreaseStandard: '',
        DecsiteName: '',
        decreaseMandaysCriteria: '',
        decreasingFactor: '',
      },
    ]);
  };
  
console.log("formData.decreasingFactor===============",formData.decreasingFactor);
console.log("decreaseRows===============",decreaseRows);
console.log("formData==========================",formData);

// formData.decreasingFactor = decreaseRows.reduce((sum, item) => sum + parseFloat(item.decreasingFactor), 0);

const filteredRows = decreaseRows.filter(
  item => item.decreaseMandaysCriteria && item.decreaseMandaysCriteria.includes('Upgradation')
);

formData.decreasingFactor = decreaseRows.reduce((sum, item) => {
  const isUpgradation = item.decreaseMandaysCriteria?.includes('Upgradation');
  if (!isUpgradation) {
    const factor = parseFloat(item.decreasingFactor);
    return sum + (isNaN(factor) ? 0 : factor);
  }
  return sum;
}, 0);


// if(filteredRows.length > 0){
//   formData.upperPercentage = parseFloat(filteredRows[0]["decreasingFactor"])
// }

if (filteredRows.length > 0) {
  const factor = parseFloat(filteredRows[0]["decreasingFactor"]);
  formData.upperPercentage = isNaN(factor) ? 0 : factor; // Assign 0 if factor is not a valid number
} else {
  formData.upperPercentage = 0; // Default to 0 if no filtered rows
}

console.log("formData.decreasingFactor================",formData.decreasingFactor); 
   const getCalculate=async()=>{

    const employeeCount=calculateEmployeeCount();
    console.log("employeeCount",employeeCount)
    try{
      const response=await axios.post("http://localhost:8000/api/audit-calculation/calculate",{
        employeeCount:employeeCount,
        percentage: formData.decreasingFactor ,// formData.decreasingFactor
        upperPercentage:formData.upperPercentage

      })
      console.log("------response--------------",response)
      setSecondCalculate(response.data)
      setShowTable(true)

    }catch(err){
      console.log("err",err)
    }
   }
  //  getCalculate();
  // naceCode1.map((data)=>{
  //   console.log(data.name)
  //   return(
  //     <>
  //     {data.name}
  //     </>
  //   )
  // })
  const [rows, setRows] = useState([
    { site: "Site Calculation", mainSiteManPower: '', mainSiteManday: '', mainSiteStage1: '', mainSiteStage2: '',  mainSiteSpecialAudit: '', mainSiteSA1: '', mainSiteSA2: '',  mainSiteTransfer: '' },
    // { site: "Site Extension", siteExtensionManPower: '', manday: '', stage1: '', stage2: '', specialAudit: '', sa1: '', sa2: '',  transfer: '' },
    // { site: "Standalone Remote Support Location (SRSL)", manpower: '', manday: '', stage1: '', stage2: '', specialAudit: '', sa1: '', sa2: '', transfer: '' }
  ]);
  const [usiCodesForSiteExtension,setUsi]=useState([
    { site: "Site Extension",noOfShifts: '',	shiftName: '', fullTimeEmp:'',partTimeEmp:'',contractEmp:''  },

  ])

  // const [usiCodesForSRSL,setUsiCode]=useState([
  //   { site: "Standalone Remote Support Location (SRSL)",noOfShifts: '',	shiftName: '', fullTimeEmp:'',partTimeEmp:'',contractEmp:''  }
  // ])

  const [ro, setRo] = useState([
    { site: "Main Site",noOfShifts: '',	shiftName: '', fullTimeEmp:'',partTimeEmp:'',contractEmp:'' },
    // { site: "Site Extension",noOfShifts: '',	shiftName: '', fullTimeEmp:'',partTimeEmp:'',contractEmp:''  },
    // { site: "Standalone Remote Support Location (SRSL)",noOfShifts: '',	shiftName: '', fullTimeEmp:'',partTimeEmp:'',contractEmp:''  }
  ]);


  const [revisionHistory,setRevision]=useState([
    {
      revisionDate:'',
      revisionNo:'',
      reason:'',
      details:''
    }
  ])
  const [usiCodesForSRSL, setSrsRows] = useState([
    {
      srsl: "Standalone SRSL",
      noOfShifts: '',
      shiftName: '',
      fullTimeEmp: '',
      partTimeEmp: '',
      contractEmp: '',
    },
  ]);

  const handleAddRow = () => {
    // Add a new row to both Main Site and Site Extension
    setRo([
      ...ro,
      { site: "Main Site", noOfShifts: "", shiftName: "", fullTimeEmp: "", partTimeEmp: "", contractEmp: "" },
    ]);

    setUsi([
      ...usiCodesForSiteExtension,
      { site: "Site Extension", noOfShifts: "", shiftName: "", fullTimeEmp: "", partTimeEmp: "", contractEmp: "" },
    ]);
  };

  const handleAddSrslRow = () => {
    // Add a new row to the SRSL table
    setSrsRows([
      ...usiCodesForSRSL,
      {
        srsl: "Standalone SRSL",
        noOfShifts: '',
        shiftName: '',
        fullTimeEmp: '',
        partTimeEmp: '',
        contractEmp: '',
      },
    ]);
  };



const handleInputChange = (event: { target: { name: any; value: any; type: any; }; }) => {
  const { name, value, type } = event.target;
  if (type === 'radio') {
    setFormData({ ...formData, [name]: value === 'true' });
  } else {
    setFormData({ ...formData, [name]: value });
  }

  if(name == "mainSiteStage1"){
    console.log("mainSiteSA2=============",formData.mainSiteSA2);
    console.log("mainSiteSA2=============",survillance);
    let totalval = parseFloat(value)+survillance+survillance+formData.mainSiteStage2
    setMandays(totalval);
  } 
  
};


  // const handleRowChange = (index, field, value) => {
  //   const updatedRows = [...rows];
  //   updatedRows[index][field] = value;
  //   setRows(updatedRows);
  // };

  

  console.log(data1)
  // const [showModal, setShowModal] = useState(false);
  // const [showModal1,setShowModal1]=useState(false);

  // const handleData = () => {
  //   setShowModal(true);
  // };

  // const handleClose = () => setShowModal(false);

    // const [rows, setRows] = useState([
    //     { site: "Main Site", manpower: '', manday: '', stage1: '', stage2: '', specialAudit: '', sa1: '', sa2: '', sa3: '', sa4: '', sa5: '', transfer: '' },
    //     { site: "Site Extension", manpower: '', manday: '', stage1: '', stage2: '', specialAudit: '', sa1: '', sa2: '', sa3: '', sa4: '', sa5: '', transfer: '' },
    //     { site: "Standalone Remote Support Location (SRSL)", manpower: '', manday: '', stage1: '', stage2: '', specialAudit: '', sa1: '', sa2: '', sa3: '', sa4: '', sa5: '', transfer: '' }
    //   ]);
    console.log("faa",formData.mainSiteStage1)
      // Handle input changes to update the respective row and column
      const handleChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
        
        // Update formData with the modified rows
        setFormData(prevFormData => ({
            ...prevFormData,
            rows: updatedRows
        }));
    };
    const handleSiteChange = (index, field, value) => {
      const updatedRows = [...usiCodesForSiteExtension];
      updatedRows[index][field] = value;
      setUsi(updatedRows);
      
      // Update formData with the modified rows
      setFormData(prevFormData => ({
          ...prevFormData,
          siCodesForSiteExtension: updatedRows
      }));
  };
    const handleChange1 = (index, field, value) => {
        const updatedRo = [...ro];
        updatedRo[index][field] = value;
        setRo(updatedRo);
        
        // Update formData with the modified ro
        setFormData(prevFormData => ({
            ...prevFormData,
            ro: updatedRo
        }));
    };
    
    const handleSrslRowChange = (index, field, value) => {
        const updatedSrsRows = [...usiCodesForSRSL];
        console.log(updatedSrsRows)
        updatedSrsRows[index][field] = value;
        setSrsRows(updatedSrsRows);
        // Update formData with the modified srsRows
        setFormData(prevFormData => ({
            ...prevFormData,
            usiCodesForSRSL: updatedSrsRows
        }));
    };
    
    const handleHistory = (index, field, value) => {
        const updatedRevisionHistory = [...revisionHistory];
        updatedRevisionHistory[index][field] = value;
        setRevision(updatedRevisionHistory);
        
        // Update formData with the modified revision history
        setFormData(prevFormData => ({
            ...prevFormData,
            revisionHistory: updatedRevisionHistory
        }));
    };
    
      // Function to calculate total mandays (based on manual input)
      // const calculateTotalMandays = () => {
      //   return rows.reduce((total, row) => {
      //     const manday = parseFloat(row.manday);
      //     return total + (isNaN(manday) ? 0 : manday);
      //   }, 0);
      // };


      // const handleData=()=>{
      //   // console.log("hello")
      // }

      // const generatePDF = () => {
      //   const doc = new jsPDF();
      
      //   // Title of the PDF
      //   doc.text('IATF Contract Review Form', 105, 10, null, null, 'center');
      
      //   // General Information Section
      //   doc.text('General Information', 105, 20, null, null, 'center');
      //   doc.autoTable({
      //     startY: 30,
      //     body: [
      //       ['Organization’s Name', 'Test Organization'],  // Replace with dynamic data
      //       ['Address', 'abcdef, mnhasdf'],
      //       ['Scope / Activity', '1234'],
      //       ['Status', 'Accepted'],
      //       ['Certification Type', 'qwe'],
      //       ['Standard', 'IATF 16949:2016'],
      //       ['Justification for Exclusion', 'Specifically for Design & Development'],
      //       ['Is it a multisite organization?', 'No'],
      //       ['Is it under Corporate Scheme?', 'Yes'],
      //       ['Remarks', 'Some remarks here'],
      //     ],
      //   });
      
      //   // Accreditation Information Section
      //   doc.text('Accreditation Information', 14, doc.autoTable.previous.finalY + 10);
      //   doc.autoTable({
      //     startY: doc.autoTable.previous.finalY + 20,
      //     body: [
      //       ['Accreditation To Be Granted', 'Yes'],
      //       ['Status of the Application', 'Accepted'],
      //       ['Certification Body', 'IRSCLASS'],
      //       ['Certificate Expiry Date', '2024-10-16'],
      //       ['Certificate Number', 'VGDC123'],
      //     ],
      //   });
      
      //   // Site Information Section
      //   doc.text('Site Information', 14, doc.autoTable.previous.finalY + 10);
      //   doc.autoTable({
      //     startY: doc.autoTable.previous.finalY + 20,
      //     body: [
      //       ['Main Site', 'Main Site Info Here'],
      //       ['Site Extension', 'Add rows for each extension'],
      //       ['Standalone Remote Support Location (SRSL)', 'SRSL Info'],
      //     ],
      //   });
      
      //   // Mandays Information Section
      //   doc.text('Mandays Information', 14, doc.autoTable.previous.finalY + 10);
      //   doc.autoTable({
      //     startY: doc.autoTable.previous.finalY + 20,
      //     head: [['Site Name', 'Total Man Power', 'Manday', 'Stage1', 'Stage2/Renewal']],
      //     body: [
      //       ['Main Site', '154', '7', '1', '1'],
      //       ['Site Extension', 'Null', '1', '1', '1'],
      //       ['Standalone Remote Support Location (SRSL)', 'Null', '1', '1', '1'],
      //     ],
      //   });
      
      //   // Surveillance Information
      //   doc.text('Surveillance Information', 14, doc.autoTable.previous.finalY + 10);
      //   doc.autoTable({
      //     startY: doc.autoTable.previous.finalY + 20,
      //     head: [['Surveillance #', 'Onsite', 'Offsite']],
      //     body: [
      //       ['Surveillance 1', '1', '1'],
      //       ['Surveillance 2', '1', '1'],
      //       ['Surveillance 3', '1', '1'],
      //       ['Surveillance 4', '1', '1'],
      //       ['Surveillance 5', '1', '1'],
      //     ],
      //   });
      
      //   // Impartiality Assessments
      //   doc.text('Impartiality Assessments', 14, doc.autoTable.previous.finalY + 10);
      //   doc.autoTable({
      //     startY: doc.autoTable.previous.finalY + 20,
      //     body: [
      //       ['Possible Risk', 'Value'],
      //       ['Consultant to the firm', 'Yes'],
      //       ['Organization’s Top Management part of the Board', 'No'],
      //       ['Review on Conflict of Interest', 'Passed'],
      //     ],
      //   });
      
      //   // Footer Information
      //   doc.text('Comments / Remarks', 14, doc.autoTable.previous.finalY + 10);
      //   doc.autoTable({
      //     startY: doc.autoTable.previous.finalY + 20,
      //     body: [
      //       ['Prepared by', 'ss'],
      //       ['Approved by', 'sss'],
      //     ],
      //   });
      
      //   // Save the PDF
      //   doc.save('IATF_Contract_Review_Form.pdf');
      // };
      
      // generatePDF();

      const handleData=()=>{
        navigate("/business/contract/manday")

      }

      const handleData1=()=>{
        navigate("/business/contract/recertification")

      }

      const calculateEmployeeCount = () => {
        const rowTotal= ro.reduce((total, row) => {
          const fullTime = parseInt(row.fullTimeEmp || 0);
          const partTime = parseInt(row.partTimeEmp || 0);
          const contract = parseInt(row.contractEmp || 0);
          return total + fullTime + partTime + contract
        }, 0);

        const extended=usiCodesForSiteExtension.reduce((total, row) => {
          const fullTime = parseInt(row.fullTimeEmp || 0);
          const partTime = parseInt(row.partTimeEmp || 0);
          const contract = parseInt(row.contractEmp || 0);
          return total + fullTime + partTime + contract
        }, 0);

        const srsl=usiCodesForSRSL.reduce((total,row)=>{
          const fullTime = parseInt(row.fullTimeEmp || 0);
          const partTime = parseInt(row.partTimeEmp || 0);
          const contract = parseInt(row.contractEmp || 0);
          return total + fullTime + partTime + contract
        },0)

        return rowTotal+extended+srsl;


      };
      

      // const employeeCount=154
      // const [employeeCount,setEmployeeCount]=useState('')

      const abc=async()=>{
        setData(!data)
        
       const employeeCount=calculateEmployeeCount();
       setCount(employeeCount)
        try{
          const resp=await axios.post("http://localhost:8000/api/audit-calculation/calculate",{employeeCount:employeeCount})
          console.log("cal",resp)
          setMandays(resp.data.auditManDays);
          setSurvillance(resp.data.surveillanceAuditMandays)
          setRecertification(resp.data.recertificationAuditManDays)
        }catch(err){
          console.log("err",err.message)
        }

      }


      const dataCalculate=async()=>{
        const employeeCount=calculateEmployeeCount();
        setCount(employeeCount)
         try{
           const resp=await axios.post("http://localhost:8000/api/audit-calculation/calculate",{employeeCount:employeeCount})
           console.log("cal",resp.data)

           setMandays(resp.data.auditManDays)
           setSurvillance(resp.data.roundedSurveillanceDays)
           setRecertification(resp.data.recertificationAuditManDays);
           setRound(resp.data.roundedRecertificationDays)
          //  auditManDays: 7.5,
          //  calculatedAuditDays: "6.38",
          //  calculatedRecertificationDays: "4.25",
          //  calculatedSurveillanceDays: "3.19",
          //  employeeCount: 200,
          //  recertificationAuditManDays: 5,
          //  roundedAuditDays: 7,
          //  roundedRecertificationDays: 5,
          //  roundedSurveillanceDays: 4,
          //  surveillanceAuditMandays: 3.75

          //  setMandays(resp.data.auditManDays);
          //  setSurvillance(resp.data.surveillanceAuditMandays)
         }catch(err){
           console.log("err",err.message)
         }

      }
      // dataCalculate();
  
    const fetchContract=async ()=>{
      // /contract-reviews
      try{
      const resp=await axios.get("http://localhost:8000/api/contract-reviews/contract-reviews");
      console.log("11111111",resp)
      // contractData(resp.data[0])
      }catch(err){
        console.log(err)
      }
    }


    const getMandays=async()=>{
      try{
        const resp7=await axios.get("http://localhost:8000/api/audit-calculation/decreasing-criteria");
        console.log("resp7",resp7.data)
        setDecrease(resp7.data)

        const resp8=await axios.get("http://localhost:8000/api/audit-calculation/increasing-criteria");
        console.log("resp8,",resp8.data) 
        setIncrease(resp8.data)
      }catch(err){

      }
    }


      useEffect(()=>{
        getMandays();
       fetchContract();
       dataCalculate();
      },[])

      const handleSubmit =async (event) => {
        event.preventDefault();
        // console.log(formData.organizationName,formData.applicationStatus,formData.address,formData.certificationType,formData.standard);
        // console.log(rows);

        // const updatedRows = rows.map(row => {
      
        //   return {
        //     ...row,
        //     mainSiteManPower:count,
        //     mainSiteManday: mandays,
        //     mainSiteSA1: survillance,
        //     mainSiteSA2: survillance,
        //   };
        // });
        // console.log(updatedRows)
        // console.log(rows)

        // const extendedRows=usiCodesForSiteExtension.map(row=>{
        //   return {
        //     ...row,
        //     mainSiteManPower:count,
        //     mainSiteManday: mandays,
        //     mainSiteSA1: survillance,
        //     mainSiteSA2: survillance,

        //   }
        // })

        if (!token) {
          console.error("Token is missing!");
          alert("You are not authenticated. Please log in again.");
          return;
        }
      
        const submissionData = {
          ...formData,
          leadId: formData.leadId,
          mainSiteManPower:count,
        mainSiteManday: mandays,
        mainSiteSA1: survillance,
        mainSiteSA2: survillance,
        manpowerAtSite:count
          // rows: updatedRows, // Use updated rows with calculated values
          
        };
        console.log(submissionData);
    
        try {
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
      
          const response = await axios.post(
            "http://localhost:8000/api/contract-reviews/contract-reviews",
            submissionData,
            config
          );
          alert('Submission successful!');
          navigate("/dashboard")
    
        }catch(err){
          console.log("err",err)
          alert('Failed to submit data. Please try again.');
        }
      };
    // abc();
      // const handleData1=()=>{
      //   setShowModal1(true)
      // }

      // const handleClose1=()=>{setShowModal1(false);}

      const handleCriteriaChange = (e) => {
        const { value } = e.target;
      
        // Find the selected criteria in the decrease array
        const selectedCriteria = decrease.find(
          (status) => status.decreasingCriteria === value
        );
       console.log("------value-------",selectedCriteria);
        if (selectedCriteria) {
          // Update both criteria and factor in formData
          setFormData((prevData) => ({
            ...prevData,
            decreaseMandaysCriteria: value, // Update the selected criteria
            decreasingFactor: selectedCriteria.percentage, // Set decreasingFactor to the associated percentage
          }));
        }
      };
    
  return (
    <>
    <Form className='text-black' onSubmit={handleSubmit}>
      {/* General Information Section */}
      <div className='d-flex justify-content-between'>
      <h4 className="font-bold fs-4 mb-3">Contract Review/Application Review</h4>
      <div className='d-flex'>
      <Button className='mr-3 p-3' style={{background:'#152238'}} onClick={handleData}>View Audit Manday(Initial Stage 2) </Button>
      <Button className='p-3' style={{background:'#152238'}} onClick={handleData1}>Recertification audit Manday(after 2Yrs)</Button>
      </div>
      </div>
      <h4 className='mb-3' style={{fontSize:'18px',fontWeight:'500'}}>General Information</h4>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="organizationName">
          <Form.Label>Organization's Name</Form.Label>
          <Form.Control type="text" placeholder="Enter organization name" name="organizationName" value={formData.organizationName}
            onChange={handleInputChange}
             />
        </Form.Group>
        <Form.Group as={Col} controlId="leadId">
            <Form.Label>leadId</Form.Label>
            <Form.Control
              type="text"
            
              name="leadId"
              value={formData.leadId}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="customerId">
            <Form.Label>customerId</Form.Label>
            <Form.Control
              type="text"
            
              name="customerId"
              value={formData.customerId}
              onChange={handleInputChange}
            />
          </Form.Group>

        <Form.Group as={Col} controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={formData.address} name="address"
            onChange={handleInputChange}
            placeholder="Enter address" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="scopeActivity">
          <Form.Label>Scope / Activity</Form.Label>
          <Form.Control type="text" value={formData.scopeActivity} name="scopeActivity"
            onChange={handleInputChange}
            placeholder="Enter scope or activity" />
        </Form.Group>

        <Form.Group as={Col} controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text"  value={formData.status} name="status"
            onChange={handleInputChange}
            placeholder="Enter status" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="certificationType">
        <Form.Label>Certification Type</Form.Label>
        <Form.Control type="text" placeholder="Enter certification type" name="certificationType" value={formData.certificationType}  onChange={handleInputChange}/>
      </Form.Group>

      {/* Standard Section */}
      <div>
      <h4 className='mb-2'>Standard</h4>
      <Form.Group className="mb-3" controlId="standard">
        <Form.Select value={formData.standard} onChange={handleInputChange} name="standard">
          <option value="">Select a Standard</option>
          <option value="IATF_16949_2016">IATF 16949:2016</option>
          <option value="IATF_LOC">IATF - LOC</option>
          <option value="Other_Standard">Other Standard</option>
          {/* Add more options as needed */}
        </Form.Select>
      </Form.Group>
    </div>

      <Form.Group className="mb-3" controlId="justificationForExclusion">
        <Form.Label>Justification for exclusion, specifically for Design & Development</Form.Label>
        <Form.Control as="textarea" rows={3} value={FormData.justificationForExclusion} name="justificationForExclusion" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="commentOnUsage">
        <Form.Label>Comment on usage of Mark / Logo, display of certificate for its appropriateness and validity on the Client’s website</Form.Label>
        <Form.Control as="textarea" rows={3} value={formData.commentOnUsage}  name="commentOnUsage" onChange={handleInputChange} />
      </Form.Group>

      {/* Multisite & Corporate Scheme */}
      <Row className="mb-3">
      <Form.Label>Is Multisite Organisation?</Form.Label>
      <Form.Check
    type="radio"
    label="Yes"
    name="MultisiteOrganization"
    value="true"
    
    onChange={handleInputChange}
  />
  <Form.Check
    type="radio"
    label="No"
    name="MultisiteOrganization"
    value="false"
    onChange={handleInputChange}
  />

<Form.Group as={Col} controlId="isCorporateScheme">
  <Form.Label>Is it under Corporate Scheme?</Form.Label>
  <Form.Check
    type="radio"
    label="Yes"
    name="isUnderCorporateScheme"
    value="true"
    checked={formData.isUnderCorporateScheme === true}
    onChange={handleInputChange}
  />
  <Form.Check
    type="radio"
    label="No"
    name="isUnderCorporateScheme"
    value="false"
    checked={formData.isUnderCorporateScheme === false}
    onChange={handleInputChange}
  />
</Form.Group>
      </Row>


   
      {formData.isUnderCorporateScheme && (
        <>
      <Form.Group className="mb-3" controlId="corporateHeaderName">
        <Form.Label>If ‘Yes’, name of ‘Corporate Header’</Form.Label>
        <Form.Control
          type="text"
          value={formData.corporateHeaderName}
          onChange={handleInputChange}
          placeholder="Enter corporate header name"
          name="corporateHeaderName"
        />
      </Form.Group>

    <Form.Group className="mb-3" controlId="remarks">
      <Form.Label>Remarks:</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        value={formData.remarks}
        onChange={handleInputChange}
        name="remarks"
      />
    </Form.Group>
    </>
)}




<h4 className='mb-3'>Particulars w.r.t. IAF Code(s), NACE Code(s) For IATF 16949:2016 / IATF - LOC</h4>
<Table bordered>
  <tbody>
    <tr>
      <td>IAF/EA Code</td>
      <td>
        <Form.Control
           as="select"
          value={formData.iafEAcode}
          onChange={handleInputChange}
          name="iafEAcode"
          
        >
           <option value="">IAF/EA</option>
       { iaf.map((data)=>{
          // console.log("data1",data.name)
          return(
            <>
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
            </>
          )
        })
      }
          


          </Form.Control>
      </td>
    </tr>
    <tr>
      <td>NACE (Rev.2)</td>
      <td>
      <Form.Control
        as="select"
        value={formData.naceRev2}
        onChange={handleInputChange}
        name="naceRev2"
      >
        <option value="">Select NACE (Rev.2)</option>
       { naceCode2.map((data)=>{
          // console.log("data",data.name)
          return(
            <>
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
            </>
          )
        })
      }
            
      </Form.Control>
      </td>
    </tr>
    <tr>
      <td>NACE (Rev.1.1)</td>
      <td>
       <Form.Control
        as="select"
        value={formData.naceRev11}
        onChange={handleInputChange}
        name="naceRev11"
      >
        <option value="">Select NACE (Rev.1.1)</option>
       { naceCode1.map((data)=>{
          // console.log(data.name)
          return(
            <>
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
            </>
          )
        })
      }
            
      </Form.Control>
      </td>
    </tr>
  </tbody>
</Table>
<h4 className='mb-3'>Information about the Accreditation</h4>
<Table bordered>
  <tbody>
    <tr>
      <td>Accreditation To Be Granted</td>
      <td>
        <Form.Control
          type="text"
          value={formData.accreditationToBeGranted}
          onChange={handleInputChange}
          name="accreditationToBeGranted"
          placeholder="Enter accreditation details"
        />
      </td>
    </tr>
  </tbody>
</Table>
<h4 className='mb-3'>Status of the Application</h4>
<Table bordered>
  <tbody>
    <tr>
      <td>Whether application for certification accepted or declined?</td>
      <td>
        <Form.Select
          value={formData.applicationStatus}
          onChange={handleInputChange}
          name="applicationStatus"
        >
          <option value="">Select</option>
          <option value="Accepted">Accepted</option>
          <option value="Declined">Declined</option>
        </Form.Select>
      </td>
    </tr>
    {formData.applicationStatus === "Declined" && (
      <tr>
        <td>If declined, reasons for declining</td>
        <td>
          <Form.Control
            as="textarea"
            rows={2}
            value={formData.justificationForExclusion}
            onChange={handleInputChange}
            name="justificationForExclusion"
            placeholder="Enter reasons for declining"
          />
        </td>
      </tr>
    )}
    {formData.applicationStatus === "Declined" && (
      <tr>
        <td>Date of communication to applicant, if declined</td>
        <td>
          <Form.Control
            type="date"
          
            onChange={handleInputChange}
            // name="preparedByDate"
          />
        </td>
      </tr>
    )}
  </tbody>
</Table>
<h4 className='mb-3'>Sites Name Information</h4>
<Table bordered>
  <thead>
    <tr>
      <th>Sites Name</th>
      <th>No. of Shifts</th>
      <th>Shifts Name</th>
      <th>Full-time Emp.</th>
      <th>Part-time Emp.</th>
      <th>Contract Emp.</th>
      {/* <th>Total </th> */}
    </tr>
  </thead>
  <tbody>
    {ro.map((row, index) => (
      <tr key={index}>
        <td>{row.site}</td>
        <td>
          <Form.Control
            type="number"
            name="noOfShifts"
            value={row.noOfShifts}
            onChange={(e) => handleChange1(index, 'noOfShifts', e.target.value)}
            placeholder="Enter No. of Shifts"
          />
        </td>
        <td>
          <Form.Control
            type="text"
            name="shiftName"
            value={row.shiftName}
            onChange={(e) => handleChange1(index, 'shiftName', e.target.value)}
            placeholder="Enter Shift Name"
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="fullTimeEmp"
            value={row.fullTimeEmp}
            onChange={(e) => handleChange1(index, 'fullTimeEmp', e.target.value)}
            placeholder="Enter Full-time Emp."
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="partTimeEmp"
            value={row.partTimeEmp}
            onChange={(e) => handleChange1(index, 'partTimeEmp', e.target.value)}
            placeholder="Enter Part-time Emp."
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="contractEmp"
            value={row.contractEmp}
            onChange={(e) => handleChange1(index, 'contractEmp', e.target.value)}
            placeholder="Enter Contract Emp."
          />
        </td>
        {/* <td>
          <Form.Control
            type="number"
            name="contractEmp"
            value={row.contractEmp}
            onChange={(e) => handleChange1(index, 'contractEmp', e.target.value)}
            placeholder="Enter Contract Emp."
          />
        </td> */}

      </tr>
    ))}
    {
      usiCodesForSiteExtension.map((row,index)=>(
        <tr key={index}>
        <td>{row.site}</td>
        <td>
          <Form.Control
            type="number"
            name="noOfShifts"
            value={row.noOfShifts}
            onChange={(e) => handleSiteChange(index, 'noOfShifts', e.target.value)}
            placeholder="Enter No. of Shifts"
          />
        </td>
        <td>
          <Form.Control
            type="text"
            name="shiftName"
            value={row.shiftName}
            onChange={(e) => handleSiteChange(index, 'shiftName', e.target.value)}
            placeholder="Enter Shift Name"
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="fullTimeEmp"
            value={row.fullTimeEmp}
            onChange={(e) => handleSiteChange(index, 'fullTimeEmp', e.target.value)}
            placeholder="Enter Full-time Emp."
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="partTimeEmp"
            value={row.partTimeEmp}
            onChange={(e) => handleSiteChange(index, 'partTimeEmp', e.target.value)}
            placeholder="Enter Part-time Emp."
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="contractEmp"
            value={row.contractEmp}
            onChange={(e) => handleSiteChange(index, 'contractEmp', e.target.value)}
            placeholder="Enter Contract Emp."
          />
        </td>
        {/* <td>
          <Form.Control
            type="number"
            name="contractEmp"
            value={row.contractEmp}
            onChange={(e) => handleSiteChange(index, 'contractEmp', e.target.value)}
            placeholder="Enter Contract Emp."
          />
        </td> */}

      </tr>
      ))}
  </tbody>
</Table>
<Button className='mb-2 p-2 ' style={{background:'#152238'}} onClick={handleAddRow}>
Add Row
      </Button>
      



      {/* Standalone Remote Support Location Section */}
      <h4 className='mb-3'>Standalone Remote Support Location (SRSL)</h4>
<Table bordered>
  <thead>
    <tr>
      <th>SRSL</th>
      <th>No. of Shifts</th>
      <th>Shifts Name</th>
      <th>Full-time Emp.</th>
      <th>Part-time Emp.</th>
      <th>Contract Emp.</th>
    </tr>
  </thead>
  <tbody>
    {usiCodesForSRSL.map((row, index) => (
      <tr key={index}>
        <td>{row.srsl}</td>
        <td>
          <Form.Control
            type="number"
            name="noOfShifts"
            value={row.noOfShifts}
            onChange={(e) => handleSrslRowChange(index, 'noOfShifts', e.target.value)}
            placeholder="Enter No. of Shifts"
          />
        </td>
        <td>
          <Form.Control
            type="text"
            name="shiftName"
            value={row.shiftName}
            onChange={(e) => handleSrslRowChange(index, 'shiftName', e.target.value)}
            placeholder="Enter Shift Name"
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name='fullTimeEmp'
            value={row.fullTimeEmp}
            onChange={(e) => handleSrslRowChange(index, 'fullTimeEmp', e.target.value)}
            placeholder="Enter Full-time Emp."
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name='partTimeEmp'
            value={row.partTimeEmp}
            onChange={(e) => handleSrslRowChange(index, 'partTimeEmp', e.target.value)}
            placeholder="Enter Part-time Emp."
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name='contractEmp'
            value={row.contractEmp}
            onChange={(e) => handleSrslRowChange(index, 'contractEmp', e.target.value)}
            placeholder="Enter Contract Emp."
          />
        </td>
      </tr>
    ))}
  </tbody>
</Table>

<Button className='mb-2 p-2 ' style={{background:'#152238'}} onClick={handleAddSrslRow}>
        Add Row for SRSL
      </Button>

      <h4 className='mb-3'>Calculation of Mandays [Refer Annexure 1]</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>SITENAME - ADDRESS</th>
            <th>Total Man Power</th>
            <th>Manday</th>
            <th>Stage 1</th>
            <th>Stage 2 / Renewal</th>
            <th>Special Audit</th>
            <th>SA1</th>
            <th>SA2</th>
            {/* <th>SA3</th>
            <th>SA4</th>
            <th>SA5</th> */}
            <th>Transfer</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>Site Calculation</td>
              <td>
                <Form.Control
                  type="number"
                  name="mainSiteManPower"
                  value={count}
                  onChange={handleInputChange}
                  placeholder="Man Power"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="mainSiteManday"
                  value={mandays}
                  onChange={handleInputChange}
                  placeholder="Manday"
                />
              </td>
              <td>
              <Form.Select
                value={formData.mainSiteStage1}
                onChange={handleInputChange}
                name="mainSiteStage1"
              >
                <option value="0">Stage 1</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
              </Form.Select>

                {/* <Form.Control
                  type="number"
                  name="mainSiteStage1"
                  value={formData.mainSiteStage1}
                  onChange={handleInputChange}
                  placeholder="Stage 1"
                /> */}
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="mainSiteStage2"
                  value={formData.mainSiteStage2}
                  onChange={handleInputChange}
                  placeholder="Stage 2"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="mainSiteSpecialAudit"
                  value={formData.mainSiteSpecialAudit}
                  onChange={handleInputChange}
                  placeholder="Special Audit"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="mainSiteSA1"
                  value={survillance}
                  onChange={handleInputChange}
                  placeholder="SA1"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="mainSiteSA2"
                  value={survillance}
                  onChange={handleInputChange}
                  placeholder="SA2"
                />
              </td>
              {/* <td>
                <Form.Control
                  type="number"
                  value={row.sa3}
                  onChange={(e) => handleInputChange(index, 'sa3', e.target.value)}
                  placeholder="SA3"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={row.sa4}
                  onChange={(e) => handleInputChange(index, 'sa4', e.target.value)}
                  placeholder="SA4"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={row.sa5}
                  onChange={(e) => handleInputChange(index, 'sa5', e.target.value)}
                  placeholder="SA5"
                />
              </td> */}
              <td>
                <Form.Control
                  type="number"
                  name="mainSiteTransfer"
                  value={formData.mainSiteTransfer}
                  onChange={handleInputChange}
                  placeholder="Transfer"
                />
              </td>
            </tr>

          {/* <tr>
            <td>Site Extension</td>
            <td><Form.Control
                  type="number"
                  name="mainSiteTransfer"
                  value={count}
                  onChange={ handleInputChange}
                  placeholder="Man Power"
                /></td>
                <td><Form.Control
                  type="number"
                  name="siteExtensionManday"
                  value={formData.siteExtensionManday}
                  onChange={handleInputChange}
                   placeholder="Manday"
                  
                /></td>
               <td><Form.Control
                  type="number"
                  name="siteExtensionStage1"
                  value={formData.siteExtensionStage1}
                  onChange={handleInputChange}
                    placeholder="Stage 1"
                  
                /></td>
                <td><Form.Control
                  type="number"
                  name="siteExtensionStage2"
                  value={formData.siteExtensionStage2}
                  onChange={handleInputChange}
                   placeholder="Stage 2"
                  
                /></td>
                  <td><Form.Control
                  type="number"
                  name="siteExtensionSpecialAudit"
                  value={formData.siteExtensionSpecialAudit}
                  onChange={handleInputChange}
                  placeholder="Special Audit"
                  
                /></td>
                 <td><Form.Control
                  type="number"
                  name="siteExtensionSA1"
                  value={formData.siteExtensionSA1}
                  onChange={handleInputChange}
                   placeholder="SA1"
                  
                /></td>
                <td><Form.Control
                  type="number"
                  name="siteExtensionSA2"
                  value={formData.siteExtensionSA2}
                  onChange={handleInputChange}
                  placeholder="SA2"
                  
                /></td>
                <td><Form.Control
                  type="number"
                  name="siteExtensionTransfer"
                  value={formData.siteExtensionTransfer}
                  onChange={handleInputChange}
                  placeholder="Transfer"
                  
                /></td>



                
          </tr> */}
        </tbody>
      </Table>
      <Button onClick={abc} className='mb-2 p-2 ' style={{background:'#152238'}}>
  Calculate Mandays
</Button>

      <h4 className='mb-3'>Manpower Information</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Manpower Information</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manpower at site</td>
            <td>
              <Form.Control
                type="number"
                name="manpowerAtSite"
                value={count}
                onChange={handleInputChange}
                
              />
            </td>
          </tr>
          <tr>
            <td>
              Manpower at site extension <br />
              (if site extension is more than 1 then add rows)
            </td>
            <td>
              <Form.Control
                type="number"
                name='manpowerAtSiteExtension'
                value={formData.manpowerAtSiteExtension}
                onChange={handleInputChange}

              />
            </td>
          </tr>
          <tr>
            <td>
              Manpower at Standalone Remote Support Location (SRSL) <br />
              (if SRSL is more than 1 then add rows)
            </td>
            <td>
              <Form.Control
                type="number"
                value={formData.manpowerAtSRSL}
                name="manpowerAtSRSL"
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Increase in Mandays Section */}
      {/* <h4 className='mb-3'>Increase in Mandays</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Standard</th>
            <th>Site Name</th>
            <th>Criteria for Increase in audit time of management systems</th>
            <th>Increasing Factor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control
                type="text"
                value={formData.increaseStandard}
                name="increaseStandard"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                value={formData.IncsiteName}
                name="IncsiteName"
                onChange={handleInputChange}
              />
            </td>
            <td>
              
              <Form.Select
                
                name="increaseMandaysCriteria"
                value={formData.increaseMandaysCriteria}
               onChange={handleInputChange}
             >
                <option value="" >Please select</option>
                 {increase.map(status => (
                   <option key={status.id} value={status.increasingCriteria}>{`${status.percentage}-${status.increasingCriteria}`}</option>
                 ))}
             

             </Form.Select>
            </td>
            <td>
              <Form.Control
                type="number"
                name="increasingFactor"
                value={formData.increasingFactor}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                value="IATF 16949" // Static value
                readOnly
              />
            </td>
            <td>
              <Form.Control
                type="text"
                // Static value
                readOnly
              />
            </td>
            <td>
              <Form.Control
                type="text"
                 // Static value
                readOnly
              />
            </td>
            <td>
              <Form.Control
                type="number"
                 // Static value
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </Table>



      <h4 className='mb-3'>Decrease in Mandays</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Standard</th>
            <th>Site Name</th>
            <th>Standard	Site Name	Criteria for Decrease in audit time of management systems
(Max. 50 % discount)
Decreasing Factor
</th>
            <th>Decreasing Factor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control
                type="text"
                value={formData.decreaseStandard}
                name="decreaseStandard"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                 value={formData.DecsiteName}
                 name="DecsiteName"
                 onChange={handleInputChange}
                
              />
            </td>
            <td>
              <Form.Select
                
                 name="decreaseMandaysCriteria"
                 value={formData.decreaseMandaysCriteria}
                 onChange={handleCriteriaChange}
              >
                 <option value="" disabled>Please select</option>
                  {decrease.map(status => (
                    <option key={status.id} value={status.decreasingCriteria}>{`${status.percentage}-${status.decreasingCriteria}`}</option>
                  ))}
              

              </Form.Select>
            </td>
            <td>
              <Form.Control
                type="number"
                name="decreasingFactor"
                value={formData.decreasingFactor}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                 // Static value
                readOnly
              />
            </td>
            <td>
              <Form.Control
                type="text"
                // Static value
                readOnly
              />
            </td>
            <td>
              <Form.Control
                type="text"
                 // Static value
                readOnly
              />
            </td>
            <td>
              <Form.Control
                type="number"
                // Static value
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </Table> */}

<h4 className="mb-3">Increase in Mandays</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Standard</th>
            <th>Site Name</th>
            <th>Criteria for Increase in audit time of management systems</th>
            <th>Increasing Factor</th>
          </tr>
        </thead>
        <tbody>
          {increaseRows.map((row, index) => (
            <tr key={index}>
              <td>
                <Form.Control
                  type="text"
                  value={row.increaseStandard}
                  name="increaseStandard"
                  onChange={(e) => handleIncreaseRowChange(index, "increaseStandard", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.IncsiteName}
                  name="IncsiteName"
                  onChange={(e) => handleIncreaseRowChange(index, "IncsiteName", e.target.value)}
                />
              </td>
              <td>
                <Form.Select
                  name="increaseMandaysCriteria"
                  value={row.increaseMandaysCriteria}
                  onChange={(e) => handleIncreaseRowChange(index, "increaseMandaysCriteria", e.target.value)}
                >
                  <option value="">Please select</option>
                  {/* Replace 'increase' with your actual options */}
                  {increase.map((status) => (
                    <option key={status.id} value={status.increasingCriteria}>
                      {`${status.percentage}-${status.increasingCriteria}`}
                    </option>
                  ))}
                </Form.Select>
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="increasingFactor"
                  value={row.increasingFactor}
                  onChange={(e) => handleIncreaseRowChange(index, "increasingFactor", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className='mb-2 p-2 ' style={{background:'#152238'}} onClick={handleAddIncreaseRow}>
        Add Row for Increase
      </Button>

      <h4 className="mb-3">Decrease in Mandays</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Standard</th>
            <th>Site Name</th>
            <th>Criteria for Decrease in audit time of management systems (Max. 50 % discount)</th>
            <th>Decreasing Factor</th>
          </tr>
        </thead>
        <tbody>
          {decreaseRows.map((row, index) => (
            <tr key={index}>
              <td>
                <Form.Control
                  type="text"
                  value={row.decreaseStandard}
                  name="decreaseStandard"
                  onChange={(e) => handleDecreaseRowChange(index, "decreaseStandard", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.DecsiteName}
                  name="DecsiteName"
                  onChange={(e) => handleDecreaseRowChange(index, "DecsiteName", e.target.value)}
                />
              </td>
              <td>
                <Form.Select
                  name="decreaseMandaysCriteria"
                  value={row.decreaseMandaysCriteria}
                  onChange={(e) => handleDecreaseRowChange(index, "decreaseMandaysCriteria", e.target.value)}
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  {/* Replace 'decrease' with your actual options */}
                  {decrease.map((status) => (
                    <option key={status.id} value={status.decreasingCriteria}>
                      {`${status.percentage}-${status.decreasingCriteria}`}
                    </option>
                  ))}
                </Form.Select>
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="decreasingFactor"
                  value={row.decreasingFactor}
                  onChange={(e) => handleDecreaseRowChange(index, "decreasingFactor", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className='mb-2 p-2 ' style={{background:'#152238'}} onClick={handleAddDecreaseRow}>
        Add Row for Decrease
      </Button>

      {/* <h4 className='mb-3'>Mandays Information</h4> */}
      <Table bordered>
        <thead>
          <tr>
            <th>Decreasing Factors</th>
            <td>
              <Form.Control
                type="number"
                value={formData.decreasingFactor}
                readOnly
              />
            </td>
            <th>Increasing Factors</th>
            <td>
              <Form.Control
                type="number"
                value={formData.increasingFactor}
                // readOnly
              />
            </td>
          </tr>

        </thead>
        </Table>
       
         <Button style={{background:'#152238'}}  className="text-center mb-3" onClick={getCalculate}>Mandays Calculation</Button>
          
         
          
        <Table>
        <tbody>
          

         
          <tr>
            <td>Total mandays</td>
            <td>
              <Form.Control
                type="number"
                name="totalMandays"
                value={secondCalculate.calculatedAuditDays}
                onChange={handleInputChange}
              />
            </td>
            <td>Round off to next 0.50 day 1</td>
            <td>
              <Form.Control
                type="number"
                // name='stage2RenewalMandays'
                value={secondCalculate.roundedAuditDays}
                // value={formData.stage2RenewalMandays}
                
              />
            </td>
          </tr>
          <tr>
            <td>Stage 1 Manday(s)</td>
            <td>
              <Form.Control
                type="text"
               name="stage1Mandays"
               value={formData.mainSiteStage1}
               onChange={handleInputChange}
              />
            </td>
            <td>Stage 2 / Renewal Manday(s)</td>
            <td>
              <Form.Control
                type="text"
                name='stage2RenewalMandays'
                value={formData.mainSiteStage2}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Stage 1 Onsite</td>
            <td>
              <Form.Control
                type="number"
                 step="0.01"
                name='stage1Onsite'
                value={formData.stage1Onsite}
                onChange={handleInputChange}
              />
            </td>
            <td>Stage 2 / Renewal Onsite</td>
            <td>
              <Form.Control
                type="number"
                 step="0.01"
                name='stage2RenewalOnsite'
                value={formData.stage2RenewalOnsite}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Stage 1 Offsite</td>
            <td>
              <Form.Control
                type="number"
                 step="0.01"
               name='stage1Offsite'
               value={formData.stage1Offsite}
               onChange={handleInputChange}
              />
            </td>
            <td>Stage 2 / Renewal Offsite</td>
            <td>
              <Form.Control
                type="text"
                // name="stage2RenewalOffsite"
                // value={formData.stage2RenewalOffsite}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Additional 0.50 day for Planning stage1</td>
            <td>
            <Form.Control
                type="text"
                value='0.50'
                onChange={handleInputChange}
              />
            </td>
            <td>Additional 0.50 day for Planning stage2</td>
            <td>
            <Form.Control
                type="number"
                value='0.50'
                
              />
            </td>
          

          </tr>
          <tr>
            <td>
              Total Mandays (stage1)
            </td>
            <td>
            <Form.Control
                type="text"
                value={Number(formData.mainSiteStage1)+0.50}
                
              />
            </td>
            <td>
              Total Mandays (stage2)
            </td>
            <td>
            <Form.Control
                type="text"
                value={Number(formData.mainSiteStage2)+0.50}
                
              />
            </td>
          </tr>
        </tbody>
      </Table>


       {/* <h4 className='mb-3'>Mandays Information</h4> */}

      <h4 className='mb-3'> Surveillance Mandays</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Surveillance Manday(s) (Overall)</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Surveillance 1 Onsite </td>
            <td><Form.Control
                type="number"
                // Static value
                 step="0.01"
                name="surveillance1Onsite"
                value={secondCalculate.calculatedSurveillanceDays}
                onChange={handleInputChange}
              /></td>
            <td>Surveillance 1 Offsite</td>
            <td>
              <Form.Control
                type="number"
                 step="0.01"
                name='surveillance1Offsite'
                value={formData.surveillance1Offsite}
                onChange={handleInputChange}
              /></td>
          </tr>
          <tr>
            <td>Surveillance 2 Onsite</td>
            <td><Form.Control
                type="number"
                 step="0.01"
                name="surveillance2Onsite"
                value={secondCalculate.calculatedSurveillanceDays   }
                onChange={handleInputChange}
              /></td>
            <td>Surveillance 2 Offsite</td>
            <td><Form.Control
                type="number"
                 step="0.01"
                name="surveillance2Offsite"
                value={formData.surveillance2Offsite}
                onChange={handleInputChange}
              /></td>
          </tr>
          <tr>
            <td>Surveillance 3 Onsite</td>
            <td><Form.Control
                type="number"
                 step="0.01"
                name="surveillance3Onsite"
                value={formData.surveillance3Onsite}
                onChange={handleInputChange}
              /></td>
            <td>Surveillance 3 Offsite</td>
            <td><Form.Control
                type="number"
                 step="0.01"
                name="surveillance3Offsite"
                value={formData.surveillance3Offsite}
                onChange={handleInputChange}
              /></td>
          </tr>
          <tr>
            <td>Survillance 4 Onsite</td>
            <td><Form.Control
                type="number"
                 step="0.01"
                name="surveillance4Onsite"
                value={formData.surveillance4Onsite}
                onChange={handleInputChange}
              /></td>
            <td>Survillance 4  OffSite</td>
            <td><Form.Control
                type="number"
                 step="0.01"
                name="surveillance4Offsite"
                value={formData.surveillance4Offsite}
                onChange={handleInputChange}
              /></td>
          </tr>
          <tr>
            <td>Survillance 5 Onsite</td>
            <td><Form.Control
                type="number"
                 step="0.01"
                name="surveillance5Onsite"
                value={formData.surveillance5Onsite}
                onChange={handleInputChange}
              /></td>
            <td>Survillance 5 Offsite</td>
            <td><Form.Control
                type="number"
                 step="0.01"
                name="surveillance5Offsite"
                value={formData.surveillance5Offsite}
                onChange={handleInputChange}
              /></td>


            </tr>
            <tr>
            <td>Additional 0.50 day for Planning stage1</td>
            <td>
            <Form.Control
                type="number"
                value="0.50"
               
              />
            </td>
            <td>Additional 0.50 day for Planning stage2</td>
            <td>
            <Form.Control
                type="number"
                value="0.50"
                
              />
            </td>
          

          </tr>
          <tr>
            <td>
              Total Mandays (Survillance1)
            </td>
            <td>
            <Form.Control
                type="number"
                 step="0.01"
                value={secondCalculate.roundedSurveillanceDays||0}
                
              />
            </td>
            <td>
              Total Mandays (Survillance2)
            </td>
            <td>
            <Form.Control
                type="number"
                 step="0.01"
                value={secondCalculate.roundedSurveillanceDays||0}
                
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <div>
      {/* Impartiality Assessments Table */}
      <h4 className='mb-3'>Impartiality Assessments</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Possible Risk</th>
            <th>Value (Yes/No)</th>
            <th>Assessment / Mention Name of Resources</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultant to the firm</td>
            <td> <Form.Control as="select">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Control></td>
            <td> <Form.Control
            type="text"
            name="consultantToFirm"
            value={formData.consultantToFirm}
            onChange={handleInputChange}
          /></td>
          </tr>
          <tr>
            <td>Name and details of the consultant to be confirmed</td>
            <td> <Form.Control as="select">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Control></td>
            <td><Form.Control
            type="text"
            name="consultantDetails"
            value={formData.consultantDetails}
            onChange={handleInputChange}
          /></td>
          </tr>
          <tr>
            <td>Organization’s Top Mgt part of IRS/ISSPL board</td>
            <td> <Form.Control as="select">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Control></td>
            <td> <Form.Control as="select">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Control></td>
          </tr>
          <tr>
            <td>Influence through any training provided</td>
            <td> <Form.Control as="select">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Control></td>
            <td><Form.Control
            type="text"
            name="trainingInfluence"
            value={formData.trainingInfluence}
            onChange={handleInputChange}
          /></td>
          </tr>
          <tr>
            <td>Review on Conflict of Interest</td>
            <td> <Form.Control as="select">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Control></td>
            <td><Form.Control
            type="text"
            
            name="conflictOfInterestReview"
            value={formData.conflictOfInterestReview}
            onChange={handleInputChange}
          /></td>
          </tr>
        </tbody>
      </Table>

      {/* Existing Certification Status Table */}
      <h4 className='mb-3'>Existing Certification Status</h4>
      <Table bordered>
        <thead>
          <tr>
            <th colSpan="2" style={{ backgroundColor: '#e9ecef', textAlign: 'center' }}>
              Existing Certification Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width:'50%'}}>Management System</td>
            <td> <Form.Control
            type="text"
            name="managementSystem"
            value={formData.managementSystem}
            onChange={handleInputChange}
          /> </td>
          </tr>
          <tr>
            <td>Certificate No. of Site with USI Code</td>
            <td><Form.Control
            type="text"
            name="certificateNumber"
            value={formData.certificateNumber}
            onChange={handleInputChange}
          /></td>
          </tr>
          <tr>
            <td>Certificate expiry date</td>
            <td><Form.Control
            type="date"
            name="certificateExpiryDate"
            value={formData.certificateExpiryDate}
            onChange={handleInputChange}
          /></td>
          </tr>
          <tr>
            <td>Certification Body</td>
            <td><Form.Control
            type="text"
            name="certificationBody"
            value={formData.certificationBody}
            onChange={handleInputChange}
          /></td>
          </tr>
          <tr>
            <td>USI Code(s) for Site extension (if site extension is more than 1 then add rows)</td>
            <td><Form.Control
            type="text"
            name="usiSiteExtension"
            value={formData.usiSiteExtension}
            onChange={handleInputChange}
          /></td>
          </tr>
          <tr>
            <td>USI Code(s) for Standalone Remote Support Location (SRSL) (if SRSL is more than 1 then add rows)</td>
            <td><Form.Control
            type="text"
            name="usiCodesForSRSL"
            value={formData.usiCodesForSRSL}
            onChange={handleInputChange}
          /></td>
          </tr>
        </tbody>
      </Table>

      {/* Comments / Remarks Section */}
      <h4 className='mb-3'>Comments / Remarks</h4>
      <Table bordered>
      
          
            <td style={{ height: '100px' }}> 
               <Form.Control as="textarea" rows={3}  name="markUsageComment" value={formData.markUsageComment} onChange={handleInputChange}/></td>
        
      </Table>
    </div>
    <Row className="mb-4">
        <Col md={6}>
          <Table bordered>
            <thead>
              <tr>
                <th colSpan="2" style={{ backgroundColor: '#e9ecef' }}>
                  Prepared by
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td><Form.Control
            type="text"
            name="preparedByName"
            value={formData.preparedByName}
            onChange={handleInputChange}
          /> </td>
              </tr>
              <tr>
                <td>Signature:</td>
                <td><Form.Control
            type="text"
            name="preparedBySignature"
            value={formData.preparedBySignature}
            onChange={handleInputChange}
          /> </td>
              </tr>
              <tr>
                <td>Initial Date:</td>
                <td><Form.Control
            type="date"
            name="preparedByDate"
            value={formData.preparedByDate}
            onChange={handleInputChange}
          /> </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <Table bordered>
            <thead>
              <tr>
                <th colSpan="2" style={{ backgroundColor: '#e9ecef' }}>
                  Approved by
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td><Form.Control
            type="text"
            name="approvedByName"
            value={formData.approvedByName}
            onChange={handleInputChange}
          /></td>
              </tr>
              <tr>
                <td>Signature:</td>
                <td><Form.Control
            type="text"
            name="approvedBySignature"
            value={formData.approvedBySignature}
            onChange={handleInputChange}
          /></td>
              </tr>
              <tr>
                <td>Initial Date:</td>
                <td><Form.Control
            type="date"
            name="approvedByDate"
            value={formData.approvedByDate}
            onChange={handleInputChange}
          /></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Revision History Section */}
      <h4 className='mb-3'>Revision History</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Revision Date</th>
            <th>Revision No.</th>
            <th>Reason</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {revisionHistory.map((row,index)=>(
         <tr>
            <td> <Form.Control
            type="date"
            value={row.revisionDate}
            onChange={(e) => handleHistory(index, 'revisionDate', e.target.value)}
            placeholder="Enter Part-time Emp."
          /></td>
            <td><Form.Control
            type="text"
             value={row.revisionNo}
             onChange={(e)=>handleHistory(index,'revisionNo',e.target.value)}
            placeholder="Enter Part-time Emp."
          /></td>
            <td><Form.Control
            type="text"
            value={row.reason}
            onChange={(e)=>handleHistory(index,'reason',e.target.value)}
            placeholder="Enter Part-time Emp."
          /></td>
            <td><Form.Control
            type="text"
            value={row.details}
            onChange={(e)=>handleHistory(index,'details',e.target.value)}
            placeholder="Enter Part-time Emp."
          /></td>
          </tr>
          )) }
        </tbody>
      </Table>
     

      {/* Submit Button */}
      <div className='text-end'>
      <Button  style={{background:'#152238'}} type="submit">
        Submit
      </Button>
      </div>
    </Form>

    {/* <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Audit Manday Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Employees From</th>
                <th>Employees To</th>
                <th>Audit Man Days</th>
                <th>Surveillance Audit Mandays</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.employeesFrom}</td>
                  <td>{row.employeesTo || 'Above'}</td>
                  <td>{row.auditManDays}</td>
                  <td>{row.surveillanceAuditMandays}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{background:'#152238'}} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showModal1} onHide={handleClose1} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Audit Manday Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Employees From</th>
                <th>Employees To</th>
                <th>Audit Man Days</th>
                
              </tr>
            </thead>
            <tbody>
              {data1.map((row, index) => (
                <tr key={index}>
                  <td>{row.employeesFrom}</td>
                  <td>{row.employeesTo || 'Above'}</td>
                  <td>{row.auditManDays}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{background:'#152238'}} onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

    </>
  );
};

export default IATFContractReviewForm;
