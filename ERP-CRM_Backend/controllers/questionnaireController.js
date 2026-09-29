import { Lead } from "../models/lead.js";
import Questionnaire from "../models/questionnaire.js";
import Zone from "../models/questionnaire/zone.js";
import Surveillance from "../models/questionnaire/surveillanceType.js";
import Certification from "../models/questionnaire/certificationType.js";
import ContractReview from "../models/questionnaire/contractRevew.js";
import LeadForm from "../models/leadForm.js";
import User from "../models/user.js";

export const getCertification = async (req, res) => {
  try {
    const certification = await Certification.findAll();
    return res.status(200).json({
      success: true,
      data: certification,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getContractReview = async (req, res) => {
  try {
    const contractReview = await ContractReview.findAll();
    return res.status(200).json({
      success: true,
      data: contractReview,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getZone = async (req, res) => {
  try {
    const zone = await Zone.findAll();
    return res.status(200).json({
      success: true,
      data: zone,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSurveillance = async (req, res) => {
  try {
    const surveillance = await Surveillance.findAll();
    return res.status(200).json({
      success: true,
      data: surveillance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const {
      questionnaireNo,
      clientName,
      zone,
      certificationType,
      surveillanceType,
      readinessDate,
      selectSites,
      standard,
      selectedStandard,
      accreditation,
      selectedAccreditation,
      businessActivity,
      requestScope,
      additionalInformation,
      anyOtherServices,
      systemImplementationPeriod,
      irsServiceProvided,
      consultantName,
      otherConsultant,
      consultancyFirmName,
      contactNumber,
      email,
      managementOfChanges,
      supplierFor,
      desiredScopeOfCertification,
      productDesignResponsibility,
      qmsSingleManufacturingSite,
      qmsSingleExtendedSites,
      qmsCorporateScheme,
      leadId,
      createdByType
    } = req.body;


    const { userId, customerId } = req.existUser;
    // const { customerId } = req.customer;

    console.log(req.existUser, "Exist User");

    const exisCustomer = await LeadForm.findByPk(customerId);
    const existUser = await User.findByPk(userId);
    

    if (!exisCustomer && !existUser) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const existLead = await Lead.findByPk(leadId);

    if (!existLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    const existZone = await Zone.findOne({
      where: {
        name: zone,
      },
    });

    if (!existZone) {
      return res.status(404).json({
        message: "zone not found!",
      });
    }

    const existCertification = await Certification.findOne({
      where: {
        name: certificationType,
      },
    });

    if (!existCertification) {
      return res.status(404).json({
        message: "Certification not found!",
      });
    }

    const existsurveillance = await Surveillance.findOne({
      where: {
        name: surveillanceType,
      },
    });

    if (!existsurveillance) {
      return res.status(404).json({
        message: "surveillance not found!",
      });
    }

    const questionnaire = await Questionnaire.create({
      questionnaireNo,
      clientName,
      zone,
      certificationType,
      surveillanceType,
      readinessDate,
      selectSites,
      standard,
      selectedStandard,
      accreditation,
      selectedAccreditation,
      businessActivity,
      requestScope,
      additionalInformation,
      anyOtherServices,
      systemImplementationPeriod,
      irsServiceProvided,
      consultantName,
      otherConsultant,
      consultancyFirmName,
      contactNumber,
      email,
      managementOfChanges,
      supplierFor,
      desiredScopeOfCertification,
      productDesignResponsibility,
      qmsSingleManufacturingSite,
      qmsSingleExtendedSites,
      qmsCorporateScheme,
      leadId,
      createdByType,
      createdById: userId || customerId,
    });

    return res.status(201).json({
      success: true,
      data: questionnaire,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const getQuestionnaire = async (req, res) => {
  try {
    const questionnaires = await Questionnaire.findAll({
      include: [
        {
          model: Lead,
          attributes: [
            "id",
            "leadTypeId",
            "leadStatusId",
            "sourceOfLeadId",
            "companyName",
          ],
        },
      ],
    });
    res.status(200).json(questionnaires);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleQuestionnaire = async (req, res) => {
  try {
    const questionnaire = await Questionnaire.findByPk(req.params.id);
    if (!questionnaire) {
      return res.status(404).json({ error: "Questionnaire not found" });
    }
    res.status(200).json(questionnaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      questionnaireNo,
      clientName,
      zone,
      certificationType,
      surveillanceType,
      readinessDate,
      selectSites,
      leadId,
    } = req.body;

    const questionnaire = await Questionnaire.findByPk(id);

    if (!questionnaire) {
      return res.status(404).json({
        success: false,
        message: "questionnaire not found",
      });
    }

    if (leadId) {
      const existLead = await Lead.findByPk(leadId);

      if (!existLead) {
        return res.status(404).json({
          success: false,
          message: "Lead not found",
        });
      }
    }

    await questionnaire.update({
      questionnaireNo,
      clientName,
      zone,
      certificationType,
      surveillanceType,
      readinessDate,
      selectSites,
      leadId,
    });

    return res.status(200).json({
      success: true,
      message: "questionnaire update successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteQuestionnaire = async (req, res) => {
  const { id } = req.params;
  try {
    const existQuestionnaire = await Questionnaire.findByPk(id);
    if (!existQuestionnaire) {
      return res.status(400).json({
        success: false,
        message: "Questionnaire not found",
      });
    }

    const deleted = await Questionnaire.destroy({
      where: { id: id },
    });

    if (deleted) {
      res.status(201).json({
        success: true,
        message: "Questionnaire deleted",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
