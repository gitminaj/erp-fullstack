import CertificationTransfer from "../models/certificationTransfer.js"


export const createCertificationTransfer = async (req, res) => {
  try {
    const {
      organizationName,
      certificationBody,
      standardStatus,
      contractDetailsCB,
      scopeActivity,
      certifiedActivitiesScope,
      certificateIssuedByAccreditedBody,
      validCertificateCopy,
      certificationCycleStage,
      ncrStatus,
      auditPlanReview,
      siteTransferStatus,
      siteSupportLocationCovered,
      complaintsReceivedActionTaken,
      regulatoryEngagement,
      transferReason,
      previousCertificationBodyCommunication,
      clientVisitVerification,
      bodyCommunication,
      preTransferInfoSatisfactory,
      recommendation,
      markDisplayVerified,
      preparedBy,
      preparedSignature,
      approvedBy,
      approvedSignature,
    } = req.body; // Take the individual fields from the request body

    const certificationTransfer = await CertificationTransfer.create({
      organizationName,
      certificationBody,
      standardStatus,
      contractDetailsCB,
      scopeActivity,
      certifiedActivitiesScope,
      certificateIssuedByAccreditedBody,
      validCertificateCopy,
      certificationCycleStage,
      ncrStatus,
      auditPlanReview,
      siteTransferStatus,
      siteSupportLocationCovered,
      complaintsReceivedActionTaken,
      regulatoryEngagement,
      transferReason,
      previousCertificationBodyCommunication,
      clientVisitVerification,
      bodyCommunication,
      preTransferInfoSatisfactory,
      recommendation,
      markDisplayVerified,
      preparedBy,
      preparedSignature,
      approvedBy,
      approvedSignature,
    });

    // Return the newly created record
    res.status(201).json({
      success: true,
      message: "Certification Transfer created successfully",
      certificationTransfer,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: "Failed to create certification transfer",
      error: error.message,
    });
  }
};


export const getAllCertificationTransfers = async (req, res) => {
  try {
    const certificationTransfers = await CertificationTransfer.findAll();
    res.status(200).json(certificationTransfers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve certification transfers", details: error });
  }
};


export const getCertificationTransferById = async (req, res) => {
  try {
    const { id } = req.params;
    const certificationTransfer = await CertificationTransfer.findByPk(id);
    
    if (!certificationTransfer) {
      return res.status(404).json({ error: "Certification transfer not found" });
    }
    
    res.status(200).json(certificationTransfer);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve certification transfer", details: error });
  }
};


export const updateCertificationTransfer = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await CertificationTransfer.update(req.body, {
      where: { id: id },
    });

    if (!updated) {
      return res.status(404).json({ error: "Certification transfer not found" });
    }

    const updatedCertificationTransfer = await CertificationTransfer.findByPk(id);
    res.status(200).json(updatedCertificationTransfer);
  } catch (error) {
    res.status(500).json({ error: "Failed to update certification transfer", details: error });
  }
};

export const deleteCertificationTransfer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CertificationTransfer.destroy({
      where: { id: id },
    });

    if (!deleted) {
      return res.status(404).json({ error: "Certification transfer not found" });
    }

    res.status(204).json({ message: "Certification transfer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete certification transfer", details: error });
  }
};
