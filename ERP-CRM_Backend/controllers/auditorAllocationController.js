
import AuditorAllocation from "../models/auditor/auditorAllocation.js"
import AuditorApplyFor from "../models/auditor/auditorApplyFor.js";
import AuditorStandards from "../models/auditor/auditorStandards.js";
import AuditorType from "../models/auditor/auditorType.js";
import Country from "../models/auditor/country.js";

export const createAuditorAllocation = async (req, res) => {
  try {

    console.log('Request Body:', req.body);
    const {
      scheme,
      fileNumber,
      clientName,
      country,
      city,
      state,
      pincode,
      address,
      corporateScheme,
      siteExtensions,
      contactPerson,
      designation,
      contactNumber,
      email,
      name,
      remoteLocationAddress,
      usiCode,
      manpower,
      auditcompletionDate,
      auditors,
      auditStartDate,
      auditEndDate,
      naceCodeRev1,
      naceCodeRev2,
      scope,
      exclusions,
      transferApprovedSMMT,
      typeofAudit,
      modeofAudit,
      remoteAuditAuthorizationWithICTApproved,
      roleInAudit,
      memberOfTheAuditTeamInvoled,
      waiverTakenTeamComposition,
      waiverTakenDelayedAudit,
      smmtWaiverNo,
      noOfAOC,
      noOfMajorNcs,
      noOfMinorNcs,
      manpowerReportByClient,
      manpowerReportInCR,
      isThereAnyChnagesForManDays,
      internalAndIATFWitnessDetails,
      anyOtherInformationAsApporpriate,
      quoationAvailableInIBMAs,
      quoationAvailableInIBMAsDate,
      letterOfConfomance,
      orderAcceptance,
      orderAcceptanceDate,
      PrepareByDate,
      revNo,
      Details,
      revisionApprovedBy,
      iatfCertificateNo,
      iqrsCertificateNo,
      issueDate,
      expiryDate,
      clientUnderSuspension,
      SuspendedDate,
    } = req.body;

    const { userId, fullName } = req.existUser;

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

    const existCountry = await Country.findOne({
      where: {
        name: country
      }
    })

    if (!existCountry) {
      return res.status(404).json({
        success: false,
        message: "existCountry not found!",
      })
    }


    const existTypeAudit = await AuditorType.findOne({
      where: {
        name: typeofAudit
      }
    })


    if (!existTypeAudit) {
      return res.status(404).json({
        success: false,
        message: "existTypeAudit not found!",
      })
    }


    const existRoleInAudit = AuditorApplyFor.findOne({
      where: {
        name: roleInAudit
      }
    })


    if (!existRoleInAudit) {
      return res.status(404).json({
        success: false,
        message: "existRoleInAudit not found!",
      })
    }


    const data = await AuditorAllocation.create({
      scheme,
      fileNumber,
      clientName,
      address,
      country,
      city,
      state,
      pincode,
      corporateScheme,
      siteExtensions,
      contactPerson,
      designation,
      contactNumber,
      email,
      name,
      naceCodeRev1,
      naceCodeRev2,
      remoteLocationAddress,
      usiCode,
      manpower,
      auditcompletionDate,
      auditors,
      auditStartDate,
      auditEndDate,
      scope,
      exclusions,
      developedBy: userId,
      transferApprovedSMMT,
      typeofAudit,
      modeofAudit,
      remoteAuditAuthorizationWithICTApproved,
      roleInAudit,
      memberOfTheAuditTeamInvoled,
      waiverTakenTeamComposition,
      waiverTakenDelayedAudit,
      smmtWaiverNo,
      noOfAOC,
      noOfMajorNcs,
      noOfMinorNcs,
      manpowerReportByClient,
      manpowerReportInCR,
      isThereAnyChnagesForManDays,
      internalAndIATFWitnessDetails,
      anyOtherInformationAsApporpriate,
      quoationAvailableInIBMAs,
      quoationAvailableInIBMAsDate,
      letterOfConfomance,
      orderAcceptance,
      orderAcceptanceDate,
      PrepareByName: fullName,
      PrepareByDate,
      revNo,
      Details,
      date: Date.now(),
      revisionApprovedBy,
      iatfCertificateNo,
      iqrsCertificateNo,
      issueDate,
      expiryDate,
      clientUnderSuspension,
      SuspendedDate,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllAuditorAllocations = async (req, res) => {
  try {
    const data = await AuditorAllocation.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAuditorAllocationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, remarks, comments } = req.body;
    const { userId, role, fullName } = req.existUser;

    if (role !== "AAF(Approval)") {
      return res.status(403).json({
        message: "Only Accreditation Controller can review, accept, or reject auditor allocation.",
      });
    }

    if (!["Review", "Accept", "Reject", "Pending"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const allocation = await AuditorAllocation.findByPk(id);
    if (!allocation) {
      return res.status(404).json({ message: "Record not found" });
    }

    allocation.approvedBy = userId;
    allocation.approvedByName = fullName;
    allocation.status = status;
    allocation.remarks = remarks || allocation.remarks;
    allocation.comments = comments || allocation.comments;
    await allocation.save();

    res.status(200).json({ message: "Status updated successfully", data: allocation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAuditorAllocationById = async (req, res) => {
  try {
    const data = await AuditorAllocation.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAuditorAllocation = async (req, res) => {
  try {
    const { userId } = req.existUser;
    const { id } = req.params;

    // Extract fields to update
    const updateFields = { ...req.body, developedBy: userId };

    const [updated] = await AuditorAllocation.update(updateFields, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ message: 'Record not found' });
    }

    const updatedRecord = await AuditorAllocation.findByPk(id);

    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAuditorAllocation = async (req, res) => {
  try {
    const deleted = await AuditorAllocation.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};