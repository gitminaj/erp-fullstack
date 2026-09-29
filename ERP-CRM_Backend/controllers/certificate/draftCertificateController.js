import DraftCertificate from "../../models/certificate/draftCertificate.js";

export const createDraftCertificate = async (req, res) => {
    try {
        const { userId } = req.existUser
        const draftCertificate = await DraftCertificate.create({
            ...req.body,
            createdBy: userId
        });
        res.status(201).json(draftCertificate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllDraftCertificates = async (req, res) => {
    try {
        const draftCertificates = await DraftCertificate.findAll();
        res.status(200).json(draftCertificates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDraftCertificateById = async (req, res) => {
    try {
        const draftCertificate = await DraftCertificate.findByPk(req.params.id);
        if (!draftCertificate) {
            return res.status(404).json({ error: "Draft Certificate not found" });
        }
        res.status(200).json(draftCertificate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateDraftCertificate = async (req, res) => {
    try {
        const draftCertificate = await DraftCertificate.findByPk(req.params.id);
        if (!draftCertificate) {
            return res.status(404).json({ error: "Draft Certificate not found" });
        }
        await draftCertificate.update(req.body);
        res.status(200).json(draftCertificate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteDraftCertificate = async (req, res) => {
    try {
        const draftCertificate = await DraftCertificate.findByPk(req.params.id);
        if (!draftCertificate) {
            return res.status(404).json({ error: "Draft Certificate not found" });
        }
        await draftCertificate.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
