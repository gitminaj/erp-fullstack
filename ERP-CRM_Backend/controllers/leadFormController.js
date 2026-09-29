import LeadForm from "../models/leadForm.js";
import { Lead } from "../models/lead.js";
import FormFile from "../models/form.js";
import { mailSender } from "../lib/mailSender.js";
import { emailPasswordMail } from "../lib/template/emailPasswordMail.js";
import { generateRandomString } from "../models/leadForm.js";
import User from "../models/user.js";
import { setPermissionsBasedOnRole } from "../lib/permission.js";

export const getLeadForms = async (req, res) => {
  try {
    const leadForms = await FormFile.findAll();
    return res.status(200).json({
      success: true,
      data: leadForms,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Lead forms not found",
    });
  }
};

export const createLeadForm = async (req, res) => {
  try {

    const { userId } = req.existUser;

    const { leadId, email, form } = req.body;

    const existLead = await Lead.findByPk(leadId);
    if (!existLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    const existBD = await User.findByPk(userId)
    if (!existBD) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      })
    }


    const existForms = await FormFile.findOne({
      where: {
        name: form,
      },
    });

    if (!existForms) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    const clientRoleName = "Client";
    const permissions = setPermissionsBasedOnRole(clientRoleName);

    const generatedPassword = generateRandomString(8);
    const newLeadForm = await LeadForm.create({
      leadId,
      email,
      password: generatedPassword,
      form,
      roleName: clientRoleName,
      permissions,
      createdBy: userId
    });

    try {
      const emailResponse = await mailSender(
        email,
        "Dear client, here are your Email and Password",
        emailPasswordMail(email, generatedPassword)
      );

      console.log("Email sent successfully:", emailResponse);
    } catch (error) {
      console.error("Error occurred while sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email",
        error: error.message,
      });
    }

    res.status(201).json({
      success: true,
      data: newLeadForm,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllLeadForms = async (req, res) => {
  try {
    const leadForms = await LeadForm.findAll();
    res.status(200).json(leadForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLeadFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const leadForm = await LeadForm.findByPk(id);
    if (!leadForm) {
      return res.status(404).json({ message: "LeadForm not found" });
    }
    res.status(200).json(leadForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLeadFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, form } = req.body;
    const leadForm = await LeadForm.findByPk(id);
    if (!leadForm) {
      return res.status(404).json({ message: "LeadForm not found" });
    }
    leadForm.email = email;
    leadForm.password = password;
    leadForm.form = form;
    await leadForm.save();
    res.status(200).json(leadForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteLeadFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const leadForm = await LeadForm.findByPk(id);
    if (!leadForm) {
      return res.status(404).json({ message: "LeadForm not found" });
    }
    await leadForm.destroy();
    res.status(204).json({ message: "LeadForm deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
