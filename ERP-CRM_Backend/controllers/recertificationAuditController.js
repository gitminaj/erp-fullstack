import { RecertificationAudit } from "../models/master.js";

export const createRecertificationAudit = async (req, res) => {
  try {
    const { role } = req.existUser;
    const { employeeForm, employeeTo, auditManDays } = req.body;

    if (role !== "Administrator") {
      return res.status(403).json({
        message: "Only Administrator can create and update the data.",
      });
    }

    if (!employeeForm || !employeeTo || !auditManDays) {
      return res.status(200).json({
        success: false,
        message: "All fields are required ",
      });
    }

    const recetification = await RecertificationAudit.create({
      employeeForm,
      employeeTo,
      auditManDays,
    });

    res.status(201).json({
      success: true,
      data: recetification,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllRecertificationAudits = async (req, res) => {
  try {
    const recertAudits = await RecertificationAudit.findAll();
    res.status(200).json(recertAudits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecertificationAuditById = async (req, res) => {
  try {
    const recertAudit = await RecertificationAudit.findByPk(req.params.id);
    if (!recertAudit) {
      return res.status(404).json({ error: "RecertificationAudit not found" });
    }
    res.status(200).json(recertAudit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRecertificationAudit = async (req, res) => {
  try {
    const [updated] = await RecertificationAudit.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "RecertificationAudit not found" });
    }
    const updatedRecertAudit = await RecertificationAudit.findByPk(
      req.params.id
    );
    res.status(200).json(updatedRecertAudit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRecertificationAudit = async (req, res) => {
  try {
    const deleted = await RecertificationAudit.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "RecertificationAudit not found" });
    }
    res.status(204).json({
        success:true,
        message:"Data deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
