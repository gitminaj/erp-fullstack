import Event from "../models/auditor/auditorEvent.js";
import AuditorMainTechnicalArea from "../models/auditor/auditorMainTechnicalArea.js";
import AuditorStandards from "../models/auditor/auditorStandards.js";
import AuditorSubTechnicalArea from "../models/auditor/auditorSubTechnicalArea.js";

export const createEvent = async (req, res) => {
  try {
    const {
      location,
      auditType,
      nameOfClient,
      scopeOfAudit,
      auditTeam,
      nameOfEvaluator,
      nameOfAppraisee,
      scheme,
      assessmentStartDate,
      assessmentEndDate,
      remarkComment,
      naceCodeRev1,
      naceCodeRev2,
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


    const existScheme = await AuditorStandards.findOne({
      where: {
        name: scheme
      }
    })


    if (!existScheme) {
      return res.status(404).json({
        success: false,
        message: "existScheme not found!",
      })
    }


    const mainTechnicalAreaRecord = mainTechicalArea ? await AuditorMainTechnicalArea.findOne({ where: { name: mainTechicalArea } })
      : null;

    const subTechnicalAreaRecord = subTechnicalArea
      ? await AuditorSubTechnicalArea.findOne({ where: { name: subTechnicalArea } })
      : null;


    const newEvent = await Event.create({
      location,
      auditType,
      nameOfClient,
      scopeOfAudit,
      auditTeam,
      nameOfEvaluator,
      nameOfAppraisee,
      scheme,
      assessmentStartDate,
      assessmentEndDate,
      remarkComment,
      naceCodeRev1,
      naceCodeRev2,
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

    res.status(201).json({ success: true, data: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    await event.update(updatedData);
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    await event.destroy();
    res.status(200).json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
