import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';

interface Quotation {
  id: number;
  quotationNo: string;
  clientName: string;
  standards: string;
  totalFees: number;
  discountPercentage: number;
  approvedQuotationAmount: number;
  Lead: {
    firstName: string;
    lastName: string;
  };
}

const QuotationApprovalList: React.FC = () => {
  const [quotations, setQuotations] = useState<Quotation[]>([]);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/quotation/get', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('API Response:', response.data);
        setQuotations(response.data);
      } catch (error) {
        console.error('Error fetching quotations:', error);
      }
    };

    fetchQuotations();
  }, []);

  const handleApprove = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:8000/api/quotation/approve/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setQuotations(quotations.filter(q => q.id !== id));
    } catch (error) {
      console.error('Error approving quotation:', error);
    }
  };

  const handleReject = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:8000/api/quotation/reject/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setQuotations(quotations.filter(q => q.id !== id));
    } catch (error) {
      console.error('Error rejecting quotation:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Quotations Needing Approval</h1>
      {quotations.length === 0 ? (
        <p>No quotations available for approval.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Quotation No</th>
              <th>Client Name</th>
              <th>Standard</th>
              <th>Total Fees</th>
              <th>Discount %</th>
              <th>Approved Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotations.map((quotation) => (
              <tr key={quotation.id}>
                <td>{quotation.quotationNo}</td>
                <td>{quotation.clientName}</td>
                <td>{quotation.standards}</td>
                <td>{quotation.totalFees}</td>
                <td>{quotation.discountPercentage}%</td>
                <td>{quotation.approvedQuotationAmount}</td>
                <td>
                  <Button style={{ background: '#152238' }} type="submit" onClick={() => handleApprove(quotation.id)}>
                    Approve
                  </Button>
                  <Button variant="secondary" className="me-2 text-black" onClick={() => handleReject(quotation.id)}>
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default QuotationApprovalList;

