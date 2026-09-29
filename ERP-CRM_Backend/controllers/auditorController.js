import Auditor from "../models/auditor/auditor.js";
import Zone from "../models/questionnaire/zone.js";
import AuditorApplyFor from "../models/auditor/auditorApplyFor.js";
import AuditorStandards from "../models/auditor/auditorStandards.js";
import AuditorTitle from "../models/auditor/auditorTitle.js";
import { AuditorIRS, AuditorSPL } from "../models/auditor/auditorSplIrs.js";
import AuditorIndustry from "../models/auditor/auditorIndustry.js";
import AuditorQualificationCriteria from "../models/auditor/auditorQualificationCriteria.js";
import AuditorLanuage from "../models/auditor/auditorLanuage.js";
import AuditorDocumentType from "../models/auditor/auditorDocumentType.js";
import NaceCodeRev1 from "../models/auditor/auditorNaceCodeRev1.js";
import NaceCodeRev2 from "../models/auditor/auditorNaceCodeRev2.js";
import IAFCodes from "../models/auditor/auditorIAFCode.js";
import EmsRisk from "../models/auditor/auditorEmsRisk.js";
import AuditorLanuagesProficiency from "../models/auditor/auditorLanuagesProficiency.js";
import AuditorSubTechnicalArea from "../models/auditor/auditorSubTechnicalArea.js";
import AuditorMainTechnicalArea from "../models/auditor/auditorMainTechnicalArea.js";
import AuditorFileType from "../models/auditor/auditorFileType.js";
import Country from "../models/auditor/country.js";


export const getAuditorFileType = async (req, res) => {
  try {
    const auditorFileType = await AuditorFileType.findAll();
    return res.status(200).json(auditorFileType);
  } catch (error) {
    console.error("Error fetching AuditorFileType:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const getAuditorMainTechnicalArea = async (req, res) => {
  try {
    const auditorMainTechnicalArea = await AuditorMainTechnicalArea.findAll();
    return res.status(200).json(auditorMainTechnicalArea);
  } catch (error) {
    console.error("Error fetching auditorSubTechnicalArea:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const getAuditorSubTechnicalArea = async (req, res) => {
  try {
    const auditorSubTechnicalArea = await AuditorSubTechnicalArea.findAll();
    return res.status(200).json(auditorSubTechnicalArea);
  } catch (error) {
    console.error("Error fetching auditorSubTechnicalArea:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const getAuditorNaceRev1 = async (req, res) => {
  try {
    const naceCodeRev1 = await NaceCodeRev1.findAll();
    return res.status(200).json(naceCodeRev1);
  } catch (error) {
    console.error("Error fetching naceCodeRev1:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorNaceRev2 = async (req, res) => {
  try {
    const naceCodeRev2 = await NaceCodeRev2.findAll();
    return res.status(200).json(naceCodeRev2);
  } catch (error) {
    console.error("Error fetching naceCodeRev2:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorIAFCodes = async (req, res) => {
  try {
    const iafCOdes = await IAFCodes.findAll();
    return res.status(200).json(iafCOdes);
  } catch (error) {
    console.error("Error fetching IAFCodes:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorEmsRisk = async (req, res) => {
  try {
    const emsRisk = await EmsRisk.findAll();
    return res.status(200).json(emsRisk);
  } catch (error) {
    console.error("Error fetching emsRisk:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorApplyFors = async (req, res) => {
  try {
    const applyFor = await AuditorApplyFor.findAll();
    return res.status(200).json(applyFor);
  } catch (error) {
    console.error("Error fetching applyFor:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorStandards = async (req, res) => {
  try {
    const standards = await AuditorStandards.findAll();
    return res.status(200).json(standards);
  } catch (error) {
    console.error("Error fetching standards:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorTitles = async (req, res) => {
  try {
    const titles = await AuditorTitle.findAll();
    return res.status(200).json(titles);
  } catch (error) {
    console.error("Error fetching titles:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorIsPartOfISSPL = async (req, res) => {
  try {
    const isPartOfISSPL = await AuditorSPL.findAll();
    return res.status(200).json(isPartOfISSPL);
  } catch (error) {
    console.error("Error fetching isPartOfISSPL:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorIisPartOfIRS = async (req, res) => {
  try {
    const isPartOfIRS = await AuditorIRS.findAll();
    return res.status(200).json(isPartOfIRS);
  } catch (error) {
    console.error("Error fetching isPartOfIRS:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorQualificationCriteria = async (req, res) => {
  try {
    const qualificationCriteria = await AuditorQualificationCriteria.findAll();
    return res.status(200).json(qualificationCriteria);
  } catch (error) {
    console.error("Error fetching qualificationCriteria:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorIndustry = async (req, res) => {
  try {
    const industry = await AuditorIndustry.findAll();
    return res.status(200).json(industry);
  } catch (error) {
    console.error("Error fetching industry:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorLanguage = async (req, res) => {
  try {
    const language = await AuditorLanuage.findAll();
    return res.status(200).json(language);
  } catch (error) {
    console.error("Error fetching industry:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditorLanguageProficiency = async (req, res) => {
  try {
    const languageProficiency = await AuditorLanuagesProficiency.findAll();
    return res.status(200).json(languageProficiency);
  } catch (error) {
    console.error("Error fetching industry:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const getAuditorDocumentTypes = async (req, res) => {
  try {
    const document = await AuditorDocumentType.findAll();
    return res.status(200).json(document);
  } catch (error) {
    console.error("Error fetching industry:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getCountry = async (req, res) => {
  try {
    const country = await Country.findAll()
    return res.status(200).json(country);
  } catch (error) {
    console.error("Error fetching country:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

/*   CURD   */

const sendApprovalNotificationToAuditor = async (auditor) => {
  try {
    console.log(auditor.id);
    console.log(`Message: Your Biodata Information has been approved.`);

  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

export const approvalStatusByTechnicalReviewer = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const { role } = req.existUser;
    if (role !== "Accreditation Head") {
      return res.status(403).json({
        message:
          "Only Accreditation Head can review and approve auditor bio data.",
      });
    }

    const validStatuses = ["Accept", "Reject"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status provided." });
    }

    const auditor = await Auditor.findByPk(id);
    if (!auditor) {
      return res.status(404).json({ message: "Auditor not found." });
    }

    auditor.status = status;
    await auditor.save();

    if (status === "Accept") {
      await sendApprovalNotificationToAuditor(auditor);
    }

    return res.status(200).json({
      message: `Auditor status updated to ${status} successfully.`,
      auditor,
    });
  } catch (error) {
    console.error("Error updating auditor status:", error);
    return res.status(500).json({ message: "Server error occurred." });
  }
};

export const createAuditor = async (req, res) => {
  try {
    console.log("1");

    const { role } = req.existUser;
    if (role !== "Auditor") {
      return res.status(403).json({
        message: "Only Auditor can create auditor bio data.",
      });
    }

    const {
      applyFor,
      standard,
      zone,
      title,
      name,
      birthDate,
      isPartOfISSPL,
      isPartOfIRS,
      address,
      expertise,
      languages,
      languagesProficiency,
      city,
      state,
      pinCode,
      country,
      nationality,
      contactNo,
      mobileNo,
      faxNo,
      emailID,
      qualificationCriteria,
      industry,
      naceCodeRev1,
      naceCodeRev2,
      status,
      eafCodes,
      riskCategory,
      training,
      otherQualifications,
      relevantSeminars,
      workExperienceYears,
      organizationName,
      organizationBusinessLine,
      tenure,
      rolesResponsibilities,
      yearsInConsultancy,
      consultancySector,
      numberOfClients,
      yearsInAuditing,
      auditedSector,
      numberOfMandays,
      yearsInTraining,
      numberOfTrainings,
      trainingSectorSubject,
      supplyChainRelatedExperience,
      subTechnicalAreaSCSMSSRSMS,
      mainTechnicaAreaSCSMSSRSMS,
      qmsRisk,
      KeyProcessInvolved,
      qualityControl,
      productRequirement,
      applicableLegalStatutoryRequirements,
      theEnvironmentalTerminology,
      aboutTechniquesInvolvedEvaluationEnvironmental,
      knowledgeOfEnvironmentalEmergenciesPreparedness,
      knowledgeOfOperationalControlRespect,
      factorsRelatedToGeographyClimate,
      duringDesignStageApproachConcept,
      emsRisk,
      keyProcessesActivities,
      sectorSpecificEnvironmentalAspects,
      sectorSpecificOperationalControl,
      sectorSpecificEnvironmentalLegal,
      linkWithQuestionBank,
      submitTheAnswerSheet,
      terminologyPrinciplesProcessesConcepts,
      aboutTechniquesInvolvedForHazardIdentification,
      knowledgeOfOccupationalHealthSafetyMeasurement,
      methodologyAndApproachForIncidentInvestigation,
      knowledgeOfMethodologies,
      operationalControlMeasure,
      OHSRisk,
      KeyProcessesActivitiesServicesInvolved,
      sectorSpecificRelatedHazards,
      sectorSpecificPotentialEmergencies,
      sectorSpecificWorkplaceMonitoring,
      sectorSpecificOHSLegalOthers,
      listoutFewProductsAndServices,
      listAtLeastExamplesOfTypicalDefects,
      listAtLeastMainCriticalProcesses,
      identifyAtLeastCriticalControlPoints,
      listOutPossibleExternallyProvided,
      mainTechicalArea,
      subTechnicalArea
    } = req.body;

    console.log("2");

    let documentTypeArray = req.body.documentType;
    let documentType;
    if (Array.isArray(documentTypeArray)) {
      documentType = documentTypeArray[1];
    } else {
      documentType = documentTypeArray;
    }

    const uploadFile = req.files?.uploadFile
      ? req.files.uploadFile[0].path
      : null;

    console.log("3");

    const existApplyFor = await AuditorApplyFor.findOne({
      where: { name: applyFor },
    });

    if (!existApplyFor) {
      return res.status(404).json({
        message: "ApplyFor not found!",
      });
    }

    console.log("4");

    const existStandars = await AuditorStandards.findOne({
      where: {
        name: standard,
      },
    });

    if (!existStandars) {
      return res.status(404).json({
        message: "Standards not found!",
      });
    }

    console.log("5");

    const existTitle = await AuditorTitle.findOne({
      where: {
        name: title,
      },
    });

    if (!existTitle) {
      return res.status(404).json({
        message: "Title not found!",
      });
    }

    console.log("6");
    const existIsPartOfISSPL = await AuditorSPL.findOne({
      where: {
        name: isPartOfISSPL,
      },
    });

    if (!existIsPartOfISSPL) {
      return res.status(404).json({
        message: "SPL not found!",
      });
    }

    console.log("7");

    const existIsPartOfIRS = await AuditorIRS.findOne({
      where: {
        name: isPartOfIRS,
      },
    });

    if (!existIsPartOfIRS) {
      return res.status(404).json({
        message: "IRS not found!",
      });
    }

    console.log("8");

    const existLanguages = await AuditorLanuage.findOne({
      where: {
        name: languages
      }
    })

    if (!existLanguages) {
      return res.status(404).json({
        message: "Languages not found!",
      });
    }

    console.log("8.1");

    const existLanguagesProficiency = await AuditorLanuagesProficiency.findOne({
      where: {
        name: languagesProficiency
      }
    })

    if (!existLanguagesProficiency) {
      return res.status(404).json({
        message: "LanguagesProficiency not found!",
      });
    }


    console.log("8.2");

    const existIndustry = await AuditorIndustry.findOne({
      where: {
        name: industry,
      },
    });

    if (!existIndustry) {
      return res.status(404).json({
        message: "Industry not found!",
      });
    }

    console.log("9");

    const existQualificationCriteria =
      await AuditorQualificationCriteria.findOne({
        where: {
          name: qualificationCriteria,
        },
      });

    if (!existQualificationCriteria) {
      return res.status(404).json({
        message: "QualificationCriteria not found!",
      });
    }

    console.log("10");
    const existZone = await Zone.findOne({
      where: {
        name: zone,
      },
    });

    if (!existZone) {
      return res.status(404).json({
        message: "Zone not found!",
      });
    }

    if (typeof documentType !== "string") {
      return res.status(400).json({
        success: false,
        message: "documentType must be a string",
      });
    }

    console.log("11");

    const existDocumentType = await AuditorDocumentType.findOne({
      where: {
        name: documentType,
      },
    });

    if (!existDocumentType) {
      return res.status(404).json({
        message: "Document not found!",
      });
    }

    console.log("12");


    const eafCodesRecord = eafCodes
      ? await IAFCodes.findOne({ where: { name: eafCodes } })
      : null;


    const riskCategoryRecord = riskCategory
      ? await EmsRisk.findOne({ where: { name: riskCategory } })
      : null;

    const mainTechnicalAreaRecord = mainTechicalArea ? await AuditorMainTechnicalArea.findOne({ where: { name: mainTechicalArea } })
      : null;

    const subTechnicalAreaRecord = subTechnicalArea
      ? await AuditorSubTechnicalArea.findOne({ where: { name: subTechnicalArea } })
      : null;


    console.log("14")

    const auditor = await Auditor.create({
      documentType,
      uploadFile,
      applyFor,
      standard,
      zone,
      title,
      name,
      birthDate,
      isPartOfISSPL,
      isPartOfIRS,
      address,
      expertise,
      languages,
      languagesProficiency,
      city,
      state,
      country,
      pinCode,
      nationality,
      contactNo,
      mobileNo,
      faxNo,
      emailID,
      qualificationCriteria,
      industry,
      naceCodeRev1,
      naceCodeRev2,
      status,
      eafCodes: eafCodesRecord ? eafCodesRecord.name : null,
      riskCategory: riskCategoryRecord ? riskCategoryRecord.name : null,
      training,
      otherQualifications,
      relevantSeminars,
      workExperienceYears,
      organizationName,
      organizationBusinessLine,
      tenure,
      rolesResponsibilities,
      yearsInConsultancy,
      consultancySector,
      numberOfClients,
      yearsInAuditing,
      auditedSector,
      numberOfMandays,
      yearsInTraining,
      numberOfTrainings,
      trainingSectorSubject,
      supplyChainRelatedExperience,
      subTechnicalAreaSCSMSSRSMS,
      mainTechnicaAreaSCSMSSRSMS,
      qmsRisk,
      KeyProcessInvolved,
      qualityControl,
      productRequirement,
      applicableLegalStatutoryRequirements,
      theEnvironmentalTerminology,
      aboutTechniquesInvolvedEvaluationEnvironmental,
      knowledgeOfEnvironmentalEmergenciesPreparedness,
      knowledgeOfOperationalControlRespect,
      factorsRelatedToGeographyClimate,
      duringDesignStageApproachConcept,
      emsRisk,
      keyProcessesActivities,
      sectorSpecificEnvironmentalAspects,
      sectorSpecificOperationalControl,
      sectorSpecificEnvironmentalLegal,
      linkWithQuestionBank,
      submitTheAnswerSheet,
      terminologyPrinciplesProcessesConcepts,
      aboutTechniquesInvolvedForHazardIdentification,
      knowledgeOfOccupationalHealthSafetyMeasurement,
      methodologyAndApproachForIncidentInvestigation,
      knowledgeOfMethodologies,
      operationalControlMeasure,
      OHSRisk,
      KeyProcessesActivitiesServicesInvolved,
      sectorSpecificRelatedHazards,
      sectorSpecificPotentialEmergencies,
      sectorSpecificWorkplaceMonitoring,
      sectorSpecificOHSLegalOthers,
      listoutFewProductsAndServices,
      listAtLeastExamplesOfTypicalDefects,
      listAtLeastMainCriticalProcesses,
      identifyAtLeastCriticalControlPoints,
      listOutPossibleExternallyProvided,
      mainTechnicalArea: mainTechnicalAreaRecord ? mainTechnicalAreaRecord.name : null,
      subTechnicalArea: subTechnicalAreaRecord ? subTechnicalAreaRecord.name : null,
    });

    console.log("15");

    res.status(201).json({ success: true, data: auditor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllAuditors = async (req, res) => {
  try {
    const auditors = await Auditor.findAll();
    res.status(200).json({ success: true, auditors });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching auditors", error });
  }
};

export const getAuditorById = async (req, res) => {
  try {
    const auditor = await Auditor.findByPk(req.params.id);
    if (!auditor) {
      return res
        .status(404)
        .json({ success: false, message: "Auditor not found" });
    }
    res.status(200).json({ success: true, auditor });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching auditor", error });
  }
};

export const updateAuditor = async (req, res) => {
  try {
    const { role } = req.existUser;
    if (role !== "Accreditation Controller") {
      return res.status(403).json({
        message:
          "Only Accreditation Controller can view and edit the auditor bio data.",
      });
    }

    const { id } = req.params;

    const auditor = await Auditor.findByPk(id);
    if (!auditor) {
      return res
        .status(404)
        .json({ success: false, message: "Auditor not found" });
    }
    await auditor.update(req.body);
    res.status(200).json({ success: true, auditor });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating auditor", error });
  }
};

export const deleteAuditor = async (req, res) => {
  try {
    const auditor = await Auditor.findByPk(req.params.id);
    if (!auditor) {
      return res
        .status(404)
        .json({ success: false, message: "Auditor not found" });
    }
    await auditor.destroy();
    res.status(200).json({ success: true, message: "Auditor deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting auditor", error });
  }
};
