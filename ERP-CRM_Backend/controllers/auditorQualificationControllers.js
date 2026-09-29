import AuditorQualification from "../models/auditor/auditorQualification.js";
import Zone from "../models/questionnaire/zone.js";
import AuditorType from "../models/auditor/auditorType.js";
import Role from "../models/role.js";
import { mailSender } from "../lib/mailSender.js";
import { emailPasswordMail } from "../lib/template/emailPasswordMail.js";
import { generateRandomString } from "../models/auditor/auditorQualification.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const auditorQualificationLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const auditor = await AuditorQualification.findOne({ where: { email } });

    if (!auditor) {
      return res.status(404).json({
        success: false,
        message: "Auditor does not exist",
      });
    }

    if (await bcrypt.compare(password, auditor.password)) {
      const payload = {
        auditorId: auditor.id,
        auditorEmail: auditor.email,
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
        message: "Auditor Login successfull",
        auditor,
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
      message: "Auditor login failed",
    });
  }
};

export const getAllAuditorTypes = async (req, res) => {
  try {
    const auditorTypes = await AuditorType.findAll();
    res.status(200).json({ auditorTypes });
  } catch (error) {
    console.error("Error retrieving leads:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getZonalPlannerByZone = async (zone) => {
  try {
    const zonalPlanner = await Role.findOne({
      where: {
        name: zone,
      },
    });

    return zonalPlanner;
  } catch (error) {
    console.error("Error fetching Zonal Planner:", error);
    return null;
  }
};

const sendNotificationToZonalPlanner = async (zone) => {
  const zonalPlanner = await getZonalPlannerByZone(zone);
  if (zonalPlanner) {
    console.log(`Notification sent to Zonal Planner for zone: ${zone}`);
  } else {
    console.log(`No Zonal Planner found for zone: ${zone}`);
  }
};

const getZonalHeadByZone = async (zone) => {
  try {
    const zonalHead = await Role.findOne({
      where: {
        name: zone,
      },
    });

    return zonalHead;
  } catch (error) {
    console.error("Error fetching Zonal Planner:", error);
    return null;
  }
};

const sendNotificationToZonalHead = async (zone) => {
  const zonalHead = await getZonalHeadByZone(zone);
  if (zonalHead) {
    console.log(`Notification sent to Zonal Head for zone: ${zone}`);
  } else {
    console.log(`No Zonal Head found for zone: ${zone}`);
  }
};

export const updateApprovalStatus = async (req, res) => {
  const { id } = req.params;
  const { approvalStatus } = req.body;

  try {
    const { role } = req.existUser;
    if (role !== "Zonal Heads") {
      return res.status(403).json({
        message:
          "Only Zonal Heads can approve or reject auditor qualifications.",
      });
    }

    const auditorQualification = await AuditorQualification.findByPk(id);
    if (!auditorQualification) {
      return res
        .status(404)
        .json({ message: "Auditor qualification not found" });
    }

    auditorQualification.approvalStatus = approvalStatus;
    await auditorQualification.save();
    sendNotificationToZonalPlanner(auditorQualification.zone);

    return res.status(200).json({
      message: `Auditor qualification has been ${approvalStatus.toLowerCase()}.`,
      auditorQualification,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAuditorQualification = async (req, res) => {
  const { userId } = req.existUser;
  const {
    name,
    education,
    zone,
    auditorSelectType,
    mobileNo,
    email,
    scheme,
    remark,
  } = req.body;

  try {
    const { role } = req.existUser;

    if (role !== "Zonal Planner") {
      return res.status(403).json({
        message: "Only Zonal Planner can create Auditor Qualification.",
      });
    }

    const existZone = await Zone.findOne({
      where: {
        name: zone,
      },
    });

    if (!existZone) {
      return res.status(404).json({
        message: "Zone not found",
      });
    }

    const existAuditorType = await AuditorType.findOne({
      where: {
        name: auditorSelectType,
      },
    });

    if (!existAuditorType) {
      return res.status(404).json({
        message: "AuditorType not found",
      });
    }

    const selectCV = req.files?.selectCV ? req.files.selectCV[0].path : null;

    const generatedPassword = generateRandomString(8);

    try {
      const emailResponse = await mailSender(
        email,
        "Dear Auditor, here are your Email and Password",
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

    const newAuditorQualification = await AuditorQualification.create({
      name,
      education,
      zone,
      auditorSelectType,
      mobileNo,
      email,
      password: generatedPassword,
      scheme,
      selectCV,
      remark,
      approvalStatus: "Rejected",
      createdBy: userId,
    });

    sendNotificationToZonalHead(newAuditorQualification.zone);

    return res.status(201).json(newAuditorQualification);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllAuditorQualifications = async (req, res) => {
  try {
    const auditorQualifications = await AuditorQualification.findAll({
      order: [["createdAt", "ASC"]],
    });
    return res.status(200).json(auditorQualifications);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving Auditor Qualifications", error });
  }
};

export const getAuditorQualificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const auditorQualification = await AuditorQualification.findByPk(id);

    if (!auditorQualification) {
      return res
        .status(404)
        .json({ message: "Auditor Qualification not found" });
    }

    return res.status(200).json(auditorQualification);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving Auditor Qualification", error });
  }
};

export const updateAuditorQualification = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      education,
      zone,
      auditorSelectType,
      mobileNo,
      email,
      scheme,
      selectCV,
      remark,
    } = req.body;

    const { role } = req.existUser;

    if (role !== "Zonal Planner") {
      return res.status(403).json({
        message: "Only Zonal Planner can update Auditor Qualification.",
      });
    }

    const auditorQualification = await AuditorQualification.findByPk(id);
    if (!auditorQualification) {
      return res
        .status(404)
        .json({ message: "Auditor Qualification not found" });
    }

    if (auditorQualification.approvalStatus === "Approved") {
      await auditorQualification.update({
        name,
        education,
        zone,
        auditorSelectType,
        mobileNo,
        email,
        scheme,
        selectCV,
        remark,
      });

      return res.status(200).json(auditorQualification);
    } else {
      return res.status(500).json({
        success: false,
        message: "status not approved yet",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating Auditor Qualification", error });
  }
};

export const deleteAuditorQualification = async (req, res) => {
  try {
    const { id } = req.params;
    const auditorQualification = await AuditorQualification.findByPk(id);

    if (!auditorQualification) {
      return res
        .status(404)
        .json({ message: "Auditor Qualification not found" });
    }

    await auditorQualification.destroy();
    return res
      .status(200)
      .json({ message: "Auditor Qualification deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting Auditor Qualification", error });
  }
};
