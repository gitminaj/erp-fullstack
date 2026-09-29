import Conversation from "../models/conversation.js";
import User from "../models/user.js";
import { Lead } from "../models/lead.js";

export const getAllConversations = async (req, res) => {
  try {
    const conversations = await Conversation.findAll({
      include: [
        {
          model: Lead,
          attributes: ["id", "companyName"],
        },
        {
          model:User,
          attributes:["id","firstName","lastName"]
        }
      ],
    });
    res.status(200).json(conversations);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching conversations", details: error.message });
  }
};

export const getConversationById = async (req, res) => {
  const { id } = req.params;

  try {
    const conversation = await Conversation.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName"],
        },
        {
          model: Lead,
          attributes: ["id", "companyName"],
        },
      ],
    });

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    res.status(200).json(conversation);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching conversation", details: error.message });
  }
};

export const createConversation = async (req, res) => {
  const { userId } = req.existUser;
  const { comment, leadId } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        successs: false,
        message: "user not found",
      });
    }
    const lead = await Lead.findByPk(leadId);

    if (!lead) {
      return res.status(404).json({
        successs: false,
        message: "user not found",
      });
    }

    const newConversation = await Conversation.create({
      comment,
      leadId,
      commentUser: userId,
      createdBy: Date.now(),
    });
    return res.status(202).json({
      successs: true,
      data: newConversation,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateConversation = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const conversation = await Conversation.findByPk(id);

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    conversation.text = text;
    conversation.updatedBy = new Date();

    await conversation.save();

    res.status(200).json(conversation);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating conversation", details: error.message });
  }
};

export const deleteConversation = async (req, res) => {
  const { id } = req.params;

  try {
    const conversation = await Conversation.findByPk(id);

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    await conversation.destroy();

    res.status(204).json({
      successs: true,
      message: "Conversation",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting conversation", details: error.message });
  }
};
