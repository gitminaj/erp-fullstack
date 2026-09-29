import AuditorType from "../../models/auditor/auditorType.js";
import AuditReport from "../../models/certificate/auditReport.js";

// Create a new AuditReport
export const createAuditReport = async (req, res) => {
    try {

        const { userId } = req.existUser;

        const existAuditType = await AuditorType.findOne({
            where: {
                name: existAuditType
            }
        })

        if (!existAuditType) {
            return res.status(404).json({ message: "Invalid Auditor Type" });
        }

        const auditReport = await AuditReport.create({
            ...req.body,
            createdBy: userId
        });
        res.status(201).json({ message: "Audit Report created successfully", auditReport });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Audit Report", error });
    }
};

// Get all AuditReports
export const getAllAuditReports = async (req, res) => {
    try {
        const auditReports = await AuditReport.findAll();
        res.status(200).json(auditReports);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch Audit Reports", error });
    }
};

// Get a single AuditReport by ID
export const getAuditReportById = async (req, res) => {
    try {
        const { id } = req.params;
        const auditReport = await AuditReport.findByPk(id);
        if (!auditReport) {
            return res.status(404).json({ message: "Audit Report not found" });
        }
        res.status(200).json(auditReport);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch Audit Report", error });
    }
};

// Update an AuditReport
export const updateAuditReport = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await AuditReport.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: "Audit Report not found" });
        }
        const updatedAuditReport = await AuditReport.findByPk(id);
        res.status(200).json({ message: "Audit Report updated successfully", updatedAuditReport });
    } catch (error) {
        res.status(500).json({ message: "Failed to update Audit Report", error });
    }
};

// Delete an AuditReport
export const deleteAuditReport = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await AuditReport.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: "Audit Report not found" });
        }
        res.status(200).json({ message: "Audit Report deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete Audit Report", error });
    }
};
