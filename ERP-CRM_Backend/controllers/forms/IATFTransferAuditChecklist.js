import IATFTransferAuditChecklist from "../../models/forms/IATFTransferAuditChecklist.js";

// Create a new record
export const createChecklist = async (req, res) => {
    try {

        const { auditorAllocationId } = req.body;

        const existAuditorAllocation = await AuditorAllocation.findByPk(auditorAllocationId)

        if (!existAuditorAllocation) {
            return res.status(404).json({
                success: false,
                message: 'Auditor allocation not found',
            })
        }

        const checklist = await IATFTransferAuditChecklist.create({
            ...req.body,
            createdBy: userId,
        });

        res.status(201).json({ message: "Checklist created successfully", checklist });
    } catch (error) {
        res.status(500).json({ message: "Error creating checklist", error });
    }
};

// Get all records
export const getAllChecklists = async (req, res) => {
    try {
        const checklists = await IATFTransferAuditChecklist.findAll();
        res.status(200).json(checklists);
    } catch (error) {
        res.status(500).json({ message: "Error fetching checklists", error });
    }
};

// Get a single record by ID
export const getChecklistById = async (req, res) => {
    try {
        const { id } = req.params;
        const checklist = await IATFTransferAuditChecklist.findByPk(id);
        if (!checklist) {
            return res.status(404).json({ message: "Checklist not found" });
        }
        res.status(200).json(checklist);
    } catch (error) {
        res.status(500).json({ message: "Error fetching checklist", error });
    }
};


export const getSingleByAaf = async (req, res) => {
    try {
        const { id } = req.params;
        const auditorAllocationId = id;
        const noticeOfChanges = await IATFTransferAuditChecklist.findOne({ where: { auditorAllocationId } });
        if (!noticeOfChanges) {
            return res.status(404).json({
                success: false,
                message: 'Notice of Changes record not found'
            });
        }
        console.log(noticeOfChanges)
        return res.status(200).json({
            success: true,
            data: noticeOfChanges
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching Notice of Changes record',
            error: error.message
        });
    }
};


// Update a record by ID
export const updateChecklist = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await IATFTransferAuditChecklist.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: "Checklist not found or not updated" });
        }
        res.status(200).json({ message: "Checklist updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating checklist", error });
    }
};

// Delete a record by ID
export const deleteChecklist = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await IATFTransferAuditChecklist.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: "Checklist not found or not deleted" });
        }
        res.status(200).json({ message: "Checklist deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting checklist", error });
    }
};
