import AuditorUpgrade from "../models/auditor/auditorUpgrade.js";
import AuditorUpgradeCsv from "../models/auditor/auditorUpgradeCsv.js";
import User from "../models/user.js";


export const getAuditors = async (req, res) => {
    try {
        const auditors = await User.findAll({
            where: {
                roleName: 'Auditor',
            },
        });
        if (auditors.length === 0) {
            return res.status(404).json({ message: "No auditors found" });
        }
        res.status(200).json(auditors);
    } catch (error) {
        console.error("Error fetching auditors:", error);
        res.status(500).json({ message: "Failed to fetch auditors" });
    }
};

export const getAuditorUpgradesCsv = async (req, res) => {
    try {
        const auditorUpgrades = await AuditorUpgradeCsv.findAll();
        return res.status(201).json({
            success: true,
            data: auditorUpgrades
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateStatusByAccreditationController = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, remarks, comments } = req.body;
        const { userId, role } = req.existUser;

        if (role !== "Accreditation Controller") {
            return res.status(403).json({
                message: "Only Accreditation Controller can review and reject auditor upgrades data.",
            });
        }

        if (!["Review", "Reject", "Pending"].includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        const auditorUpgrade = await AuditorUpgrade.findByPk(id);
        if (!auditorUpgrade) {
            return res.status(404).json({ message: "AuditorUpgrade not found" });
        }

        auditorUpgrade.approvedByController = userId;
        auditorUpgrade.status = status;
        auditorUpgrade.remarksController = remarks || null;
        auditorUpgrade.commentsController = comments || null;
        await auditorUpgrade.save();

        res.status(200).json({ message: "Status updated successfully", data: auditorUpgrade });
    } catch (error) {
        console.error("Error updating status by Accreditation Controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateStatusByAccreditationHead = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, remarks, comments } = req.body;
        const { id: userId, role } = req.existUser;

        if (role !== "Accreditation Head") {
            return res.status(403).json({
                message: "Only Accreditation Head can approve or reject auditor upgrades data.",
            });
        }

        if (!["Accept", "Reject", "Pending"].includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        const auditorUpgrade = await AuditorUpgrade.findByPk(id);
        if (!auditorUpgrade) {
            return res.status(404).json({ message: "AuditorUpgrade not found" });
        }

        auditorUpgrade.approvedByHead = userId;
        auditorUpgrade.status = status;
        auditorUpgrade.remarksHead = remarks || null;
        auditorUpgrade.commentsHead = comments || null;
        await auditorUpgrade.save();

        res.status(200).json({ message: "Status updated successfully", data: auditorUpgrade });
    } catch (error) {
        console.error("Error updating status by Accreditation Head:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createAuditorUpgrades = async (req, res) => {
    try {
        const {
            selectAuditorName,
            scheme,
            upgradeTo,
            nameOfClient,
            auditStartDate,
            auditEndDate,
            noOfMandays,
            nameOfEvaluator,
            evaluationReport,
            upgradationRemark
        } = req.body;

        const auditLogsFiles = req.files?.auditLogsFile ? req.files.auditLogsFile.map(file => file.path) : [];

        const { role } = req.existUser;
        if (role !== "Audit Planner") {
            return res.status(403).json({
                message: "Only Audit Planner can create upgrade request information.",
            });
        }

        const auditor = await User.findOne({
            where: {
                firstName: selectAuditorName.split(" ")[0],
                lastName: selectAuditorName.split(" ")[1],
            },
        });

        if (!auditor) {
            return res.status(404).json({ message: "Auditor not found" });
        }

        const auditorUpgrade = await AuditorUpgrade.create({
            selectAuditorName,
            selectAuditor: auditor.id,
            scheme,
            upgradeTo,
            nameOfClient,
            auditStartDate,
            auditEndDate,
            noOfMandays,
            nameOfEvaluator,
            auditLogsFile: auditLogsFiles,
            evaluationReport,
            upgradationRemark,
        });

        return res.status(201).json({
            success: true,
            data: auditorUpgrade,
        });
    } catch (error) {
        console.error("Error creating AuditorUpgrade:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAuditorUpgrades = async (req, res) => {
    try {
        const auditorUpgrades = await AuditorUpgrade.findAll();
        return res.status(200).json({
            success: true,
            data: auditorUpgrades
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getSingleAuditorUpgrades = async (req, res) => {
    try {
        const singleAuditorUpgrades = await AuditorUpgrade.findByPk(req.params.id);
        if (!singleAuditorUpgrades) {
            return res
                .status(404)
                .json({ success: false, message: "Auditor not found" });
        }
        res.status(200).json({ success: true, singleAuditorUpgrades });
    } catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error fetching singleAuditorUpgrades", error });
    }
}

export const updateAuditorUpgrade = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            selectAuditor,
            selectAuditorName,
            scheme,
            upgradeTo,
            nameOfClient,
            auditDate,
            noOfMandays,
            nameOfEvaluator,
            evaluationReport,
            upgradationRemark
        } = req.body;

        const auditLogsFiles = req.files?.auditLogsFile ? req.files.auditLogsFile.map(file => file.path) : [];

        const { role } = req.existUser;
        if (role !== "Audit Planner") {
            return res.status(403).json({
                message: "Only Audit Planner can update upgrade request information.",
            });
        }

        const auditorUpgrade = await AuditorUpgrade.findByPk(id);
        if (!auditorUpgrade) {
            return res.status(404).json({ message: "AuditorUpgrade not found" });
        }

        const auditor = await User.findByPk(selectAuditor);
        if (!auditor) {
            return res.status(404).json({ message: "Auditor not found" });
        }

        const auditorName = `${auditor.firstName} ${auditor.lastName}`;

        // Update the fields
        await auditorUpgrade.update({
            selectAuditor: auditor.id,
            scheme,
            upgradeTo,
            nameOfClient,
            selectAuditorName,
            auditDate,
            noOfMandays,
            nameOfEvaluator,
            auditLogsFile: auditLogsFiles,
            evaluationReport,
            upgradationRemark,
            auditorName,
        });

        return res.status(200).json({
            success: true,
            data: auditorUpgrade,
        });
    } catch (error) {
        console.error("Error updating AuditorUpgrade:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteAuditorUpgrade = async (req, res) => {
    try {
        const { id } = req.params;

        const { role } = req.existUser;
        if (role !== "Audit Planner") {
            return res.status(403).json({
                message: "Only Audit Planner can delete upgrade request information.",
            });
        }

        const auditorUpgrade = await AuditorUpgrade.findByPk(id);
        if (!auditorUpgrade) {
            return res.status(404).json({ message: "AuditorUpgrade not found" });
        }

        await auditorUpgrade.destroy();

        return res.status(200).json({
            success: true,
            message: "AuditorUpgrade deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting AuditorUpgrade:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
