import InternalWitness from '../../models/forms/internalWitness.js';

export const createInternalWitness = async (req, res) => {
    try {

        const { auditorAllocationId } = req.body;

        const existAuditorAllocation = await AuditorAllocation.findByPk(auditorAllocationId)

        if (!existAuditorAllocation) {
            return res.status(404).json({
                success: false,
                message: 'Auditor allocation not found',
            })
        }

        const internalWitness = await InternalWitness.create({
            ...req.body,
            createdBy: userId,
        });

        res.status(201).json({
            success: true,
            data: internalWitness
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const updateInternalWitness = async (req, res) => {
    try {
        const { id } = req.params;
        const internalWitness = await InternalWitness.findByPk(id);

        if (!internalWitness) {
            return res.status(404).json({
                success: false,
                message: 'Internal witness record not found'
            });
        }

        await internalWitness.update(req.body);

        res.status(200).json({
            success: true,
            data: internalWitness
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteInternalWitness = async (req, res) => {
    try {
        const { id } = req.params;
        const internalWitness = await InternalWitness.findByPk(id);

        if (!internalWitness) {
            return res.status(404).json({
                success: false,
                message: 'Internal witness record not found'
            });
        }

        await internalWitness.destroy();

        res.status(200).json({
            success: true,
            message: 'Internal witness record deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllInternalWitnesses = async (req, res) => {
    try {
        const internalWitnesses = await InternalWitness.findAll();
        res.status(200).json({
            success: true,
            data: internalWitnesses
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getInternalWitnessById = async (req, res) => {
    try {
        const { id } = req.params;
        const internalWitness = await InternalWitness.findByPk(id);

        if (!internalWitness) {
            return res.status(404).json({
                success: false,
                message: 'Internal witness record not found'
            });
        }

        res.status(200).json({
            success: true,
            data: internalWitness
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


export const getSingleByAaf = async (req, res) => {
    try {
        const { id } = req.params;
        const auditorAllocationId = id;
        const noticeOfChanges = await InternalWitness.findOne({ where: { auditorAllocationId } });
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
