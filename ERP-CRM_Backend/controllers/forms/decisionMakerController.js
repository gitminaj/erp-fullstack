import DecisionMaker from "../../models/forms/decisionMaker.js";

// Create a new DecisionMaker record
export const createDecisionMaker = async (req, res) => {
    try {
        const newDecisionMaker = await DecisionMaker.create(req.body);
        res.status(201).json({ success: true, data: newDecisionMaker });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating record", error });
    }
};

// Get all DecisionMaker records
export const getAllDecisionMakers = async (req, res) => {
    try {
        const decisionMakers = await DecisionMaker.findAll();
        res.status(200).json({ success: true, data: decisionMakers });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching records", error });
    }
};

// Get a single DecisionMaker record by ID
export const getDecisionMakerById = async (req, res) => {
    try {
        const { id } = req.params;
        const decisionMaker = await DecisionMaker.findByPk(id);
        if (!decisionMaker) {
            return res.status(404).json({ success: false, message: "Record not found" });
        }
        res.status(200).json({ success: true, data: decisionMaker });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching record", error });
    }
};

// Update a DecisionMaker record by ID
export const updateDecisionMaker = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await DecisionMaker.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ success: false, message: "Record not found" });
        }
        res.status(200).json({ success: true, message: "Record updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating record", error });
    }
};

// Delete a DecisionMaker record by ID
export const deleteDecisionMaker = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await DecisionMaker.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Record not found" });
        }
        res.status(200).json({ success: true, message: "Record deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting record", error });
    }
};
