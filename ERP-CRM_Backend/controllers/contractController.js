import { Contract } from "../models/contract.js";
import { mailSender } from "../lib/mailSender.js";
import { Lead } from "../models/lead.js";
import Questionnaire from "../models/questionnaire.js";
import Certification from "../models/questionnaire/certificationType.js";
import Surveillance from "../models/questionnaire/surveillanceType.js";
import ContractReview from "../models/questionnaire/contractRevew.js";
import Zone from "../models/questionnaire/zone.js";


export const createContract = async (req, res) => {
  try {
    const {
      leadId,
      clientName,
      questionnaireNo,
      certificationType,
      surveillanceType,
      contractRevewType,
      zone,
      businessActivity,
      requestedScope,
      certificationAudit,
      certificationAudit1,
      certificationAudit2,
      consultant,
      organizations,
      influence,
      nameOfConsultant,
      reviewOfConflict,
      certificationAccepted,
      conclusion,
      significantChanges,
      externalSources,
      comment,
    } = req.body;

    const exitsLead = await Lead.findByPk(leadId);
    if (exitsLead) {
      try {
        const { email } = exitsLead;
        const emailResponse = await mailSender(
          email,
          "Contract created successfully",
          "You got the contract"
        );

        console.log("Email sent successfully:", emailResponse);
      } catch (error) {
        console.error("Error occurred while sending email:", error);
        return res.status(500).json({
          success: false,
          message: "Error occurred while sending email",
          error: error.message,
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "Lead id not found",
      });
    }

    const existQuestionnaireNo = await Questionnaire.findOne({
      where: {
        questionnaireNo: questionnaireNo,
      },
    });

    if (!existQuestionnaireNo) {
      return res.status(404).json({
        success: false,
        message: "Questionnaire no not found",
      });
    }

    const exitCertification = await Certification.findOne({
      where: {
        name: certificationType,
      },
    });

    if (!exitCertification) {
      return res.status(404).json({
        success: false,
        message: "certification no not found",
      });
    }

    const exitSurveillance = await Surveillance.findOne({
      where: {
        name: surveillanceType,
      },
    });

    if (!exitSurveillance) {
      return res.status(404).json({
        success: false,
        message: "surveillance no not found",
      });
    }

    const exitContractRevew = await ContractReview.findOne({
      where: {
        name: contractRevewType,
      },
    });

    if (!exitContractRevew) {
      return res.status(404).json({
        success: false,
        message: "surveillance no not found",
      });
    }

    const exitZone = await Zone.findOne({
      where: {
        name: zone,
      },
    });

    if (!exitZone) {
      return res.status(404).json({
        success: false,
        message: "zone no not found",
      });
    }

    const contract = await Contract.create({
      leadId,
      clientName,
      questionnaireNo,
      certificationType,
      surveillanceType,
      contractRevewType,
      zone,
      businessActivity,
      requestedScope,
      certificationAudit,
      certificationAudit1,
      certificationAudit2,
      consultant,
      organizations,
      influence,
      nameOfConsultant,
      reviewOfConflict,
      certificationAccepted,
      conclusion,
      significantChanges,
      externalSources,
      comment,
    });
    res.status(201).json({
      success: true,
      message: "contract created successfully",
      data: contract,
    });
  } catch (error) {
    console.error("Error creating contract:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getContract = async (req, res) => {
  try {
    const contracts = await Contract.findAll({
      include:[{
        model:Lead,
        attributes: ['firstName', 'lastName',], 

      }]
    });
    res.status(200).json(contracts);
  } catch (error) {
    console.error("Error fetching contracts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSingleContract = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findByPk(id);

    if (!contract) {
      return res.status(404).json({ message: "Contract not found" });
    }

    res.status(200).json(contract);
  } catch (error) {
    console.error("Error fetching contract:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateContract = async (req, res) => {
  const { id } = req.params;

  const {
    leadId,
    clientName,
    questionnaireNo,
    certificationType,
    surveillanceType,
    contractRevewType,
    zone,
    businessActivity,
    requestedScope,
    certificationAudit,
    certificationAudit1,
    certificationAudit2,
    consultant,
    organizations,
    influence,
    nameOfConsultant,
    reviewOfConflict,
    certificationAccepted,
    conclusion,
    significantChanges,
    externalSources,
    comment,
  } = req.body;

  try {
    const contract = await Contract.findByPk(id);

    if (!contract) {
      return res.status(404).json({ message: "Contract not found" });
    }

    await contract.update({
      leadId,
      clientName,
      questionnaireNo,
      certificationType,
      surveillanceType,
      contractRevewType,
      zone,
      businessActivity,
      requestedScope,
      certificationAudit,
      certificationAudit1,
      certificationAudit2,
      consultant,
      organizations,
      influence,
      nameOfConsultant,
      reviewOfConflict,
      certificationAccepted,
      conclusion,
      significantChanges,
      externalSources,
      comment,
    });
    res.status(200).json(contract);
  } catch (error) {
    console.error("Error updating contract:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteContract = async (req, res) => {
  const { id } = req.params;
  try {
    const contract = await Contract.findByPk(id);

    if (!contract) {
      return res.status(404).json({ message: "Contract not found" });
    }

    await contract.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting contract:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

