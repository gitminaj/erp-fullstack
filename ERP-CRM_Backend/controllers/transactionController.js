import Transaction from "../models/transaction.js";
import { Lead } from "../models/lead.js";
import Notification from "../models/notifications.js";

export const createTransaction = async (req, res) => {
  try {
    const { leadId, approvalBy } = req.body;

    const existLead = await Lead.findByPk(leadId);

    if (!existLead) {
      return res.status(404).json({
        error: "Lead not found",
      });
    }

    const poUpload = req.files.poUpload ? req.files.poUpload[0].path : null;

    const invoiceUpload = req.files.invoiceUpload
      ? req.files.invoiceUpload[0].path
      : null;

    const transaction = await Transaction.create({
      leadId,
      poUpload,
      invoiceUpload,
      approvalBy,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPo = async (req, res) => {
  try {
    const po = await Transaction.findAll({
      attributes: ["id", "poUpload", "createBy", "updatedBy"],
    });
    return res.status(200).json({
      success: true,
      data: po,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getInvoice = async (req, res) => {
  try {
    const invoice = await Transaction.findAll({
      attributes: ["id", "invoiceUpload", "createBy", "updatedBy"],
    });

    return res.status(200).json({
      success: true,
      data: invoice,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [
        {
          model: Lead,
          attributes: [
            "id",
            "leadTypeId",
            "leadStatusId",
            "sourceOfLeadId",
            "companyName",
            "firstName",
            "lastName",
          ],
        },
      ],
    });

    let notifications = [];
    for (const transaction of transactions) {
      if (transaction.approvalBy === false) {
        const leadId = transaction.Lead.id;
        const notificatiotype = "Lead Conversion";
        const dscription = `Lead has been converted.`;

        const notification = await Notification.create({
          leadId,
          notificatiotype,
          dscription,
        });

        notifications.push(notification);
      }
    }

    res.status(200).json({
      success: true,
      transactions,
      notifications,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id, {
      include: [
        {
          model: Lead,
          attributes: [
            "id",
            "leadTypeId",
            "leadStatusId",
            "sourceOfLeadId",
            "companyName",
          ],
        },
      ],
    });

    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { poUpload, invoiceUpload, approvalBy, updatedBy } = req.body;

    const transaction = await Transaction.findByPk(id);

    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    await transaction.update({
      poUpload,
      invoiceUpload,
      approvalBy,
      updatedBy,
    });

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);

    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    await transaction.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

