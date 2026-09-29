import { Master } from "../models/master.js";

export const createMaster = async (req, res) => {
  try {
    const { role } = req.existUser;
    const {
      employeeForm,
      employeeTo,
      auditManDays,
      auditmanDaysBeforeRoundingOff,
    } = req.body;

    if (role !== "Administrator") {
      return res.status(403).json({
        message: "Only Administrator can create and update the data.",
      });
    }

    if (
      !employeeForm ||
      !employeeTo ||
      !auditManDays ||
      !auditmanDaysBeforeRoundingOff
    ) {
      return res.status(200).json({
        success: false,
        message: "All fields are required ",
      });
    }

    const master = await Master.create({
      employeeForm,
      employeeTo,
      auditManDays,
      auditmanDaysBeforeRoundingOff,
    });

    res.status(201).json({
      success: true,
      data: master,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllMasters = async (req, res) => {
  try {
    const masters = await Master.findAll();
    res.status(200).json(masters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMasterById = async (req, res) => {
  try {
    const { id } = req.params;
    const master = await Master.findByPk(id);
    if (!master) {
      return res.status(404).json({ error: "Master not found" });
    }
    res.status(200).json(master);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMaster = async (req, res) => {
  try {
    const { role } = req.existUser;

    if (role !== "Administrator") {
      return res.status(403).json({
        message: "Only Administrator can create and update the data.",
      });
    }

    const [updated] = await Master.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Master not found" });
    }
    const updatedMaster = await Master.findByPk(req.params.id);
    res.status(200).json(updatedMaster);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMaster = async (req, res) => {
  try {
    const deleted = await Master.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Master not found" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
