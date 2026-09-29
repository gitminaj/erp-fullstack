import ScopeOfCertification from "../../models/forms/scopeofCertification.js";

// Create new scope of certification
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

        const newScope = await ScopeOfCertification.create({
            ...req.body,
            createdBy: userId,
        });

        res.status(201).json({
            success: true,
            data: newScope
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Get all scopes of certification
export const getAll = async (req, res) => {
    try {
        const scopes = await ScopeOfCertification.findAll();
        res.status(200).json({
            success: true,
            data: scopes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Get single scope of certification by ID
export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const scope = await ScopeOfCertification.findByPk(id);

        if (!scope) {
            return res.status(404).json({
                success: false,
                error: 'Scope of certification not found'
            });
        }

        res.status(200).json({
            success: true,
            data: scope
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};


export const getSingleByAaf = async (req, res) => {
    try {
        const { id } = req.params;
        const auditorAllocationId = id;
        const noticeOfChanges = await ScopeOfCertification.findOne({ where: { auditorAllocationId } });
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


// Update scope of certification
export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const scope = await ScopeOfCertification.findByPk(id);

        if (!scope) {
            return res.status(404).json({
                success: false,
                error: 'Scope of certification not found'
            });
        }

        await scope.update(updateData);

        res.status(200).json({
            success: true,
            data: scope
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Delete scope of certification
export const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const scope = await ScopeOfCertification.findByPk(id);

        if (!scope) {
            return res.status(404).json({
                success: false,
                error: 'Scope of certification not found'
            });
        }

        await scope.destroy();

        res.status(200).json({
            success: true,
            message: 'Scope of certification deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

