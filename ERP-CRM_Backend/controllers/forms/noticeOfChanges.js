import NoticeOfChanges from "../../models/forms/noticeOfChanges.js";

export const create = async (req, res) => {
    try {

        const { auditorAllocationId } = req.body;

        const existAuditorAllocation = await AuditorAllocation.findByPk(auditorAllocationId)

        if (!existAuditorAllocation) {
            return res.status(404).json({
                success: false,
                message: 'Auditor allocation not found',
            })
        }

        const noticeOfChanges = await NoticeOfChanges.create({
            ...req.body,
            createdBy: userId,
        });

        return res.status(201).json({
            success: true,
            data: noticeOfChanges
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating Notice of Changes',
            error: error.message
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const noticeOfChanges = await NoticeOfChanges.findAll();
        return res.status(200).json({
            success: true,
            data: noticeOfChanges
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching Notice of Changes records',
            error: error.message
        });
    }
};

export const getSingle = async (req, res) => {
    try {
        const { id } = req.params;
        const noticeOfChanges = await NoticeOfChanges.findByPk(id);

        if (!noticeOfChanges) {
            return res.status(404).json({
                success: false,
                message: 'Notice of Changes record not found'
            });
        }

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

export const getSingleByAaf = async (req, res) => {
    try {
        const { id } = req.params;
        const auditorAllocationId = id;
        const noticeOfChanges = await NoticeOfChanges.findOne({ where: { auditorAllocationId } });
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

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await NoticeOfChanges.update(req.body, {
            where: { id: id }
        });

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'Notice of Changes record not found'
            });
        }

        const updatedRecord = await NoticeOfChanges.findByPk(id);
        return res.status(200).json({
            success: true,
            message: 'Notice of Changes updated successfully',
            data: updatedRecord
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error updating Notice of Changes record',
            error: error.message
        });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await NoticeOfChanges.destroy({
            where: { id: id }
        });

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'Notice of Changes record not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Notice of Changes record deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting Notice of Changes record',
            error: error.message
        });
    }
};

