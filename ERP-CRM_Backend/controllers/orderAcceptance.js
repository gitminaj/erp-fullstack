import User from "../models/user.js";
import LeadForm from "../models/leadForm.js";
import OrderAcceptance from "../models/orderAcceptance.js";

export const createOrderAcceptance = async (req, res) => {
    try {

        const { userId, role } = req.existUser;
        const { standardProduct, scopeOfAssessment, location, letterNo, date, totalOrderValue, nameOfTheOrganization, nameOfRepresentative, signatureDate, irqsofISSPL, irqsName, irqsSignatureDate, assignTo } = req.body;

        if (!standardProduct || !scopeOfAssessment || !location || !letterNo || !date || !totalOrderValue || !nameOfTheOrganization || !nameOfRepresentative || !signatureDate || !irqsofISSPL || !irqsName || !irqsSignatureDate || !assignTo) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }
        if (role !== "Business Development Executive") {
            return res.status(400).json({
                success: false,
                message: "DB does not exist",
            });
        }

        const existUser = await User.findByPk(userId);
        if (!existUser) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }

        const existClient = await LeadForm.findByPk(assignTo);

        if (!existClient) {
            return res.status(404).json({
                success: false,
                message: "client not found",
            });
        }

        const newOrderAcceptance = await OrderAcceptance.create({
            standardProduct,
            scopeOfAssessment,
            location,
            letterNo,
            date,
            totalOrderValue,
            nameOfTheOrganization,
            nameOfRepresentative,
            signatureDate,
            irqsofISSPL,
            irqsName,
            irqsSignatureDate,
            createdBy: userId,
            assignTo
        });


        return res.status(201).json({
            success: true,
            message: "Order Acceptance created successfully",
            data: newOrderAcceptance
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getOrderAcceptance = async (req, res) => {
    try {
        const orderAcceptance = await OrderAcceptance.findAll();
        return res.status(200).json({
            success: true,
            data: orderAcceptance
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getOrderAcceptanceById = async (req, res) => {
    try {
        const { id } = req.params;

        const orderAcceptance = await OrderAcceptance.findByPk(id);

        if (!orderAcceptance) {
            return res.status(404).json({
                success: false,
                message: "Order Acceptance not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: orderAcceptance
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updateOrderAcceptance = async (req, res) => {
    try {
        const { userId, roleName } = req.existUser;
        const { id } = req.params;
        const { standardProduct, scopeOfAssessment, location, letterNo, date, totalOrderValue, nameOfTheOrganization, nameOfRepresentative, signatureDate, irqsofISSPL, irqsName, irqsSignatureDate, assignTo } = req.body;

        if (!standardProduct || !scopeOfAssessment || !location || !letterNo || !date || !totalOrderValue || !nameOfTheOrganization || !nameOfRepresentative || !signatureDate || !irqsofISSPL || !irqsName || !irqsSignatureDate) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        if (roleName !== 'Business Development Executive') {
            return res.status(400).json({
                success: false,
                message: "DB does not exist",
            });
        }

        const existOrderAcceptance = await OrderAcceptance.findOne({
            where: {
                id,
                createdBy: userId
            }
        });

        if (!existOrderAcceptance) {
            return res.status(404).json({
                success: false,
                message: "Order Acceptance not found",
            });
        }

        await OrderAcceptance.update({
            standardProduct,
            scopeOfAssessment,
            location,
            letterNo,
            date,
            totalOrderValue,
            nameOfTheOrganization,
            nameOfRepresentative,
            signatureDate,
            irqsofISSPL,
            irqsName,
            irqsSignatureDate,
            assignTo
        }, {
            where: {
                id
            }
        });

        const orderAcceptance = await OrderAcceptance.findOne({
            where: {
                id,
                createdBy: userId
            }
        });

        return res.status(200).json({
            success: true,
            message: "Order Acceptance updated successfully",
            data: orderAcceptance
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const deleteOrderAcceptance = async (req, res) => {
    try {
        const { userId, roleName } = req.existUser;
        const { id } = req.params;

        if (roleName !== 'Business Development Executive') {
            return res.status(400).json({
                success: false,
                message: "DB does not exist",
            });
        }

        const existOrderAcceptance = await OrderAcceptance.findOne({
            where: {
                id,
                createdBy: userId
            }
        });

        if (!existOrderAcceptance) {
            return res.status(404).json({
                success: false,
                message: "Order Acceptance not found",
            });
        }

        await OrderAcceptance.destroy({
            where: {
                id
            }
        });

        return res.status(200).json({
            success: true,
            message: "Order Acceptance deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


