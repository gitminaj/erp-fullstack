import NewDraf from "../../models/certificate/newDraf.js";

export const createNewDraf = async (req, res) => {
    try {
        const { userId } = req.existUser
        const newDraf = await NewDraf.create({
            ...req.body,
            createdBy: userId,
        });
        res.status(201).json(newDraf);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllNewDrafs = async (req, res) => {
    try {
        const newDrafs = await NewDraf.findAll();
        res.status(200).json(newDrafs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNewDrafById = async (req, res) => {
    try {
        const { id } = req.params;
        const newDraf = await NewDraf.findByPk(id);
        if (!newDraf) {
            return res.status(404).json({ error: "NewDraf not found" });
        }
        res.status(200).json(newDraf);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateNewDraf = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await NewDraf.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ error: "NewDraf not found" });
        }
        const updatedNewDraf = await NewDraf.findByPk(id);
        res.status(200).json(updatedNewDraf);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a record by ID
export const deleteNewDraf = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await NewDraf.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: "NewDraf not found" });
        }
        res.status(200).json({ message: "NewDraf deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
