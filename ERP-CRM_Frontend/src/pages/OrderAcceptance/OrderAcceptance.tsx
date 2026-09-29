import { Form, Table, Button } from 'react-bootstrap';
import React, { useState } from "react";
import axios from "axios";
const OrderAcceptance = () => {

  const [formData, setFormData] = useState({
    standardProduct: "",
    scopeOfAssessment: "",
    location: "",
    letterNo: "",
    date: "",
    totalOrderValue:  "",
    nameOfTheOrganization: "",
    nameOfRepresentative: "",
    signatureDate: "",
    irqsofISSPL: "",
    irqsName: "",
    irqsSignatureDate: "",
    assignTo: 1,
  });

  const handleSubmit = async () => {
    try {

      const token = localStorage.getItem('token');
      const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      
      const response = await axios.post(
        "http://localhost:8000/api/order-acceptance/createOrderAcceptance",
        formData,config
      );
      console.log("Response Data:", response.data);
      console.log("Submitting Data:", JSON.stringify(formData));

      alert("Order Acceptance Created Successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);

      alert("Failed to create Order Acceptance. Please try again.");
    }
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <>
      {/* table 1 */}
      <div>
        <h1 className="font-bold text-xl text-center">
          INDIAN REGISTER QUALITY SYSTEM
          <br />
        </h1>
        <h1 className="font-bold text-base text-center">
          (A Division of IRCLASS Systems and Solutions Private Limited)
        </h1>
        <h1 className="text-xl font-bold text-black mb-5 mt-2 text-center">
          Order Acceptance, Agreement Including Terms & Conditions{' '}
        </h1>
        <div className="overflow-hidden mt-4">
          <h1 className="text-lg font-bold text-black mb-2 text-center">
            The Following Agreement Is Concluded Between{' '}
          </h1>
          <p className="text-black mb-4 mt-4">
          <span className='font-semibold'>INDIAN REGISTER QUALITY SYSTEM  (A Division of IRCLASS Systems and Solutions Private
            Limited)</span>,  Herein after referred to as IRQS, whose office is located at: 
            52 A, Adi Shankaracharya Marg, Opp. Powai Lake, Powai, Mumbai - 400 072 Web: www.irclass.org e-mail: irqs@irclass.org <br/><br/>
            And <input type='text' className=" mx-2 w-1/2 h-full m-0 border border-grey p-1 rounded-sm"></input> Herein after referred to as the Client.
          </p>
          
        </div>
      </div>

      <form onSubmit={handleSubmit}>
      {/* table 2 */}
      <div className="overflow-hidden mt-4">
        <h1 className="text-base text-black mb-2">
          Client shall offer their management system for the audit to IRQS as
          per the following standard/s:
        </h1>
        <Table
          responsive="md"
          hover
          bordered
          className="table-striped w-full table-auto mb-5"
        >
          {/* <thead className="bg-light">
                <tr>
                    <th className="p-3 text-center align-middle">Sr. No</th>
                    <th className="p-3 text-center align-middle w-[60%]">Requirements</th>
                    <th className="p-3 text-center align-middle">Comments</th>
                </tr>
            </thead> */}
          <tbody>
            <tr>
              <td className="p-2 align-middle text-center">1</td>
              <td className="p-2 align-middle font-bold">Standard/Product</td>
              <td className="p-2 align-middle">
              <input
                className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                type="text"
                name="standardProduct"
                value={formData.standardProduct}
                onChange={handleChange}
              />
              </td>
            </tr>
            <tr>
              <td className="p-2 align-middle text-center">2</td>
              <td className="p-2 align-middle font-bold w-[40%]">
                Scope of Assessment / Product Certified
                <br />
                <span className="italic font-normal text-sm text-orange-400">
                  [Note : a) Initial Scope as per Contract Review and or b) As
                  per issued ‘Certificate of Approval]
                </span>
              </td>
              <td className="p-2 align-middle">
              <input
                className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                type="text"
                name="scopeOfAssessment"
                value={formData.scopeOfAssessment}
                onChange={handleChange}
              />
              </td>
            </tr>

            <tr>
              <td className="p-2 align-middle text-center">3</td>
              <td className="p-2 align-middle font-bold w-[40%]">
                Location / s
                <br />
                <span className="italic font-normal text-sm text-orange-400">
                  [(List of all site Locations with the scope of certification).
                  If space is insufficient, can attach additional sheet.]
                </span>
              </td>
              <td className="p-2 align-middle">
              <input
                className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <p className="mb-2">
        4) Client agrees to provide IRQS with all documents, information and
        facilities to carry out their assignment and agree to pay the fees as
        detailed in IRQS letter No.
        <span>
        <input
            type="number"
            name="letterNo"
            value={formData.letterNo}
            onChange={handleChange}
            className="border p-1 rounded-sm ml-2"
          />
        </span>
        dated{' '}
        <span>
        <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-1 rounded-sm ml-2"
          />
        </span>{' '}
        The total order value for 3 years is{' '}
        <span>
        <input
            type="number"
            name="totalOrderValue"
            value={formData.totalOrderValue}
            onChange={handleChange}
            className="border p-1 rounded-sm ml-2"
          />
        </span>{' '}
        with / without (strike out whichever is not applicable) Traveling &
        Incidental Expenses.
      </p>

      <p className="mb-2 text-sm">
        *Note : Traveling & Incidental Expenses :<br />
        In addition to the charges mentioned, travelling, incidental expenses
        will be charged extra at actual. These expenses include Air Fare, A/C
        Rail fare, suitable hotel accommodation and local travel expenses
        relating to the audits
      </p>

      <p className="mb-2">
        5) It is understood that both IRQS and Client will treat as strictly
        confidential and will not disclose to any third party without prior
        written consent of the other, any Information which comes into their
        possession, the possession of their employees, agents or others by
        virtue of IRQS undertaking this assessment.
      </p>
      <p className="mb-2">
        6) Please note the Certificate will be released by IRQS subjected to no
        outstanding of payment.
      </p>
      <p className="mb-2">
        7) Client agrees to the terms & conditions stated in this Agreement for
        IRQS to undertake this assessment.
      </p>

      <div className="overflow-hidden mt-4">
        <Table
          responsive="md"
          hover
          bordered
          className="table-striped w-full table-auto"
        >
          <tbody>
            <tr>
              <td className="p-2 align-middle font-bold">
                Name of the Organization
              </td>
              <td className="p-2 align-middle">
              <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="text"
                    name="nameOfTheOrganization"
                    value={formData.nameOfTheOrganization}
                    onChange={handleChange}
                  />
              </td>
              <td className="p-2 align-middle text-center font-bold">
                IRQS (A Div. of ISSPL)
              </td>
              <td className="p-2 align-middle">
                <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="text"
                    name="irqsofISSPL"
                    value={formData.irqsofISSPL}
                    onChange={handleChange}
                  />
              </td>
            </tr>

            <tr>
              <td className="p-2 align-middle font-bold">
                Name of Representative
              </td>
              <td className="p-2 align-middle">
              <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="text"
                    name="nameOfRepresentative"
                    value={formData.nameOfRepresentative}
                    onChange={handleChange}
                  />
              </td>
              <td className="p-2 align-middle text-center font-bold">Name</td>
              <td className="p-2 align-middle">
              <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="text"
                    name="irqsName"
                    value={formData.irqsName}
                    onChange={handleChange}
                  />
              </td>
            </tr>

            <tr>
              <td className="p-2 align-middle font-bold">Signature & Date</td>
              <td className="p-2 align-middle">
              <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm mb-1"
                    type="text"
                    name="signature"
                    placeholder="Signature"
                    disabled
                  />
                  <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="date"
                    name="signatureDate"
                    value={formData.signatureDate}
                    onChange={handleChange}
                  />

              </td>
              <td className="p-2 align-middle text-center font-bold">
                Signature & Date
              </td>
              <td className="p-2 align-middle">
              <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm mb-1"
                    type="text"
                    name="irqsSignature"
                    placeholder="IRQS Signature"
                    disabled
                  />
                  <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="date"
                    name="irqsSignatureDate"
                    value={formData.irqsSignatureDate}
                    onChange={handleChange}
                  />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="terms-container mb-4 mt-4 text-xs">
        <h1 className="mb-2 font-bold">Terms & Conditions</h1>

        <section>
          <h2 className="font-bold mb-2">1.0 Responsibility of IRQS</h2>
          <p className="ml-6">
            It is the responsibility of IRQS to provide Assessment and
            Certification in accordance with the current issue of IRQS Document
            “Certification Scheme”. Please note that in meeting its Policy of
            continual improvement of service, IRQS reserves the right to modify
            the contents of “Certification Scheme”.
          </p>
        </section>

        <hr className="my-2" />

        <section>
          <h2 className="font-bold mb-2">
            2.0 Responsibility of Auditee Organization
          </h2>
          <div className="ml-6">
            <p>
              2.1 It is the responsibility of the organisation to provide IRQS
              with all documents, information, facilities and changes as, when
              it takes place and undertake the audit as per the determined
              mandays to enable IRQS to provide the services under these terms
              and conditions.
            </p>
            <p>
              2.2 It is the responsibility of the organisation to provide
              accreditation bodies of IRQS with all documents, information and
              visits as necessary to enable verification of audits carried out
              by IRQS.
            </p>
            <p>
              3.3 It is the responsibility of Client Organization to visit
              IRCLASS/IRQS website www.irqs.co.in on the updation of the
              Certification Scheme.
            </p>
            <p>
              2.4 Based on concerns noticed during the office assessment /
              market feedback / complaints Director, NABCB may decide to arrange
              visits to certified organizations. IRQS shall, in their contract
              with their clients provide for such visits. IRQS shall be informed
              of any such validation visits and may join the NABCB assessor on
              such visits if required. IRQS would be informed of the duration of
              such visits and the information planned to be collected. For the
              present NABCB would bear the cost related to such validation
              visits.
            </p>
            <p>
              2.5 IRQS may opt for such validation visits in lieu of witnessing
              on their own. In such cases the number of validation visits
              required, duration and charges to be levied would be communicated
              to the IRQS by NABCB secretariat in advance for acceptance.
              Selection of samples would be done by NABCB Secretariat.
            </p>
            <p>
              2.6 If Accreditation Bodies or IRQS identified the Organization
              for Witness assessment along with the accreditation or otherwise
              or independently by accreditation body, client organization shall
              offer themselves for the witness. In case client organization
              refuses to undertake these witness assessments, in such cases the
              granted certificate “Certificate of Approval” shall be withdrawn
              with immediate effect.
            </p>
            <p>
              2.4 Independently from the involvement of the competent regulatory
              authority, if necessary IRQS may conduct a special audit in case
              of a serious incident related to occupational health and safety,
              for example, a serious accident, or a serious breach of
              regulation, in order to investigate if the management system has
              not been compromised and did function effectively. IRQS shall
              document the outcome of its investigation.
            </p>
            <p>
              2.5 Information on environmental, occupational health, illness,
              injuries, security, product failures, incidents such as a serious
              accident, or a serious breach of regulation necessitating the
              involvement of the competent regulatory authority, provided by the
              certified client or directly gathered by the audit team during the
              special audit, shall provide grounds for IRQS to decide on the
              actions to be taken, including a suspension or withdrawal of the
              certification, in cases where it can be demonstrated that the
              system seriously failed to meet the OH&S certification
              requirements.
            </p>
            <p>
              2.6 It is the responsibility of the organization to ensure the
              safety of IRQS team during the audit process onsite. To provide
              relevant PPE’s including Safety Shoes, Hard hat (Helmet),
              Respiratory protective equipment, any other relevant PPE’s as
              applicable & identified by the organization to prevent injury and
              ill health.
            </p>
            <p>
              2.7 For Medical Devices: The certified client has no objection in
              authorizing the release of the Audit report information to the
              regulator that recognizes ISO 13485.
            </p>
            <p>
              2.8 Making availability of facility of conduct of Remote audit as
              applicable, for verifying audit objectives, during Remote audit
              carried out using ICT facility for gathering the audit evidences
              by utilizing the computer-assisted techniques such as MS Team,
              Skype, Video conferencing, webinar, information available in soft
              etc. as applicable.
            </p>
            <p>
              2.9 If the organization has not undertaken the recertification
              audit or IRQS is unable to verify the implementation of
              corrections and corrective actions for any major nonconformity
              prior to the expiry date of the certification taken by
              organization due the failure of organization, then recertification
              shall not be recommended and the validity of the certification
              shall not be extended. Certificate remains Expired.
            </p>
            <p>
              2.10 Any changes in organization for example: changes relating to:
              a) the legal, commercial, organizational status or ownership; b)
              organization and management (e.g. key managerial, decision-making
              or technical staff ); c) contact address and sites; d) scope of
              operations under the certified management system; e) major changes
              to the management system and processes. If not communicated to
              IRQS, liability arising due to that will on the certified client.
            </p>
          </div>
        </section>

        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">3.0 Fees & Expenses</h2>
          <div className="ml-6">
            <p>
              3.1 For agreements under Tender Documents: All terms & conditions
              will be applicable as per agreed tender documents.
            </p>
            <p>
              3.2 The fees payable and terms of payment are as detailed in IRQS
              letter enclosing the quotation to the organisation. The basic
              charges for services requested are based on the assumption that
              the information supplied by the organisation was accurate and
              complete.
            </p>
            <p>
              3.3 Repeat Stage 1, Follow-up audit Full or Part (Stage 2,
              Re-certification, Surveillance) Special Audit (Expanding scope of
              certification already granted, Short notice audit or unannounced
              to investigate complaints or in response to changes or follow-up
              for revocation of suspension.
            </p>
            <p>
              3.4 All the repeat stage 1, follow-up & special audit will be
              charged as per prevalent fees applicable at that time.
            </p>
            <p>
              3.5 Travel and Incidental Expenses: All fees are exclusive of
              travel and incidental expenses which will be charged extra at
              actuals.
            </p>
            <p>
              3.6 Postponement – (Recovery of Administrative Costs): In case a
              scheduled audit is postponed, at the behest of the auditee, an
              amount of 10% of the total Audit and Certification fee, shall be
              charged – for each of such alterations – towards Administrative
              charges.
            </p>
            <p>
              3.7 Cancellation – (Recovery of Administrative Costs): The
              application fees/administrative charges as mentioned in Annexure-1
              of our quotation for Certification Services, shall be payable in
              advance, prior to scheduling of the audit. In case of cancellation
              of audit by the auditee, these application fees/ administrative
              charges will not be refunded.
            </p>
            <p>
              3.8 Statutory Taxes: All fees and expenses quoted are exclusive of
              any statutory taxes which will be charged at the current rate, if
              applicable.
            </p>
            <p>
              3.9 Invoices: Invoices will be submitted as soon as practicable,
              after the completion of any assessment visit(s). As IRQS is a
              division of IRCLASS Systems and Solutions Private Limited, the
              invoices would be as per IRCLASS Systems and Solutions Private
              Limited invoice format.
            </p>
            <p>
              3.10 Payment: All payments should be made in the name of “IRCLASS
              Systems and Solutions Private Limited” preferably by local
              cheque/demand draft within 7 days of receipt of the invoice.
              Amounts remaining unpaid for more than 30 days from invoice date
              will be liable to interest at the rate of 15% per annum. The
              Certificate(s) of Approval cannot be released until full payment
              has been received by IRCLASS Systems and Solutions Private
              Limited.
            </p>
            <p>
              3.11 If the payment for Audit is not made within 6 months from the
              date of Invoice then the Certificate shall be put under the
              Suspension & subsequently withdrawn as per suspension/withdrawal
              procedure.
            </p>
          </div>
        </section>

        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">4.0 Termination</h2>
          <div className="ml-6">
            <p>Either party may terminate this request for assessment:</p>
            <p>4.1 By Notice</p>
            <p className="ml-2">
              4.1.1 Three months written notice may be given by either party to
              the other.
            </p>
            <p>4.2 By default</p>
            <p className="ml-2">
              4.2.1 Immediately upon either party being notified by the other of
              any material breach of this request for assessment.
            </p>
            <p className="ml-2">
              4.2.2 If either party goes into liquidation or a receiver or
              administrator is appointed for all or part of the undertaking
              thereof.
            </p>
            <p>
              In the event of request for assessment being terminated whether by
              notice, default or otherwise, the IRQS Certificate of Approval
              issued pursuant hereto shall forthwith become invalid and the
              Supplier shall cease to use the same and return to IRQS all
              documentation.
            </p>
          </div>
        </section>

        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">5.0 Fundamental Term</h2>
          <div className="ml-6">
            <p>
              5.1 Organisation whereby warrants and covenants with IRQS that it
              will at all times during the subsistence of these terms and
              conditions comply with all reasonable requirements necessary for
              the issuance of the Certificate of Approval including (but without
              prejudice to the generality thereof) all statutes, rules,
              regulations issued by any statutory or any other competent
              authority, all recommendations, codes and similar matters issued
              by any authority, pursuant to which or in compliance of which or
              for the purpose of which the Certificate of Approval is issued or
              such other reasonable requirements of IRQS as are necessary to
              enable the Certificate of Approval to be issued and maintained in
              force in conformity with standards of high quality of
              certification.
            </p>
            <p>
              5.2 The organization hereby warrants the completeness and accuracy
              of all documents and accuracy of all information supplied to IRQS
              for the purposes of these terms & conditions for assessment.
            </p>
          </div>
        </section>

        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">
            6.0 Certificates and Use of Logo(s) and Complaints Procedure
          </h2>
          <div className="ml-6">
            <p>
              6.1 Upon successful completion of Initial Assessment IRQS shall
              issue Certificate(s) of Approval to the organisation detailing the
              quality Standard(s) to which assessment was made, declaring the
              scope of supply. The Certificate(s) of approval is/are valid for a
              period of three years from the date of issue subject to
              satisfactory maintenance of the quality systems through
              surveillance audits.
            </p>
            <p>
              6.2 Certification under this scheme does not imply certification
              of the organization’s product or service and does not therefore
              exempt him from his legal obligations. Organization to conforms to
              the requirements of IRQS when making reference to its
              certification:
            </p>
            <ul className="ml-6">
              <li>
                a) status in communication media such as the internet, brochures
                or advertising, or other documents;
              </li>
              <li>
                b) does not make or permit any misleading statement regarding
                its certification;
              </li>
              <li>
                c) does not use or permit the use of a certification document or
                any part thereof in a misleading manner;
              </li>
              <li>
                d) upon withdrawal of its certification, discontinues its use of
                all advertising matter that contains a reference to
                certification, as directed by IRQS and as referred in II IRQS
                OPM 19 are applicable to abide by.
              </li>
              <li>
                e) amends all advertising matter when the scope of certification
                has been reduced;
              </li>
              <li>
                f) does not allow reference to its management system
                certification to be used in such a way as to imply that the IRQS
                certifies a product (including service) or process;
              </li>
              <li>
                g) does not imply that the certification applies to activities
                and sites that are outside the scope of certification;
              </li>
              <li>
                h) does not use its certification in such a manner that would
                bring the certification body and/or certification system into
                disrepute and lose public trust.
              </li>
            </ul>
            <p>
              4.3 a) The use of IATF logotype as displayed in the certificate
              issued by IRQS should not be reproduced in isolation elsewhere.
            </p>
            <p>
              b) For details of LOGO Usage, kindly refer III IRQS: OPM:19
              supplemented with the ‘Certificate of Approval’.
            </p>
            <p>
              6.3 The organisation undertakes to institute a system of
              registering all complaints received from any source. The
              corrective action(s) taken and review by Organisation Management
              of such actions shall be made available for verification. They
              will inform that the complainant can also write to IRQS.
            </p>
          </div>
        </section>

        {/* section 7 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">7.0 Liability</h2>
          <div className="ml-6">
            <p>
              7.1 Whilst IRCLASS Systems and Solutions Private Limited and its
              Committees use their best endeavors to ensure that the functions
              of IRCLASS Systems and Solutions Private Limited are properly
              carried out, in providing services information or advice neither
              IRCLASS Systems and Solutions Private Limited nor any of its
              employees or agents warrants the accuracy of any information
              supplied. Except as set our herein neither IRCLASS Systems and
              Solutions Private Limited nor any of its employees or agents (on
              behalf of each of whom IRCLASS Systems and Solutions Private
              Limited has agreed this clause) shall be liable for any loss
              damage or expense whatsoever sustained by any client organization
              due to any act or omission or error of whatsoever nature and
              howsoever caused by IRCLASS Systems and Solutions Private Limited
              , its employees or agents or due to any inaccuracy of whatsoever
              nature and howsoever caused in any information or opinion given in
              any way whatsoever by or on behalf of IRCLASS Systems and
              Solutions Private Limited , even if held to amount to a breach of
              warranty. Nevertheless, if any client organization uses services
              of IRCLASS Systems and Solutions Private Limited , or relies on
              any information or advice given by or on behalf or IRCLASS Systems
              and Solutions Private Limited and suffers loss damage or expenses
              thereby which is proved to have been due to any negligent act
              omission or error of IRCLASS Systems and Solutions Private
              Limited, proved in a court of law or related jurisdiction its
              employees or agents or any negligent inaccuracy in information or
              opinion given by or on behalf of IRCLASS Systems and Solutions
              Private Limited then IRCLASS Systems and Solutions Private Limited
              will pay compensation to the client organization for his proved
              loss up to but not exceeding the amount of the fee charged by
              IRCLASS Systems and Solutions Private Limited for that particular
              service, information or opinion.
            </p>
          </div>
        </section>

        {/* section 8 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">8.0 Indemnity</h2>
          <div className="ml-6">
            <p>
              8.1 The Organisation shall fully and effectually indemnify IRCLASS
              Systems and Solutions Private Limited agents all costs, claims,
              actions and demands arising from:
            </p>
            <ul className="ml-6">
              <li>
                (i) the service provided by IRCLASS Systems and Solutions
                Private Limited save to the extent only that such claims arise
                from the neglect of IRCLASS Systems and Solutions Private
                Limited, its employees or agents.
              </li>
              <li>
                (ii) the misuse by the organization of any certificate, license,
                mark of conformity provided by IRQS in accordance with these
                terms & conditions.
              </li>
              <li>(iii) any breach of these terms & conditions.</li>
            </ul>
          </div>
        </section>

        {/* section 9 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">9.0 Force Majeure</h2>
          <div className="ml-6">
            <p>
              9.1 IRCLASS Systems and Solutions Private Limited shall not be
              liable in any respect should be prevented from discharging such
              obligations as result of any matter beyond its control which could
              not be reasonably foreseen.
            </p>
          </div>
        </section>

        {/* section 10 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">10.0 Confidentiality</h2>
          <div className="ml-6">
            <p>
              10.1 Except as may be required by Law, IRQS and the Organisation
              will treat as strictly confidential and will not disclose to any
              third party without prior written consent of the other, any
              information which comes into their possession, the possession of
              their employees, agents or other by virtue of these terms &
              conditions.
            </p>
            <p>
              All information obtained during the course of audit shall be
              available for verification to IRQS personnel (as part of internal
              Certification Process) & personnel from relevant accreditation
              body (as part of Accreditation Process). Auditee organization
              shall be informed in writing by IRQS if the outcome of the review
              by Internal personnel or Accreditation Body personnel influences
              the interest of the auditee Organization or individual concerned
              shall, unless regulated by law, be notified in advance of the
              information provided.
            </p>
          </div>
        </section>

        {/* section 11 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">11.0 Law</h2>
          <div className="ml-6">
            <p>
              11.1 These terms & conditions are governed by the law of India and
              the parties submit to the jurisdiction of the Courts of justice in
              Mumbai and all notices and proceedings served will be deemed to be
              duly served if send by pre-paid registered mail to the address of
              the party as herein above appearing or as may be subsequently
              notified by the other.
            </p>
          </div>
        </section>

        {/* section 12 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">12.0 Arbitration</h2>
          <div className="ml-6">
            <p>
              12.1 Any disputes or differences arising between the parties other
              than as the payments of IRCLASS Systems and Solutions Private
              Limited ’s charges shall be determined by single arbitrator to be
              appointed by the parties in default of these terms & conditions.
            </p>
          </div>
        </section>

        {/* section 13 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">
            13.0 Additional Terms & conditions related to IATF 16949 Audit{' '}
          </h2>
          <div className="ml-6">
            <p>
              a) The client shall notify the certification body of any changes:
            </p>
            <ul className="ml-6">
              <li>1) Legal Status,</li>
              <li>
                2) Commercial Status (e.g. Joint Venture, Subcontracting with
                other organizations),
              </li>
              <li>3) Ownership Status (e.g. mergers and acquisitions),</li>
              <li>
                4) Organization and management (e.g. key managerial,
                decision-making or technical staff),
              </li>
              <li>5) Contract address or location,</li>
              <li>
                6) Scope of operations under the certified management system,
              </li>
              <li>7) IATF Automotive OEM customer special status,</li>
              <li>8) Major changes to the management system and processes.</li>
            </ul>
            <p>
              b) The client cannot refuse an IATF witness audit of the
              Certification Body.
            </p>
            <p>
              c) The client cannot refuse the presence of a certification body
              internal witness auditor.
            </p>
            <p>
              d) The client shall authorize access for the IATF representative
              or their delegates.
            </p>
            <p>
              e) The client shall authorize the certification body to provide
              the final report to the IATF.
            </p>
            <p>
              f) The only use of the IATF logo is as displayed on the
              certificate issued by the IRQS. Any other use of the IATF logo
              separately or not is prohibited.
            </p>
            <p>
              g) Consultants to the client cannot be physically present at the
              client's site during the audit OR participate in the audit in any
              way. Failure to inform IRQS is considered as a breach of the
              legally enforceable agreement and may result in withdrawal of the
              IATF 16949 certificate.
            </p>
          </div>
        </section>

        {/* section 14 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">14.0 IATF Remote Audit: </h2>
          <div className="ml-6">
            <p>
              a) Specific technology used during Remote audit will be Microsoft
              team Meetings, Zoom, Google Meet and in case of shopfloor video
              call thru whatsapp or Messenger.
            </p>
            <p>
              b) Specific equipment which may be needed for Remote audit could
              be wireless connection for Desktop audits / reviews, cellular
              connection in Manufacturing environment with noise cancelling
              headsets with microphones.
            </p>
            <p>
              c) Information requested during the audit is to be shared (e.g.
              via email vs. shared on the screen, or Photos / videos thru social
              media (whatsapp / messenger etc.).
            </p>
            <p>
              d) An audit coordinator (or host) for the audit is identified.
              This coordinator manages connections, availability of auditees and
              manages technical issues throughout the entire audit. It may be
              necessary to have more than one coordinator, especially if there
              is more than one CB auditor with parallel audits being conducted
              simultaneously.
            </p>
            <p>
              e) Contingency plan, in case technology fails or becomes
              unavailable during the audit Cellular network can be utilized
              appropriately.
            </p>
            <p>
              f) Availability of backup equipment, including fully charged
              batteries for mobile equipment, in case of mobile device power
              loss or other failure.
            </p>
          </div>
        </section>

        {/* section 15 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">
            15. Additional Terms & conditions related to Food Schemes / FSSC
            22000 Audit{' '}
          </h2>
          <div className="ml-6">
            <p>
              15.1 The FSSC Certified organization, formally agrees and accepts
              with IRQS (A Division of IRCLASS Systems & Solutions Pvt. Ltd) for
              the Foundation’s requirements to;
            </p>
            <div className="ml-6">
              <p>
                a) Ownership of the certificate and the audit report content is
                held by IRQS
              </p>
              <p>
                b) Conditions under which the certification contract can be
                terminated;
              </p>
              <p>
                c) Conditions under which the certificate can be used by the
                certified organization;
              </p>
              <p>
                d) Terms of confidentiality in relation to information gathered
                by IRQS during the certification process;
              </p>
              <p>
                e) Share information relating to the certification and auditing
                process with the Foundation, Accreditation Body, the IAF, GFSI
                and governmental authorities when required;
              </p>
              <p>
                f) Allows IRQS and Foundation FSSC to share information
                regarding their certification status with external parties;
              </p>
              <p>g) Procedures for nonconformity management;</p>
              <p>h) Procedures for complaints and appeals;</p>
              <p>
                i) Inclusion of information on the certified status of the
                organization on the FSSC 22000 website and in the Assurance
                Platform;
              </p>
              <p>
                j) Cooperation in, and acceptance of witness assessments by
                IRQS, NABCB (AB) and/or the Foundation when requested;
              </p>
              <p>
                k) Communication obligations of certified organizations to IRQS
                within 3 working days related to the following:
              </p>
            </div>
            <ul className="ml-12">
              <li>
                (i) Any significant changes that affect the compliance with the
                Scheme requirements and obtain advice of IRQS in cases where
                there is doubt over the significance of a change;
              </li>
              <li>
                (ii) Serious events that impact the FSMS, legality and/or the
                integrity of the certification including situations that pose a
                threat to food safety, or certification integrity as a result of
                Force majeure, natural or man-made disasters (e.g., war, strike,
                terrorism, crime, flood, earthquake, malicious computer hacking,
                etc.);
              </li>
              <li>
                (iii) Serious situations where the integrity of the
                certification is at risk and/or where the Foundation can be
                brought into disrepute. These include, but are not limited to:
              </li>
              <li>
                (iv) Public food safety events (e.g., public recalls,
                withdrawals, calamities, food safety outbreaks, etc.);
              </li>
              <li>
                (v) Actions imposed by regulatory authorities as a result of a
                food safety issue(s), where additional monitoring or forced
                shutdown of production is required;
              </li>
              <li>
                (vi) Legal proceedings, prosecutions, malpractice, and
                negligence; and
              </li>
              <li> (vii) Fraudulent activities and corruption.</li>

              <li>
                (viii) Changes to organization name, contact address and site
                details;
              </li>
              <li>
                (ix) Changes to organization (e.g., legal, commercial,
                organizational status or ownership) and management (e.g., key
                managerial, decision-making, or technical staff);
              </li>
              <li>
                (x) Major changes to the food safety management system, scope of
                operations and product categories covered by the certified
                management system (e.g. new products, new processing lines,
                etc.);
              </li>
              <li>
                (xi) Any other change that renders the information on the
                certificate inaccurate.
              </li>
              <li>
                (xii) IRQS in turn will take appropriate steps to assess the
                situation and will take any appropriate action including
                additional verification activities. These activities may have
                implications for the certified status of the FSSC certified
                organization.
              </li>
            </ul>

            <div className="ml-6">
              <p className="mt-4">
                l) For the purposes of the FSSC 22000 Integrity Program, to
                allow assessors from the Foundation on their premises to witness
                IRQS auditors during FSSC 22000.
              </p>
              <p>
                m) The Foundation is entitled to carry out control audits at the
                premises of the certified organization at any time. The
                organization has to provide the foundation with all relevant
                information, support and access to the premises which is deemed
                necessary by the Foundation to be able to carry out the control
                audit.
              </p>
              <p>
                n) Carry out UNAANOUNCED audits at the premises of the certified
                organization at any time as stipulated by the Scheme
                requirements.
              </p>
              <p>
                o) Where multi-site sampling is permitted, the organization
                confirms that an internal audit has been conducted for each site
                within one year prior to certification and when applicable the
                effectiveness of corrective actions shall be available.
                Following certification, the annual internal audit shall cover
                all sites of the organization included in the certification
                scope of the multi-site organization and ongoing effectiveness
                of corrective actions shall be demonstrated.
              </p>
            </div>
            <p className="mt-4">
              15.2 Procedures for nonconformity grading by IRQS and timeframe to
              close nonconformities by the certified organization including the
              consequences of open nonconformities on any decision by IRQS to
              issue certification or to leave it in place is as follows:
              Correction, Root Cause & Extent Analysis, Evidences of Implemented
              Correction & Corrective Action, Organization’s Plan For
              Verification of effectiveness of implemented Correction /
              Corrective Action. For FSSC Audits: Time frame to close NCs (for
              all audits – Stage 2/ Surveillance / Renewal/ etc.)
            </p>
            <p className="mt-4 mb-2">
              <strong>1] MINOR NONCONFORMITY</strong>
            </p>
            <ul className="ml-6">
              <li>
                1) The organization shall provide IRQS with objective evidence
                of the correction, evidence of an investigation into causative
                factors, exposed risks, and the proposed corrective action plan
                (CAP);
              </li>
              <li>
                2) IRQS shall review the corrective action plan and the evidence
                of correction and approve it when acceptable. IRQS approval
                shall be completed within 28 calendar days after the last day of
                the audit. Exceeding this timeframe shall result in a suspension
                of the certificate, or in the case of an initial audit, the
                Stage 2 audit shall be repeated within maximum 6 months of the
                last day of the previous Stage 2 audit;
              </li>
              <li>
                3) Corrective action(s) (CA) shall be implemented by the
                organization within the timeframe agreed with IRQS;
              </li>
              <li>
                4) The effectiveness of implementation of the corrective action
                plan shall be reviewed, at the latest, at the next scheduled
                audit. Failure to address a minor nonconformity from the
                previous audit could lead to a major nonconformity being raised
                at the next scheduled audit.
              </li>
            </ul>
            <p className="mt-4 mb-2">
              <strong>2] MAJOR NONCONFORMITY</strong>
            </p>
            <ul className="ml-6">
              <li>
                1) The organization shall provide IRQS with objective evidence
                of an investigation into causative factors, exposed risks, and
                evidence of effective implementation;
              </li>
              <li>
                2) IRQS shall review the corrective action plan and conduct an
                on-site follow-up audit to verify the implementation of the CA
                to close the major nonconformity. In cases where documentary
                evidence is sufficient to close out the major nonconformity,
                IRQS may decide to perform a desk review. This follow-up shall
                be done within 28 calendar days from the last day of the audit;
              </li>
              <li>
                3) The major nonconformity shall be closed by IRQS within 28
                calendar days from the last day of the audit. When the major
                cannot be closed in this timeframe, the certificate shall be
                suspended;
              </li>
              <li>
                4) Where completion of corrective actions might take more time
                in specific instances, the CAP shall include any temporary
                measures or controls necessary to mitigate the risk until the
                permanent corrective action is implemented. Supporting evidence
                of the temporary measures or controls shall be submitted to IRQS
                for review and acceptance within 28 calendar days from the last
                day of the audit.
              </li>
              <li>
                5) If a major non-conformity is raised at the Stage 2 audit, the
                nonconformity shall be closed by IRQS within 28 calendar days
                from the last day of the audit. Where completion of corrective
                actions might take more time, the Corrective Action Plan (CAP)
                shall include the temporary measures or controls necessary to
                mitigate the risk until the permanent corrective action is
                implemented. Evidence of these temporary measures shall be
                submitted and accepted by IRQS within 28 calendar days from the
                last day of the audit. Based on this information, a
                certification decision shall be taken. In addition, where
                temporary measures are accepted, IRQS shall agree a suitable
                timeframe with the organization, to verify the effective
                implementation of the permanent corrective action, but not later
                than 6 months after the last day of the audit. In any event,
                where the 28 calendar days after the last day of the audit is
                exceeded e.g., not closing the major nonconformity or
                non-acceptance of the evidence of the temporary measures, the
                full Stage 2 audit shall be repeated.
              </li>
            </ul>
            <p className="mt-4 mb-2">
              <strong>3] CRITICAL NONCONFORMITY</strong>
            </p>
            <ul className="ml-6">
              <li>
                1) When a critical nonconformity is raised at a certified
                organization the certificate shall be suspended within 3 working
                days of being issued, for a maximum period of six (6) months;
              </li>
              <li>
                2) When a critical nonconformity is issued during an audit, the
                organization shall provide IRQS with objective evidence of an
                investigation into causative factors, exposed risks, and the
                proposed CAP. This shall be provided to IRQS within 14 calendar
                days after the audit;
              </li>
              <li>
                3) A separate audit shall be conducted by IRQS between six (6)
                weeks to six (6) months after the regular audit to verify the
                effective implementation of the corrective actions. This audit
                shall be a full on-site audit (with a minimum on-site duration
                of one day). After a successful follow-up audit, the certificate
                and the current audit cycle will be restored, and the next audit
                shall take place as originally planned (the follow-up audit is
                additional and does not replace an annual audit). This follow-up
                audit shall be documented, and the report uploaded as part of
                the audit documentation linked to the audit where the critical
                NC was raised;
              </li>
              <li>
                4) The certificate shall be withdrawn when the critical
                nonconformity is not effectively resolved within the six (6)
                month timeframe;
              </li>
              <li>
                5) When a critical NC is raised at an initial certification
                audit, the audit is failed, and the full certification audit
                shall be repeated.
              </li>
            </ul>
            <p className="mt-4">
              <strong>NOTE 1:</strong> If not submitted within the above time
              frame then the certificate will be intended for Suspension
              Process.
            </p>
            <p>
              <strong>NOTE 2:</strong> Critical/Major nonconformities typically
              require on-site verification of corrective action unless specified
              by the Auditor. Follow up audit shall take place within 28
              calendar days from the last day of the audit activity to IRQS. All
              findings shall be closed before a recommendation for certification
              can be made.
            </p>
          </div>
        </section>

        {/* section 16 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">
            16. Additional Terms & conditions related to Ayush Audit:{' '}
          </h2>
          <div className="ml-6">
            <p>16.1 Certificates and Use of Logo(s) and Complaints Procedure</p>
            <div className="ml-6">
              <p>
                1. Upon successful completion of Initial Assessment IRQS shall
                issue Certificate(s) of Approval to the Organisation detailing
                the quality Standard(s) to which assessment was made, declaring
                the scope of supply. The Certificate(s) of approval is/are valid
                for a period of three years from the date of issue subject to
                satisfactory maintenance of the quality systems through
                surveillance audits.
              </p>
              <p>
                2. The client shall comply with the requirements of the
                certification body if applicable, While making reference to its
                product certification in communication media such as documents,
                brochures or advertising.
              </p>
              <p>
                3. The client shall use the certification mark only on products
                it has found to comply with the requirements if applicable
              </p>
              <p>
                4. Client shall not apply the certification mark on products
                prior to certification. Certification mark is affixed only to
                products covered under the scope of the certificate. The
                organization shall ensure that the size, colour of the
                Certification mark is as prescribed by the Ministry of Ayush/
                QCI. Accreditation mark not to be used on products. For details
                on Use of Marks and logo for AYUSH scheme kindly refer Annexure
                A: Approval for Use of Certification Mark to Certified Units
                available on the IRQS website www.irqs.co.in
              </p>
              <p>
                5. Client can apply a mark to each certified product, or to
                product packaging, or on information accompanying each product
                if applicable
              </p>
              <p>
                6. The client shall keep a record of all complaints made known
                to the client relating to the compliance with certification
                requirement and to make these records available to the
                certification body when requested, and takes appropriate action
                with respect to such complaints and any deficiencies found in
                products,
              </p>
              <ul className="ml-6">
                <li>
                  a) processes or services that affect compliance with the
                  requirements for certification,
                </li>
                <li>b) Document the actions taken</li>
                <li>
                  Verification by the certification body of (l) is performed
                  only when the certification scheme mandates it.
                </li>
              </ul>
              <p>
                7. AYUSH Certified organization, formally agrees and accepts
                with IRQS (A Division of IRCLASS Systems & Solutions Pvt. Ltd.)
                for the AYUSH Scheme requirements to;
              </p>
              <ul className="ml-6">
                <li>
                  a) Share information concerning the certified organization
                  with the QCI, NABCB and governmental authorities when
                  appropriate.
                </li>
                <li>
                  b) Display information with regards to the certified status
                  that as a minimum shall show the name, relevant certification
                  criteria (normative document), scope and geographical location
                  on the website of IRQS and Quality Council of India (QCI)
                </li>
              </ul>
              <p>
                8. Information about the client obtained from sources other than
                the client (e.g. from the complainant or from regulators) shall
                be treated as confidential
              </p>
            </div>

            <p className="mt-4">16.2 Responsibility of Auditee Organization</p>
            <div className="ml-6">
              <p>
                I. The client shall always fulfill the certification
                requirements including product requirement and changes
                communicated by the IRQS
              </p>
              <p>
                II. The client shall take responsibility if the certification
                applies to ongoing production, the certified product continues
                to fulfil the product and certification requirements.
              </p>
              <p>
                III. The client shall make all necessary arrangements for the
                conduct of the evaluation, including provision for examining
                documentation and records, and access to the relevant
                location(s), area(s), and personnel and for investigation of
                complaints.
              </p>
              <p>
                IV. The client shall make claims regarding certification only in
                respect of the scope for which certification has been granted
              </p>
              <p>
                V. The client shall does not use its product certification in
                such a manner as to bring the IRQS into disrepute and does not
                make any statement regarding its product certification which the
                certification body may consider misleading or unauthorized.
              </p>
              <p>
                VI. Upon suspension or withdrawal of certification, the client
                shall discontinue its use of all advertising matter that
                contains any reference thereto and returns as required by the
                certification scheme any certification documents and takes any
                other measure. The manufacturing unit has to have procedures in
                place to ensure that a non-conforming certified AYUSH product
                that gave rise to suspension of certification is recalled. The
                organization shall submit the recall status to IRQS every 15
                days. Depending on the situation, IRQS shall inform QCI on the
                details of the recalled product(s)/ status
              </p>
              <p>
                VII. On receipt of instructions for suspension of certification,
                the certified units shall suspend using AYUSH certification mark
                on AYUSH products being manufactured by them with immediate
                effect. The manufacturing unit shall be advised to undertake a
                root cause analysis and identify the necessary corrective
                actions for resolving the same.
              </p>
              <p>
                VIII. The client shall endeavor to ensure that no certificate or
                report nor any part thereof is used in a misleading manner.
              </p>
              <p>
                IX. If the client provides copies of the certification documents
                to others, the documents shall be reproduced in their entirety.
              </p>
              <p>
                X. The client manufacturer shall commit to implement the agreed
                IQAP (Internal Quality Assurance Protocol) for ensuring
                conformity of products and processes to the Certification
                Criteria and the Scheme requirements on a continuing basis after
                it is certified for the AYUSH scheme.
              </p>
              <p>
                XI. The renewal shall be effected from the date of the expiry of
                the previous certificate and the intervening period shall be
                treated as period of suspension and clearly stated on the
                Certificate. The manufacturing unit shall not claim
                certification or use the Certification Mark during this period.
              </p>
              <p>
                XII. When the certification scheme introduces new or revised
                requirements both in Certification criteria and Certification
                process requirements that affect the manufacturing unit, IRQS
                shall ensure these changes are communicated to all applicants
                and the certified units. IRQS shall verify the implementation of
                the changes by its applicants and certified units and shall take
                actions required by the scheme. The client shall inform the
                certification body, without delay, of matters that may affect
                its ability to conform to the certification requirements.
              </p>
            </div>

            <p className="mt-4">
              16.3 The AYUSH certified organization shall inform IRQS (A
              Division of IRCLASS Systems & Solutions Pvt. Ltd.) within three
              (3) working days, of significant changes that affect the
              capability of the organization to continue to fulfil the Scheme
              requirements. These include changes relating to:
            </p>
            <ul className="ml-6">
              <li>a) legal, commercial, organizational status or ownership,</li>
              <li>
                b) organization and management (e.g. key managerial,
                decision-making or technical staff),
              </li>
              <li>c) organization name, contact address and site details,</li>
              <li>
                d) scope of operations, dosage(s) and product(s) covered under
                the scope of certification
              </li>
              <li>
                e) any other change that renders the information on the
                certificate inaccurate.
              </li>
            </ul>
            <p>
              The organization shall seek the advice of IRQS in cases where
              there is doubt over the significance of a change.
            </p>

            <p className="mt-4">
              16.4 The AYUSH certified organization shall inform IRQS (A
              Division of IRCLASS Systems & Solutions Pvt. Ltd.) immediately of
              serious events that impact food safety and / or the integrity of
              the certification
            </p>
            <ul className="ml-6">
              <li>
                a) legal proceedings, prosecutions and the outcomes of these
                related to food safety or legality,
              </li>
              <li>
                b) public Product safety events (such as e.g. public recalls, ,
                etc.)
              </li>
            </ul>

            <p>
              IRQS in turn will take appropriate steps to assess the situation
              and will take any appropriate action including additional
              verification activities. These activities may have implications
              for the certified status of the AYUSH certified organization.
            </p>
          </div>
        </section>

        {/* section 17 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">
            17. Hygiene Rating – Additional requirements
          </h2>
          <div className="ml-6">
            <p>
              It is the responsibility of the Food Establishments (FEs) to
              comply with the following:
            </p>
            <ul>
              <li>
                a) always fulfill the Audit requirements as specified in the
                document “ Hygiene Rating Scheme”, Audit scheme and process
                requirements as specified in the document “ Hygiene Rating
                Scheme – Audit Process”
              </li>
              <li>
                b) make all necessary arrangements for the conduct of the
                Audits, including provision for examining documentation and the
                access to all processes and areas, records, and personnel for
                the purposes of initial Audit, surveillance, renewal Audit and
                resolution of complaints.
              </li>
              <li>
                c) make provisions, where applicable, to accommodate the
                presence of observers (e.g. QCI assessors or trainee Auditors);
              </li>
              <li>
                d) when the Audit scheme introduces new or revised requirements
                both in Audit criteria and Audit process requirements that
                affect the applicants and the certified organizations, the FE
                shall implement the changes in its systems, necessitated by
                these changes.
              </li>
              <li>
                e) the FE shall inform the FSSAI, and during the contract period
                to the HRAA, without delay in the event of any of the following:
              </li>
            </ul>
            <ul>
              <li>i) change & /or modifications of premises.</li>
              <li>ii) Major changes in the internal control measures</li>
              <li>
                iii) Major changes in the system which could have bearing on
                implementing Good Hygienic Practices as specified in the Audit
                criteria.
              </li>
            </ul>
          </div>
        </section>

        {/* section 18 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">18. BRCGS Additional requirements</h2>
          <div className="ml-6">
            <p>
              - This information is required from the site prior to the audit in
              order to adequately plan the audit activity.
            </p>
            <p>
              - A copy of the audit report and any subsequent certificate or
              audit result shall be supplied to BRCGS and the Accreditation Body
              in the agreed format for the BRCGS Standard used. IRQS ensures
              that as part of this contractual requirement, all documents in
              relation to the audit shall be made available to BRCGS and other
              relevant stakeholders such as GFSI and government bodies upon
              request. All documents submitted to BRCGS shall be copies of
              original documents. Documents provided to BRCGS will be treated as
              confidential.
            </p>
            <p>
              - The client company shall advise IRQS of change of circumstances
              that may affect the validity of continuing certification.
            </p>
            <p>
              - In a condition of undertaking an audit using a BRCGS scheme that
              the auditor may be accompanied by other personnel for training,
              assessment or calibration purposes. This activity may include:
            </p>
            <ul className="ml-6">
              <li>• training of new auditors by IRQS</li>
              <li>• routine IRQS shadow audit programmes</li>
              <li>• witness audits by Accreditation Bodies</li>
              <li>• witness audits by BRCGS</li>
              <li>
                • Witness audits by a specifier where a specifier-specific
                additional audit module is included
              </li>
            </ul>
            <p>
              - BRCGS reserves the right to conduct its own audit or visit to a
              site once certificated in response to complaints or as part of the
              routine BRCGS compliance activity to ensure the integrity of the
              BRCGS schemes. Such visits may be announced or unannounced.
            </p>
            <p>
              - Certification status may be affected in the event that access to
              any parts of the site or process or requests to these points
              specified above is unreasonably refused.
            </p>
            <p>
              - Please be aware that BRCGS may contact the site directly in
              relation to its certification status or for feedback on IRQS
              performance, or investigation into reported issues.
            </p>
            <p>
              - Acknowledge any specific requirements for additional audit
              modules in accordance with the protocol of those modules. This
              shall include the confidentiality of information.
            </p>
            <p>
              - IRQS office issuing the certificate shall receive the signed
              contract document directly from the client.
            </p>
            <p>
              Formal agreement from the client of BRCGS audit duration, the
              audit dates, the allocated auditor and the audit costs shall be
              received directly by the IRQS office.
            </p>
            <p className="mt-4">
              <strong>Incident Notification and action</strong>
            </p>
            <p>
              As part of this contractual relationship with certificated sites,
              the site shall notify IRQS within 3 days of:
            </p>
            <ul className="ml-6">
              <li>
                • any impending prosecution or enforcement with respect to
                product safety or legality
              </li>
              <li>• all product recalls</li>
              <li>• adverse media or regulatory authority interest</li>
              <li>
                • evidence of a significant public safety issue (e.g. food
                poisoning outbreak or customer injury)
              </li>
              <li>
                • evidence of significant failings at the certificated site
                (e.g. fraud, corruption or significant malpractice)
              </li>
              <li>
                • adverse public statements by a regulatory authority, NGO or
                major retailer
              </li>
              <li>
                • significant public safety concerns bringing BRCGS into
                disrepute
              </li>
            </ul>
            <p>
              The aim of this notification is to allow IRQS to assess whether
              the incident is indicative of a failure of the site’s systems.
              IRQS shall take the necessary steps to fully understand the
              implications of the situation and take appropriate actions. This
              may include requests for additional information, a further visit
              to the site, further full or partial re-audits, suspension or
              withdrawal of the BRCGS certificate.
            </p>
          </div>
        </section>

        {/* section 18 part2 */}
        <hr className="my-2" />
        <section>
          <h2 className="font-bold mb-2">
            18. FAMI QS Additional requirements
          </h2>
          <div className="ml-6">
            <p>
              <strong>1. NOTICE OF CHANGES BY A CERTIFIED CLIENT</strong>
            </p>
            <ul className="ml-6">
              <p>
                It is the responsibility of the FAMI-QS certified Operator to
                inform IRQS and FAMI-QS without delay, of the following changes:
              </p>
              <li>a. Legal, commercial, organisational status or ownership;</li>
              <li>b. Operator and management changes;</li>
              <li>c. Contact address and sites;</li>
              <li>d. Changes to the current certified scope;</li>
              <li>e. Major changes to the management system and processes;</li>
              <li>f. Issues related to the safety of the product;</li>
              <li>
                g. Any other issue which may affect the capability of the Feed
                Safety and Quality Management System.
              </li>
            </ul>
            <p>
              For changes regarding a, b, c, d, a revision of the approval
              letter is required.
            </p>

            <p className="mt-2">
              2. A FAMI-QS Certified Operator might be selected for the FAMI-QS
              Surveillance Programme to be conducted on-site audit with the
              FAMI-QS auditor. The Surveillance Programme can also be initiated
              by the FAMI-QS team to investigate an incoming complaint regarding
              a FAMI-QS Certified Operator or an Authorised Certification
              Body/Accreditation body.
            </p>

            <p className="mt-2">
              3. The FAMI-QS Certified organization, formally agrees and accepts
              with IRQS (A Division of IRCLASS Systems & Solutions Pvt. Ltd.)
              for the FAMI-QS requirements to:
            </p>
            <ul className="ml-6">
              <li>
                a) Share information concerning the certified organization with
                FAMI-QS and governmental authorities when appropriate.
              </li>
              <li>
                b) Display information with regards to the certified status on
                the website of the FAMI-QS in the FAMI-QS Register of Certified
                Organizations.
              </li>
              <li>
                c) For the purposes of the FAMI-QS Integrity Program, to allow
                assessors from FAMI-QS on their premises to witness IRQS
                auditors during FAMI-QS audits.
              </li>
            </ul>

            <p className="mt-2">
              4. Ownership of the certificate and the audit report content is
              held by IRQS.
            </p>

            <p className="mt-2">
              5. The FAMI-QS Certified organization, formally agrees with IRQS
              (A Division of IRCLASS Systems & Solutions Pvt. Ltd.) that FAMI-QS
              is entitled to carry out control audits at the premises of the
              certified organization at any time. The organization has to
              provide the foundation with all relevant information, support, and
              access to the premises which is deemed necessary by FAMI-QS to be
              able to carry out the control audit.
            </p>

            <p className="mt-2">6. UNANNOUNCED AUDITS</p>
            <p>
              The FAMI-QS Certified organization, formally agrees with IRQS (A
              Division of IRCLASS Systems & Solutions Pvt. Ltd.) that IRQS is
              entitled to carry out UNANNOUNCED audits at the premises of the
              certified organization at any time as stipulated by the Scheme
              requirements. One unannounced audit is undertaken after the
              initial certification audit and within each 3-year period
              thereafter. Participation in the unannounced audit program is
              mandatory. In the event that the certified Operator refuses to
              participate in the unannounced audit, the certificate shall be
              suspended immediately, and IRQS shall withdraw the certificate if
              the unannounced audit is not conducted within a six-month
              timeframe.
            </p>

            <p className="mt-2">7. Short Notice Audits</p>
            <p>
              It might be necessary for IRQS to conduct an audit of a certified
              Operator at short notice (up to 72 hours’ notice), in order to:
            </p>
            <ul className="ml-6">
              <li>a) Investigate a complaint, or</li>
              <li>
                b) In response to a feed safety incident or crisis at the
                Operator’s site or
              </li>
              <li>c) As a follow-up on suspended certificate(s).</li>
            </ul>
            <p>
              In case of an incident, the P-CM-001 Feed Incident Management
              (Crisis Management) Procedure for Operators and Certification
              Bodies current version shall be applied. A short notice audit
              could be initiated upon FAMI-QS request. Cost of the audits will
              be covered by the FAMI-QS Certified Operator.
            </p>
          </div>
        </section>

        {/* section 18 */}
        <hr className="my-2" />
        <section>
          <p>
            <strong>
              19. India Conformity Assessment Scheme (i-CAS) - Halal Additional
              requirements
            </strong>
          </p>
          <p>
            Client shall allow the periodic and sudden evaluation visits of the
            IRCLASS and to its customers.
          </p>
        </section>
      </div>
      <div className="overflow-hidden mt-4">
        <Table
          responsive="md"
          hover
          bordered
          className="table-striped w-full table-auto"
        >
          <tbody>
            <tr>
              <td className="p-2 align-middle font-bold">
                Name of the Organization
              </td>
              <td className="p-2 align-middle">
                <input
                  className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                  type="text"
                  name=""
                  // value={auditor.auditorName}
                />
              </td>
              <td className="p-2 align-middle text-center font-bold">
                IRQS (A Div. of ISSPL)
              </td>
              <td className="p-2 align-middle">
                <input
                  className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                  type="text"
                  name=""
                  // value={auditor.auditorName}
                />
              </td>
            </tr>

            <tr>
              <td className="p-2 align-middle font-bold">
                Name of Representative
              </td>
              <td className="p-2 align-middle">
              <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="text"
                    name="irqsName"
                    // value={formData.irqsName}
                    onChange={handleChange}
                  />
              </td>
              <td className="p-2 align-middle text-center font-bold">Name</td>
              <td className="p-2 align-middle">
                <input
                  className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                  type="text"
                  name=""
                 
                />
              </td>
            </tr>

            <tr>
              <td className="p-2 align-middle font-bold">Signature & Date</td>
              <td className="p-2 align-middle">
              <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm mb-1"
                    type="text"
                    name="irqsSignature"
                    placeholder="IRQS Signature"
                    disabled
                  />
                  <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="date"
                    name="irqsSignatureDate"
                    // value={formData.irqsSignatureDate}
                    onChange={handleChange}
                  />
              </td>
              <td className="p-2 align-middle text-center font-bold">
                Signature & Date
              </td>
              <td className="p-2 align-middle">
              <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm mb-1"
                    type="text"
                    name="irqsSignature"
                    placeholder="IRQS Signature"
                   
                  />
                  <input
                    className="w-full h-full m-0 border border-grey p-1 rounded-sm"
                    type="date"
                    name="irqsSignatureDate"
                    // value={formData.irqsSignatureDate}
                    onChange={handleChange}
                  />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="flex justify-end space-x-4 p-4">
        <Button
          className="bg-black text-white px-6 py-2 rounded-md shadow-md"
          type="button"
          
        >
          Close
        </Button>
        <Button
          className="bg-white text-black border-black border px-6 py-2 rounded-md shadow-md"
          type="button"
           onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
</form>

    </>
  );
};

export default OrderAcceptance;

