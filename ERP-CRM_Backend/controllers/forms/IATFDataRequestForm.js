import AuditorAllocation from "../../models/auditor/auditorAllocation.js";
import IATFDataRequestForm from "../../models/forms/IATFDataRequestForm.js";

export const create = async (req, res) => {
    try {

        const { userId } = req.existUser
        const { auditorAllocationId } = req.body;

        const existAuditorAllocation = await AuditorAllocation.findByPk(auditorAllocationId)

        if (!existAuditorAllocation) {
            return res.status(404).json({
                success: false,
                message: 'Auditor allocation not found',
            })
        }

        const iatfDataRequest = await IATFDataRequestForm.create({
            ...req.body,
            createdBy: userId,
        });


        return res.status(201).json({
            success: true,
            data: iatfDataRequest
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Data request',
        })
    }
}


export const get = async (req, res) => {
    try {
        const iatfDataRequest = await IATFDataRequestForm.findAll()
        return res.status(200).json({
            success: true,
            data: iatfDataRequest
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Data Request',
        })
    }
}



export const getSingle = async (req, res) => {
    try {
        const { id } = req.params;
        const iatfDataRequest = await IATFDataRequestForm.findByPk(id);
        return res.status(201).json({
            success: true,
            data: iatfDataRequest
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Data Request',
        })
    }
}


export const updateIATFDocument = async (req, res) => {
    try {
        const { id } = req.params;

        const iatfDataRequest = await IATFDataRequestForm.update(req.body, {
            where: {
                id: id
            }
        })

        if (!iatfDataRequest) {
            return res.status(404).json({
                success: false,
                message: 'IATF  Data Request not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'IATF  Data Request updated successfully',
            data: iatfDataRequest
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF  Data Request',
        })
    }
}


export const deleteIATFDocument = async (req, res) => {
    try {
        const { id } = req.body;
        const iatfDataRequest = await IATFDataRequestForm.findByPk(id);
        return res.status(201).json({
            success: true,
            data: iatfDataRequest
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Data Request',
        })
    }
}