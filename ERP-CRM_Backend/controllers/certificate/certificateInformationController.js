import CertificateInformation from "../../models/certificate/certificateInformation.js";

export const createCertificateInformation = async (req, res) => {
    try {
        const { userId } = req.existUser
        const certificateInformation = await CertificateInformation.create({
            ...req.body,
            createdBy: userId
        });
        res.status(201).json(certificateInformation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllCertificateInformation = async (req, res) => {
    try {
        const certificateInformation = await CertificateInformation.findAll();
        res.status(200).json(certificateInformation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCertificateInformationById = async (req, res) => {
    try {
        const certificateInformation = await CertificateInformation.findByPk(req.params.id);
        if (!certificateInformation) {
            return res.status(404).json({ error: "Certificate Information not found" });
        }
        res.status(200).json(certificateInformation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCertificateInformation = async (req, res) => {
    try {
        const certificateInformation = await CertificateInformation.findByPk(req.params.id);
        if (!certificateInformation) {
            return res.status(404).json({ error: "Certificate Information not found" });
        }
        await certificateInformation.update(req.body);
        res.status(200).json(certificateInformation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteCertificateInformation = async (req, res) => {
    try {
        const certificateInformation = await CertificateInformation.findByPk(req.params.id);
        if (!certificateInformation) {
            return res.status(404).json({ error: "Certificate Information not found" });
        }
        await certificateInformation.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
