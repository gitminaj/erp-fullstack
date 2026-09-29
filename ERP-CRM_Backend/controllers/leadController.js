import { Lead, LeadType, LeadStatus, SourceOFLead } from "../models/lead.js";
import User from "../models/user.js";
import Role from "../models/role.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import LeadQualification from "../models/leadQualification.js";
import LeadForm from "../models/leadForm.js";

export const getLeadStatus = async (req, res) => {
  try {
    const leadStatus = await LeadStatus.findAll();
    return res.status(200).json({ leadStatus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getLeadType = async (req, res) => {
  try {
    const leadType = await LeadType.findAll();
    return res.status(200).json({ leadType });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getSourceOfLead = async (req, res) => {
  try {
    const sourceLead = await SourceOFLead.findAll();
    return res.status(200).json({ sourceLead });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getLeadQualification = async (req, res) => {
  try {
    const leadQualification = await LeadQualification.findAll();
    return res.status(200).json({ leadQualification });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const customerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const customer = await LeadForm.findOne({ where: { email } });

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer does not exist",
      });
    }

    const existPassword = await LeadForm.findOne({
      where:{
        password:customer.password
      }
    })

    if (existPassword) {
      const payload = {
        customerId: customer.id,
        customerEmail: customer.email,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      const option = {
        httpOnly: true,
        secure: true,
      };

      return res.cookie("token", token, option).status(200).json({
        success: true,
        message: "Customer Login successfull",
        customer,
        token,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Incrroct password ",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Customer login failed",
    });
  }
};

export const leadHistory = async (req, res) => {
  try {
    const leadHistory = await Lead.findAll({
      attributes: ["firstName", "lastName", "createdBy"],
    });
    res.status(200).json({ leadHistory });
  } catch (error) {
    console.error("Error retrieving leads:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createLead = async (req, res) => {
  const bdName = req.existUser.userId;

  const {
    leadTypeId,
    leadStatusId,
    sourceOfLeadId,
    requirementFor,
    leadQualification,
    companyName,
    firstName,
    lastName,
    contactNumber,
    designation,
    country,
    State,
    city,
    remarks,
    contactPerson,
  } = req.body;

  try {
    const user = await User.findByPk(contactPerson);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not exist",
      });
    }

    const existLeadQualification = await LeadQualification.findOne({
      where: {
        name: leadQualification,
      },
    });

    if (!existLeadQualification) {
      return res.status(404).json({
        success: false,
        message: "LeadQualification not found",
      });
    }

    const lead = await Lead.create({
      leadTypeId,
      leadStatusId,
      sourceOfLeadId,
      bdName,
      companyName,
      firstName,
      lastName,
      requirementFor,
      leadQualification,
      contactNumber,
      designation,
      country,
      State,
      city,
      remarks,
      contactPerson,
    });

    res.status(201).json({ lead });
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll({
      include: [
        LeadType,
        LeadStatus,
        SourceOFLead,
        {
          model: User,
          associationType: "assignTo",
          attributes: ["id", "firstName", "lastName", "roleName"],
        },
      ],
    });
    res.status(200).json({ leads });
  } catch (error) {
    console.error("Error retrieving leads:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json({ roles });
  } catch (error) {
    console.error("Error retrieving leads:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getLeadById = async (req, res) => {
  const { id } = req.params;

  try {
    const lead = await Lead.findByPk(id, {
      include: [LeadType, LeadStatus, SourceOFLead],
    });

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ lead });
  } catch (error) {
    console.error("Error retrieving lead:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateLead = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the lead by its ID
    const lead = await Lead.findByPk(id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    // If leadQualification is being updated, check its existence
    if (req.body.leadQualification) {
      const existLeadQualification = await LeadQualification.findOne({
        where: {
          name: req.body.leadQualification,
        },
      });

      if (!existLeadQualification) {
        return res.status(404).json({
          success: false,
          message: "LeadQualification not found",
        });
      }
    }

    // Update only fields provided in req.body
    await lead.update(req.body);

    return res.status(200).json({ lead });
  } catch (error) {
    console.error("Error updating lead:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteLead = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Lead.destroy({
      where: { id },
    });

    if (deleted) {
      return res.status(204).json({
        message: "Lead deleted successfully",
      });
    } else {
      res.status(404).json({ message: "Lead not found" });
    }
  } catch (error) {
    console.error("Error deleting lead:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
