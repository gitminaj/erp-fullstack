import DocumentsForms from "../../models/forms/forms.js";


const forms = [
  `
    <div>
      <h2 className="font-bold text-black mb-2 fs-4">
        Annexure-2 Certificate transfer Verification CheckList
      </h2>
      <Form onSubmit={handleSubmit} className="fw-normal text-black mx-2">
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group controlId="organizationName">
              <Form.Label>Organization's Name</Form.Label>
              <Form.Control
                type="text"
                name="organizationName"
                placeholder="Enter organization name"
                id="nameId_1"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="certificationBody">
              <Form.Label>Name of the Issuing Certification Body</Form.Label>
              <Form.Control
                type="text"
                name="certificationBody"
                placeholder="Enter certification body"
                id="certificate_2"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group controlId="standardStatus">
              <Form.Label>Standard / Status</Form.Label>
              <Form.Control
                type="text"
                name="standardStatus"
                placeholder="Enter standard or status"
                id="standard_3"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="contractDetailsCB">
              <Form.Label>Contact Details of CB</Form.Label>
              <Form.Control
                type="text"
                name="contractDetailsCB"
                placeholder="Enter contact details"
                id="contract_4"
              />
            </Form.Group>
          </Col>
        </Row>
  
        <Row>
          <Col md={6}>
            <Form.Group controlId="scopeActivity">
              <Form.Label>Scope/Activity</Form.Label>
              <Form.Control
                type="text"
                name="scopeActivity"
                placeholder="Enter Scope"
                id="scope_5"
              />
            </Form.Group>
          </Col>
        </Row>
  
        <div className=" mt-5">
          <h2>Receipt of Request to Transfer</h2>
          <Table bordered>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Particulars</th>
                <th>Reference Documents</th>
                <th>Verification Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>
                  Check client’s certified activities fall within the accredited
                  scope of IRQS
                </td>
                <td>Accreditation Schedule</td>
                <td>
                  <Form.Control
                    type="text"
                    name="certifiedActivitiesScope"
                    placeholder="Enter comments"
                    id="certificateScope_6"
                  />
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>
                  Check current certificate is issued by an accredited
                  certification body (Certification body’s association with
                  accreditation forums such as PAC, ILAAC, IAF MLA, etc.)
                </td>
                <td>Website of Accreditation Body</td>
                <td>
                  <Form.Control
                    type="text"
                    name="certificateIssuedByAccreditedBody"
                    placeholder="Enter comments"
                    id="certificateIssuedByAccreditedBody_7"
                  />
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>Copy of the current and valid certificate</td>
                <td>Certificate issued by the previous certifying body</td>
                <td>
                  <Form.Control
                    type="text"
                    name="validCertificateCopy"
                    placeholder="Enter comments"
                    id="validCertificateCopy_8"
                  />
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>
                  Current stage in the certification cycle:
                  <ul>
                    <li>Date of Last Audit conducted</li>
                    <li>Last audit type [Stage 2, SA1, SA2, etc.]</li>
                    <li>
                      To collect the Audit Reports & findings of the last 3 Audits
                      conducted
                    </li>
                  </ul>
                </td>
                <td>Audit report issued by the previous certifying body</td>
                <td>
                  <Form.Control
                    type="text"
                    name="certificationCycleStage"
                    placeholder="Enter comments"
                    id="certificationCycle_9"
                  />
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td>
                  Open or Closed out NCR where applicable (copy)
                  <ul>
                    <li>
                      If open, plan a pre-transfer visit to confirm the validity
                      of the certification
                    </li>
                  </ul>
                </td>
                <td>NC report issued by the previous certifying body</td>
                <td>
                  <Form.Control
                    type="text"
                    name="ncrStatus"
                    placeholder="Enter comments"
                    id="ncrStatus_10"
                  />
                </td>
              </tr>
              <tr>
                <td>06</td>
                <td>
                  Review the Audit plan and Audit programme in the previous audit
                  report
                </td>
                <td>
                  Audit Plan & Programme issued by the previous certifying body
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="auditPlanReview"
                    placeholder="Enter comments"
                    id="auditPlan_11"
                  />
                </td>
              </tr>
              <tr>
                <td>07</td>
                <td>
                  Check whether the sites wishing to transfer certification hold a
                  valid accredited certification
                </td>
                <td>Certificate issued by the previous certifying body</td>
                <td>
                  <Form.Control
                    type="text"
                    name="siteTransferStatus"
                    placeholder="Enter comments"
                    id="site_12"
                  />
                </td>
              </tr>
              <tr>
                <td>08</td>
                <td>
                  Do all the site(s) support locations and HO covered under
                  certification of previous certification body?
                </td>
                <td>Audit report issued by the previous certifying body</td>
                <td>
                  <Form.Control
                    type="text"
                    name="siteSupportLocationCovered"
                    placeholder="Enter comments"
                    id="siteSupport_13"
                  />
                </td>
              </tr>
              <tr>
                <td>09</td>
                <td>Complaints received and action taken</td>
                <td>
                  Complaint Log maintained, evidence of communication with the
                  complainee
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="complaintsReceivedActionTaken"
                    placeholder="Enter comments"
                    id="complaint_14"
                  />
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  Any current engagement by the organization with the regulatory
                  bodies in respect of legal compliance
                </td>
                <td>Declaration by the client</td>
                <td>
                  <Form.Control
                    type="text"
                    name="regulatoryEngagement"
                    placeholder="Enter comments"
                    id="regulatoryEngagement_15"
                  />
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Details of the reason(s) for seeking transfer</td>
                <td>Letter from client</td>
                <td>
                  <Form.Control
                    type="text"
                    name="transferReason"
                    placeholder="Enter comments"
                    id="transfer_16"
                  />
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>
                  Details of communication with the previous issuing Certification
                  Body (CB):
                  <ul>
                    <li>Date and mode of communication</li>
                    <li>Person communicated</li>
                    <li>Any outstanding payment</li>
                    <li>Outcome of communication</li>
                  </ul>
                  If it is not possible to communicate with the previous CB, the
                  reasons shall be recorded.
                </td>
                <td>Correspondence with previous CB</td>
                <td>
                  <Form.Control
                    type="text"
                    name="previousCertificationBodyCommunication"
                    placeholder="Enter comments"
                    id="previous_17"
                  />
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  Whether the verification has been done through a visit to the
                  client? If not, the justification for the same.
                </td>
                <td>Not applicable</td>
                <td>
                  <input
                    type="checkbox"
                    id="id_1"
                    name="clientVisitVerification"
                    value="yes"
                  />{" "}
                  Yes
                  <input
                    type="checkbox"
                    id="id_2"
                    name="clientVisitVerification"
                    value="no"
                    className="ml-3"
                  />{" "}
                  No
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>
                  Whether any communication has been made up with the certifying
                  body? If not, the reasons thereof.
                </td>
                <td>E-mail communication or Telephonic conversion</td>
                <td>
                  <input
                    type="checkbox"
                    id="id_3"
                    name="bodyCommunication"
                    value="yes"
                  />{" "}
                  Yes
                  <input
                    type="checkbox"
                    id="id_4"
                    name="bodyCommunication"
                    value="no"
                    className="ml-3"
                  />{" "}
                  No
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>
                  Is the available pre-transfer information satisfactory? If not,
                  the client organization shall be treated as a new client.
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="preTransferInfoSatisfactory"
                    placeholder="Enter comments"
                    id="preTransfer_18"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="id_5"
                    name="preTransferSatisfactory"
                    value="yes"
                  />{" "}
                  Yes
                  <input
                    type="checkbox"
                    id="id_6"
                    name="preTransferSatisfactory"
                    value="no"
                    className="ml-3"
                  />{" "}
                  No
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td>Based on the above information, the reviewer recommends:</td>
                <td>
                  <Form.Control
                    type="text"
                    name="recommendation"
                    placeholder="Enter comments"
                    id="recommendation_19"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="id_7"
                    name="transferCertification"
                    value="yes"
                  />{" "}
                  Transfer of Certification
                  <input
                    type="checkbox"
                    id="id_8"
                    name="newClient"
                    value="no"
                    className="ml-3"
                  />{" "}
                  Treated as a New Client
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td>
                  Usage of Logo / Mark Display of Certificate to be verified by
                  using the Client’s website
                </td>
                <td>Client's website</td>
                <td>
                  <input
                    type="checkbox"
                    id="id_9"
                    name="logoVerified"
                    value="yes"
                  />{" "}
                  Yes
                  <input
                    type="checkbox"
                    id="id_10"
                    name="logoNotVerified"
                    value="no"
                    className="ml-3"
                  />{" "}
                  No
                </td>
              </tr>
              <tr>
                <td>Prepared by</td>
                <td>
                  <Form.Group controlId="preparedBy">
                    <Form.Control
                      type="text"
                      name="preparedBy"
                      placeholder="Enter name"
                      id="preparedBy_20"
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="preparedSignature">
                    <Form.Control
                      type="text"
                      name="preparedSignature"
                      placeholder="Enter signature"
                      id="preparedSignature_21"
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="preparedDate">
                    <Form.Control
                      type="date"
                      name="preparedDate"
                      id="preparedDate_22"
                    />
                  </Form.Group>
                </td>
              </tr>
  
              <tr>
                <td>Approved by</td>
                <td>
                  <Form.Group controlId="approvedBy">
                    <Form.Control
                      type="text"
                      name="approvedBy"
                      placeholder="Enter name"
                      id="approvedBy_23"
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="approvedSignature">
                    <Form.Control
                      type="text"
                      name="approvedSignature"
                      placeholder="Enter signature"
                      id="approvedSignature_24"
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="approvedDate">
                    <Form.Control
                      type="date"
                      name="approvedDate"
                      id="approvedDate_25"
                    />
                  </Form.Group>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
  
        <div className="d-flex justify-content-end">
          <Button style={{ background: "#002d62" }} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
    `,
];

export const seedDocumentForms = async () => {
  for (const form of forms) {
    await DocumentsForms.findOrCreate({
      where: { htmlForm: form },
    });
  }
};
