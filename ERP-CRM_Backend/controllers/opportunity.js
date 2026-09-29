import Opportunity from "../models/opportunity.js";

  export const createOpportunities = async (req, res) => {
  try {
    const opportunity = await Opportunity.create(req.body);
    res.status(201).json(opportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.findAll();
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export const singleOpportunities = async (req, res) => {
  try {
    const opportunity = await Opportunity.findByPk(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ error: "Opportunity not found" });
    }
    res.status(200).json(opportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateOpportunities = async (req, res) => {
  try {
    const opportunity = await Opportunity.findByPk(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ error: "Opportunity not found" });
    }
    await opportunity.update(req.body);
    res.status(200).json(opportunity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOpportunities =  async (req, res) => {
  try {
    const opportunity = await Opportunity.findByPk(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ error: "Opportunity not found" });
    }
    await opportunity.destroy();
    res.status(200).json({ message: "Opportunity deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


