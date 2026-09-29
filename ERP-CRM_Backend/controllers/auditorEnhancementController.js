import AuditorEnhancement from "../models/auditor/auditorEnhancement.js";
import AuditorFileType from "../models/auditor/auditorFileType.js";
import AuditorStandards from "../models/auditor/auditorStandards.js";
import User from "../models/user.js";


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

        const auditorEnhancement = await AuditorEnhancement.findByPk(id);
        if (!auditorEnhancement) {
            return res.status(404).json({ message: "AuditorUpgrade not found" });
        }

        auditorEnhancement.approvedByController = userId;
        auditorEnhancement.status = status;
        auditorEnhancement.remarksController = remarks || null;
        auditorEnhancement.commentsController = comments || null;
        await auditorEnhancement.save();

        res.status(200).json({ message: "Status updated successfully", data: auditorEnhancement });
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

        const auditorEnhancement = await AuditorEnhancement.findByPk(id);
        if (!auditorEnhancement) {
            return res.status(404).json({ message: "AuditorUpgrade not found" });
        }

        auditorEnhancement.approvedByHead = userId;
        auditorEnhancement.status = status;
        auditorEnhancement.remarksHead = remarks || null;
        auditorEnhancement.commentsHead = comments || null;
        await auditorEnhancement.save();

        res.status(200).json({ message: "Status updated successfully", data: auditorEnhancement });
    } catch (error) {
        console.error("Error updating status by Accreditation Head:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const createAuditorEnhancement = async (req, res) => {
    try {
        const {
            selectAuditorName,
            scheme,
            selectFileType,
            enhancementCompetencyRemarks,
        } = req.body;

        const { role } = req.existUser;

        if (role !== "Audit Planner") {
            return res.status(403).json({
                message: "Only Audit Planner can create Auditor Enhancement.",
            });
        }

        if (!selectFileType) {
            return res.status(400).json({
                success: false,
                message: "selectFileType is required.",
            });
        }

        const existSelectFileType = await AuditorFileType.findOne({
            where: {
                name: selectFileType,
            },
        });

        if (!existSelectFileType) {
            return res.status(404).json({
                success: false,
                message: "selectFileType not found!",
            });
        }

        const existScheme = await AuditorStandards.findOne({
            where: {
                name: scheme,
            },
        });

        if (!existScheme) {
            return res.status(404).json({
                success: false,
                message: "scheme not found!",
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

        const browseFileTypes = req.files?.browseFileType ? req.files.browseFileType.map(file => file.path) : [];


        const auditorEnhancement = await AuditorEnhancement.create({
            selectAuditorName,
            selectAuditor: auditor.id,
            scheme,
            selectFileType,
            browseFileType: browseFileTypes,
            enhancementCompetencyRemarks,
        });

        return res.status(201).json({
            success: true,
            data: auditorEnhancement,
        });
    } catch (error) {
        console.error("Error creating AuditorEnhancement:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllAuditorEnhancements = async (req, res) => {
    try {
        const enhancements = await AuditorEnhancement.findAll();
        res.status(200).json(enhancements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAuditorEnhancementById = async (req, res) => {
    try {
        const { id } = req.params;
        const enhancement = await AuditorEnhancement.findByPk(id);
        if (!enhancement) {
            return res.status(404).json({ message: "Auditor Enhancement not found" });
        }
        res.status(200).json(enhancement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateAuditorEnhancement = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            selectAuditorName,
            scheme,
            selectFileType,
            enhancementCompetencyRemarks,
        } = req.body;


        console.log("Request Body:", req.body);

        const { role } = req.existUser;

        if (role !== "Audit Planner") {
            return res.status(403).json({
                message: "Only Audit Planner can update Auditor Enhancement.",
            });
        }

        if (!selectAuditorName || typeof selectAuditorName !== "string") {
            return res.status(400).json({
                success: false,
                message: "Invalid or missing selectAuditorName"
            });
        }

        const enhancement = await AuditorEnhancement.findByPk(id);

        if (!enhancement) {
            return res.status(404).json({ message: "Auditor Enhancement not found" });
        }

        // const [firstName, lastName] = selectAuditorName.split(" ");
        // const auditor = await User.findOne({ where: { firstName, lastName } });

        const auditor = await User.findOne({
            where: {
                firstName: selectAuditorName.split(" ")[0],
                lastName: selectAuditorName.split(" ")[1],
            },
        });


        if (!auditor) {
            return res.status(404).json({ message: "Auditor not found" });
        }

        const parsedBrowseFileType = Array.isArray(browseFileType)
            ? browseFileType
            : JSON.parse(browseFileType || "[]");

        await enhancement.update({
            selectAuditorName,
            selectAuditor: auditor.id,
            scheme,
            selectFileType,
            browseFileType: parsedBrowseFileType,
            enhancementCompetencyRemarks,
        });

        return res.status(200).json({
            success: true,
            data: enhancement,
        });
    } catch (error) {
        console.error("Error updating AuditorEnhancement:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteAuditorEnhancement = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await AuditorEnhancement.destroy({
            where: { id },
        });
        if (!deleted) {
            return res.status(404).json({ message: "Auditor Enhancement not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
