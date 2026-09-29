import AuditorAllocation from "../../models/auditor/auditorAllocation.js";
import IATFDocumentReview from "../../models/forms/IATFDocumentReview.js";


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

        const iatfDocumentReview = await IATFDocumentReview.create({
            ...req.body,
            createdBy: userId,
        });


        return res.status(201).json({
            success: true,
            data: iatfDocumentReview
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Document Review',
        })
    }
}


export const get = async (req, res) => {
    try {
        const iatfDocumentReview = await IATFDocumentReview.findAll()
        return res.status(200).json({
            success: true,
            data: iatfDocumentReview
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Document Review',
        })
    }
}



export const getSingle = async (req, res) => {
    try {
        const { id } = req.params;
        const iatfDocumentReview = await IATFDocumentReview.findByPk(id);
        return res.status(201).json({
            success: true,
            data: iatfDocumentReview
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Document Review',
        })
    }
}


export const updateIATFDocument = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedIatfDocumentReview = await IATFDocumentReview.update(req.body, {
            where: {
                id: id
            }
        })

        if (!updatedIatfDocumentReview) {
            return res.status(404).json({
                success: false,
                message: 'IATF Document Review not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'IATF Document Review updated successfully',
            data: updatedIatfDocumentReview
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Document Review',
        })
    }
}


export const deleteIATFDocument = async (req, res) => {
    try {
        const { id } = req.body;
        const iatfDocumentReview = await IATFDocumentReview.findByPk(id);
        return res.status(201).json({
            success: true,
            data: iatfDocumentReview
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating IATF Document Review',
        })
    }
}