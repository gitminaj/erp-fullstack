import AuditorApplyFor from "../models/auditor/auditorApplyFor.js";
import AuditorEnhancementScheme from "../models/auditor/auditorEnhancementScheme.js";
import AuditorFileType from "../models/auditor/auditorFileType.js";
import AuditorStandards from "../models/auditor/auditorStandards.js";
import User from "../models/user.js";


export const createAuditorEnhancementScheme = async (req, res) => {
    try {

        const { role } = req.existUser;

        if (role !== "Audit Planner") {
            return res.status(403).json({
                message: "Only Audit Planner can create this data.",
            });
        }

        const {
            auditorEnhancementSchemeNo,
            selectAuditor,
            scheme,
            enhancementTo,
            selectFileType,
            enhancementSchemeRemarks,
            status,
        } = req.body;

        const exitScheme = await AuditorStandards.findOne({
            where: {
                name: scheme
            }
        })
        if (!exitScheme) {
            return res.status(404).json({
                success: false,
                message: "scheme not found"
            })
        }


        const existEnhancement = await AuditorApplyFor.findOne({
            where: {
                name: enhancementTo
            }
        })

        if (!existEnhancement) {
            return res.status(404).json({
                success: "false",
                message: "enhancementTo not found"
            })
        }
        const auditor = await User.findOne({
            where: {
                firstName: selectAuditor.split(" ")[0],
                lastName: selectAuditor.split(" ")[1],
            },
        });

        if (!auditor) {
            return res.status(404).json({ message: "Auditor not found" });
        }

        const existSelectFileType = await AuditorFileType.findOne({
            where: {
                name: selectFileType,
            },
        });

        if (!existSelectFileType) {
            return res.status(400).json({
                success: false,
                message: "selectFileType is required.",
            });
        }

        const browseFileTypes = req.files?.browseFileType ? req.files.browseFileType.map(file => file.path) : [];

        const data = await AuditorEnhancementScheme.create({
            auditorEnhancementSchemeNo,
            selectAuditor,
            scheme,
            enhancementTo,
            selectFileType,
            browseFileType: browseFileTypes,
            enhancementSchemeRemarks,
            status,
        });

        res.status(201).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllAuditorEnhancementSchemes = async (req, res) => {
    try {
        const data = await AuditorEnhancementScheme.findAll();
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAuditorEnhancementSchemeById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await AuditorEnhancementScheme.findByPk(id);

        if (!data) {
            return res.status(404).json({ success: false, message: "Not Found" });
        }

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateAuditorEnhancementScheme = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            auditorEnhancementSchemeNo,
            selectAuditor,
            scheme,
            enhancementTo,
            selectFileType,
            browseFileType,
            enhancementSchemeRemarks,
            status,
        } = req.body;

        const [updated] = await AuditorEnhancementScheme.update(
            {
                auditorEnhancementSchemeNo,
                selectAuditor,
                scheme,
                enhancementTo,
                selectFileType,
                browseFileType,
                enhancementSchemeRemarks,
                status,
            },
            { where: { id } }
        );

        if (!updated) {
            return res.status(404).json({ success: false, message: "Not Found" });
        }

        const updatedData = await AuditorEnhancementScheme.findByPk(id);
        res.status(200).json({ success: true, data: updatedData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteAuditorEnhancementScheme = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await AuditorEnhancementScheme.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).json({ success: false, message: "Not Found" });
        }

        res.status(200).json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
