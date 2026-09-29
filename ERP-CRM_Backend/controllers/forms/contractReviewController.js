
import ContractReviewForm from "../../models/forms/contractReviewForm.js";
import { Lead } from "../../models/lead.js";
import LeadForm from "../../models/leadForm.js";
import User from "../../models/user.js";


export const createContractReview = async (req, res) => {
  try {
    const {
      leadId,
      customerId,
      organizationName,
      address,
      scopeActivity,
      certificationType,
      status,
      standard,
      justificationForExclusion,
      markUsageComment,
      isMultisiteOrganization,
      isUnderCorporateScheme,
      corporateHeaderName,
      usiSiteExtension,
      remarks,
      iafEAcode,
      naceRev2,
      naceRev11,
      preparedByName,
      preparedBySignature,
      preparedByDate,
      approvedByName,
      approvedBySignature,
      approvedByDate,
      managementSystem,
      certificateNumber,
      certificateExpiryDate,
      certificationBody,
      usiCodesForSiteExtension,
      usiCodesForSRSL,
      surveillance1Onsite,
      surveillance1Offsite,
      surveillance2Onsite,
      surveillance2Offsite,
      surveillance3Onsite,
      surveillance3Offsite,
      surveillance4Onsite,
      surveillance4Offsite,
      surveillance5Onsite,
      surveillance5Offsite,
      consultantToFirm,
      consultantDetails,
      isTopManagementPartOfBoard,
      trainingInfluence,
      conflictOfInterestReview,
      revisionHistory,
      accreditationToBeGranted,
      applicationStatus,
      mainSiteManPower,
      mainSiteManday,
      mainSiteStage1,
      mainSiteStage2,
      mainSiteSpecialAudit,
      mainSiteSA1,
      mainSiteSA2,
      mainSiteTransfer,
      siteExtensionManPower,
      siteExtensionManday,
      siteExtensionStage1,
      siteExtensionStage2,
      siteExtensionSpecialAudit,
      siteExtensionSA1,
      siteExtensionSA2,
      siteExtensionTransfer,
      srslManPower,
      srslManday,
      srslStage1,
      srslStage2,
      srslSpecialAudit,
      srslSA1,
      srslSA2,
      srslTransfer,
      totalMandays,
      stage1Mandays,
      stage1Onsite,
      stage1Offsite,
      stage2RenewalMandays,
      stage2RenewalOnsite,
      stage2RenewalOffsite,
      increasingFactor,
      decreasingFactor,
      increaseMandaysCriteria,
      decreaseMandaysCriteria,
      increaseStandard,
      IncsiteName,
      decreaseStandard,
      DecsiteName,
      manpowerAtSite,
      manpowerAtSiteExtension,
      manpowerAtSRSL,
    } = req.body;

    const { userId } = req.existUser;
    console.log(userId, "userid ")

    const existUser = await User.findByPk(userId);
    if (!existUser) {
      return res.status(403).json({ message: "User not found" });
    }

    const existLead = await Lead.findByPk(leadId);
    if (!existLead) {
      return res.status(403).json({ message: "Lead not found" });
    }

    const existCustomer = await LeadForm.findByPk(customerId);
    if (!existCustomer) {
      return res.status(403).json({ message: "Customer not found" });
    }

    const newContractReview = await ContractReviewForm.create({
      createdBy: userId,
      leadId,
      customerId,
      organizationName,
      address,
      scopeActivity,
      certificationType,
      status,
      standard,
      justificationForExclusion,
      markUsageComment,
      isMultisiteOrganization,
      isUnderCorporateScheme,
      corporateHeaderName,
      usiSiteExtension,
      remarks,
      iafEAcode,
      naceRev2,
      naceRev11,
      preparedByName,
      preparedBySignature,
      preparedByDate,
      approvedByName,
      approvedBySignature,
      approvedByDate,
      managementSystem,
      certificateNumber,
      certificateExpiryDate,
      certificationBody,
      usiCodesForSiteExtension,
      usiCodesForSRSL,
      surveillance1Onsite,
      surveillance1Offsite,
      surveillance2Onsite,
      surveillance2Offsite,
      surveillance3Onsite,
      surveillance3Offsite,
      surveillance4Onsite,
      surveillance4Offsite,
      surveillance5Onsite,
      surveillance5Offsite,
      consultantToFirm,
      consultantDetails,
      isTopManagementPartOfBoard,
      trainingInfluence,
      conflictOfInterestReview,
      revisionHistory,
      accreditationToBeGranted,
      applicationStatus,
      mainSiteManPower,
      mainSiteManday,
      mainSiteStage1,
      mainSiteStage2,
      mainSiteSpecialAudit,
      mainSiteSA1,
      mainSiteSA2,
      mainSiteTransfer,
      siteExtensionManPower,
      siteExtensionManday,
      siteExtensionStage1,
      siteExtensionStage2,
      siteExtensionSpecialAudit,
      siteExtensionSA1,
      siteExtensionSA2,
      siteExtensionTransfer,
      srslManPower,
      srslManday,
      srslStage1,
      srslStage2,
      srslSpecialAudit,
      srslSA1,
      srslSA2,
      srslTransfer,
      totalMandays,
      stage1Mandays,
      stage1Onsite,
      stage1Offsite,
      stage2RenewalMandays,
      stage2RenewalOnsite,
      stage2RenewalOffsite,
      increasingFactor,
      decreasingFactor,
      increaseMandaysCriteria,
      decreaseMandaysCriteria,
      increaseStandard,
      IncsiteName,
      decreaseStandard,
      DecsiteName,
      manpowerAtSite,
      manpowerAtSiteExtension,
      manpowerAtSRSL,
    });

    return res.status(201).json({ success: true, data: newContractReview });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getContractReviewByCustomerId = async (req, res) => {
  try {
    const { customerId } = req.params;
    const contractReview = await ContractReviewForm.findAll({
      // where: { customerId },
      where: {
        customerId: customerId
      }
    });
    if (!contractReview) {
      return res.status(404).json({ message: "Contract Review not found" });
    }
    res.status(200).json(contractReview)
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
}


export const getAllContractReviews = async (req, res) => {
  try {
    const contractReviews = await ContractReviewForm.findAll();
    res.status(200).json(contractReviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getContractReviewById = async (req, res) => {
  try {
    const contractReview = await ContractReviewForm.findByPk(req.params.id);
    if (!contractReview) {
      return res.status(404).json({ message: "Contract Review not found" });
    }
    res.status(200).json(contractReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateContractReview = async (req, res) => {
  try {
    const {
      leadId,
      customerId,
      organizationName,
      address,
      scopeActivity,
      certificationType,
      status,
      standard,
      justificationForExclusion,
      markUsageComment,
      isMultisiteOrganization,
      isUnderCorporateScheme,
      corporateHeaderName,
      usiSiteExtension,
      remarks,
      iafEAcode,
      naceRev2,
      naceRev11,
      preparedByName,
      preparedBySignature,
      preparedByDate,
      approvedByName,
      approvedBySignature,
      approvedByDate,
      managementSystem,
      certificateNumber,
      certificateExpiryDate,
      certificationBody,
      usiCodesForSiteExtension,
      usiCodesForSRSL,
      surveillance1Onsite,
      surveillance1Offsite,
      surveillance2Onsite,
      surveillance2Offsite,
      surveillance3Onsite,
      surveillance3Offsite,
      surveillance4Onsite,
      surveillance4Offsite,
      surveillance5Onsite,
      surveillance5Offsite,
      consultantToFirm,
      consultantDetails,
      isTopManagementPartOfBoard,
      trainingInfluence,
      conflictOfInterestReview,
      revisionHistory,
      accreditationToBeGranted,
      applicationStatus,
      mainSiteManPower,
      mainSiteManday,
      mainSiteStage1,
      mainSiteStage2,
      mainSiteSpecialAudit,
      mainSiteSA1,
      mainSiteSA2,
      mainSiteTransfer,
      siteExtensionManPower,
      siteExtensionManday,
      siteExtensionStage1,
      siteExtensionStage2,
      siteExtensionSpecialAudit,
      siteExtensionSA1,
      siteExtensionSA2,
      siteExtensionTransfer,
      srslManPower,
      srslManday,
      srslStage1,
      srslStage2,
      srslSpecialAudit,
      srslSA1,
      srslSA2,
      srslTransfer,
      totalMandays,
      stage1Mandays,
      stage1Onsite,
      stage1Offsite,
      stage2RenewalMandays,
      stage2RenewalOnsite,
      stage2RenewalOffsite,
      increasingFactor,
      decreasingFactor,
      increaseMandaysCriteria,
      decreaseMandaysCriteria,
      increaseStandard,
      IncsiteName,
      decreaseStandard,
      DecsiteName,
      manpowerAtSite,
      manpowerAtSiteExtension,
      manpowerAtSRSL,
    } = req.body;

    const { id } = req.params;

    const existContractReview = await ContractReviewForm.findByPk(id);

    if (!existContractReview) {
      return res.status(404).json({ message: "Contract review not found" });
    }

    await existContractReview.update({
      leadId,
      customerId,
      organizationName,
      address,
      scopeActivity,
      certificationType,
      status,
      standard,
      justificationForExclusion,
      markUsageComment,
      isMultisiteOrganization,
      isUnderCorporateScheme,
      corporateHeaderName,
      usiSiteExtension,
      remarks,
      iafEAcode,
      naceRev2,
      naceRev11,
      preparedByName,
      preparedBySignature,
      preparedByDate,
      approvedByName,
      approvedBySignature,
      approvedByDate,
      managementSystem,
      certificateNumber,
      certificateExpiryDate,
      certificationBody,
      usiCodesForSiteExtension,
      usiCodesForSRSL,
      surveillance1Onsite,
      surveillance1Offsite,
      surveillance2Onsite,
      surveillance2Offsite,
      surveillance3Onsite,
      surveillance3Offsite,
      surveillance4Onsite,
      surveillance4Offsite,
      surveillance5Onsite,
      surveillance5Offsite,
      consultantToFirm,
      consultantDetails,
      isTopManagementPartOfBoard,
      trainingInfluence,
      conflictOfInterestReview,
      revisionHistory,
      accreditationToBeGranted,
      applicationStatus,
      mainSiteManPower,
      mainSiteManday,
      mainSiteStage1,
      mainSiteStage2,
      mainSiteSpecialAudit,
      mainSiteSA1,
      mainSiteSA2,
      mainSiteTransfer,
      siteExtensionManPower,
      siteExtensionManday,
      siteExtensionStage1,
      siteExtensionStage2,
      siteExtensionSpecialAudit,
      siteExtensionSA1,
      siteExtensionSA2,
      siteExtensionTransfer,
      srslManPower,
      srslManday,
      srslStage1,
      srslStage2,
      srslSpecialAudit,
      srslSA1,
      srslSA2,
      srslTransfer,
      totalMandays,
      stage1Mandays,
      stage1Onsite,
      stage1Offsite,
      stage2RenewalMandays,
      stage2RenewalOnsite,
      stage2RenewalOffsite,
      increasingFactor,
      decreasingFactor,
      increaseMandaysCriteria,
      decreaseMandaysCriteria,
      increaseStandard,
      IncsiteName,
      decreaseStandard,
      DecsiteName,
      manpowerAtSite,
      manpowerAtSiteExtension,
      manpowerAtSRSL,
    });

    return res.status(200).json({
      success: true,
      data: existContractReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteContractReview = async (req, res) => {
  try {
    const deleted = await ContractReviewForm.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Contract Review not found" });
    }
    res.status(201).send({
      success: true,
      message: "Contract Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
