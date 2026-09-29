import DummyPrice from "../../models/dummyPrice.js";
import FormIATF from "../../models/forms/formIATF.js";
import LeadForm from "../../models/leadForm.js";
import User from "../../models/user.js";

export const getDummyPrice = async (req, res) => {
  try {
    const dummyPrice = await DummyPrice.findAll();
    return res.status(200).json(dummyPrice);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const calculateTotals = async (req, res) => {
  try {
    const { manufacturingSites } = req.body;

    if (!manufacturingSites || !Array.isArray(manufacturingSites)) {
      return res.status(400).json({ error: "Invalid manufacturingSites format" });
    }

    const totals = manufacturingSites.reduce(
      (acc, site) => {
        acc.noOfShifts += site.noOfShifts || 0;
        acc.fullTimeEmployees += site.fullTimeEmployees || 0;
        acc.partTimeEmployees += site.partTimeEmployees || 0;
        acc.contractEmployees += site.contractEmployees || 0;
        acc.temporaryEmployees += site.temporaryEmployees || 0;
        acc.averageNumberOfDailyWorkers += site.averageNumberOfDailyWorkers || 0;
        return acc;
      },
      {
        noOfShifts: 0,
        fullTimeEmployees: 0,
        partTimeEmployees: 0,
        contractEmployees: 0,
        temporaryEmployees: 0,
        averageNumberOfDailyWorkers: 0,
      }
    );

    res.status(200).json({
      success: true,
      totals,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const createCertificationForm = async (req, res) => {
  try {

    const { userId, customerId } = req.existUser;

    // const { userId } = req.existUser;
    // console.log(req.existUser)
    const {
      // bdName,
      questionnaireNo,
      date,
      compnayName,
      address,
      invoiceAddress,
      phoneNo,
      pinCode,
      email,
      website,
      panNo,
      faxNo,
      gstDetails,
      tanNo,
      contactName,
      contactDesignation,
      contactPhone,
      contactMobile,
      contactEmail,
      businessActivity,
      desiredScopeOfCertification,
      manufacturingSites,
      extendedSites,
      srslLocations,
      vendorCode,
      customerIATF,
      expectedAuditDate,
      otherCertificationSchemes,
      submittedBy,
      uniqueSiteCode,
      certificateValidUntil,
      previousCertificationBody,
      readinessAssessmentFailed,
      sites,
      certificateCancelledReason,
      previousIATFCertificateNumber,
      usiCodeMainSite,
      srslSupportLocations,
      isSRSLAudited,
      multisiteOrganisation,
      isUnderConporateScheme,
      carporateHeader,
      remarks,
      initialCertification,
      upgradeFromISO9001,
      upgradeFromLOC,
      transfer,
      renewal,
      previousIATFStatus,
      certificationStatus,
      certificationType,
      createdByType,
    } = req.body;

    console.log("2");

    const exisCustomer = await LeadForm.findByPk(customerId);
    const existUser = await User.findByPk(userId);


    if (!exisCustomer && !existUser) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    // const existBD = await User.findByPk(bdName);

    // console.log(existBD, "EX - BD")

    // if (!existBD.roleName === "Business Development Executive") {
    //   return res.status(400).json({
    //     success: false,
    //     message: "DB does not exist",
    //   });
    // }

    // const existBD = await User.findByPk(userId);
    // if (!existBD.roleName === "Business Development Executive") {
    //   return res.status(404).json({
    //     success: false,
    //     message: "DB does not exist",
    //   });
    // }

    console.log("3");

    const data = await FormIATF.create({
      // bdName,
      questionnaireNo,
      date,
      compnayName,
      address,
      invoiceAddress,
      phoneNo,
      pinCode,
      email,
      website,
      panNo,
      faxNo,
      gstDetails,
      tanNo,
      contactName,
      contactDesignation,
      contactPhone,
      contactMobile,
      contactEmail,
      businessActivity,
      desiredScopeOfCertification,
      manufacturingSites,
      extendedSites,
      srslLocations,
      vendorCode,
      customerIATF,
      expectedAuditDate,
      otherCertificationSchemes,
      submittedBy,
      uniqueSiteCode,
      certificateValidUntil,
      previousCertificationBody,
      readinessAssessmentFailed,
      sites,
      certificateCancelledReason,
      previousIATFCertificateNumber,
      usiCodeMainSite,
      srslSupportLocations,
      isSRSLAudited,
      multisiteOrganisation,
      isUnderConporateScheme,
      carporateHeader,
      remarks,
      initialCertification,
      upgradeFromISO9001,
      upgradeFromLOC,
      transfer,
      renewal,
      previousIATFStatus,
      certificationStatus,
      certificationType,
      // assignTo: userId,
      createdByType,
      createdById: userId || customerId,
    });

    console.log("4");

    res.status(201).json({
      success: true,
      message: "Form created successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCertificationForms = async (req, res) => {
  try {
    const forms = await FormIATF.findAll();
    res.status(200).json(forms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCertificationFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await FormIATF.findByPk(id);
    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateCertificationForm = async (req, res) => {
  try {
    const form = await FormIATF.findByPk(req.params.id);
    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }
    await form.update(req.body);
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCertificationForm = async (req, res) => {
  try {
    const form = await FormIATF.findByPk(req.params.id);
    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }
    await form.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
