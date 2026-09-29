import ContractReviewForm from "../models/forms/contractReviewForm.js";
import { Lead } from "../models/lead.js";
import Certification from "../models/questionnaire/certificationType.js";
import Currency from "../models/questionnaire/currency.js";
import Surveillance from "../models/questionnaire/surveillanceType.js";
import Quotation from "../models/quotation.js";

export const createQuotation = async (req, res) => {
  try {

    const { userId } = req.existUser;

    const {
      leadId,
      quotationNo,
      clientName,
      revisionNumber,
      certificationType,
      surveillanceType,
      standards,
      requestedScope,
      businessActivity,
      applicationFees,
      accreditationFees,
      surveillanceAudit1Fees,
      surveillanceAudit2Fees,
      surveillanceAudit3Fees,
      surveillanceAudit4Fees,
      surveillanceAudit5Fees,
      stage1AuditFees,
      stage2AuditFees,
      totalFees,
      currencyType,
      isDiscountGiven,
      approvedQuotationAmount,
    } = req.body;

    const existLead = await Lead.findByPk(leadId);

    if (!existLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    const existCurrency = await Currency.findOne({
      where: { name: currencyType },
    });

    const existCertification = await Certification.findOne({
      where: { name: certificationType },
    });

    const existSurveillance = await Surveillance.findOne({
      where: { name: surveillanceType },
    });

    if (!existCurrency || !existCertification || !existSurveillance) {
      return res.status(404).json({
        message:
          "Currency, Certification Type, or Surveillance Type not found!",
      });
    }

    const quotation = await Quotation.create({
      leadId,
      createdBy: userId,
      quotationNo,
      clientName,
      revisionNumber,
      certificationType,
      surveillanceType,
      standards,
      requestedScope,
      businessActivity,
      applicationFees,
      accreditationFees,
      surveillanceAudit1Fees,
      surveillanceAudit2Fees,
      surveillanceAudit3Fees,
      surveillanceAudit4Fees,
      surveillanceAudit5Fees,
      stage1AuditFees,
      stage2AuditFees,
      totalFees,
      currencyType,
      isDiscountGiven,
      approvedQuotationAmount,
    });
    res.status(201).json({
      success: true,
      message: quotation,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getContractReviewData = async (req, res) => {
  try {
    const { leadId, bdId } = req.params;

    // Fetch the quotation with related lead and contract review data
    const quotation = await Quotation.findOne({
      where: { 
        leadId: leadId, 
        createdBy: bdId 
      },
      include: [
        {
          model: Lead,
          attributes: ["id", "firstName", "lastName"],
        },
        {
          model: ContractReviewForm,
          as: "ContractReview", // Ensure this matches the alias in your association
          where: {
            leadId: leadId,
            createdBy: bdId,
          },
          required: false, 
        },
      ],
    });

    if (!quotation) {
      return res.status(404).json({ message: "Quotation not found" });
    }

    res.status(200).json(quotation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};


export const getAllQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.findAll({
      include: [
        {
          model: Lead,
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });
    res.status(200).json(quotations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCurrency = async (req, res) => {
  try {
    const currency = await Currency.findAll();
    res.status(200).json({
      success: true,
      data: currency,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getQuotationById = async (req, res) => {
  try {
    const { id } = req.params;
    const quotation = await Quotation.findByPk(id);
    if (!quotation) {
      return res.status(404).json({ error: "Quotation not found" });
    }
    res.status(200).json(quotation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.findByPk(req.params.id);
    if (!quotation) {
      return res.status(404).json({ error: "Quotation not found" });
    }
    await quotation.update(req.body);
    res.status(200).json(quotation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.findByPk(req.params.id);
    if (!quotation) {
      return res.status(404).json({ error: "Quotation not found" });
    }
    await quotation.destroy();
    res.status(204).json({ message: "Quotation deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
