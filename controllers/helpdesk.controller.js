const Helpdesk = require("../models/helpdesk.model");
const makeId = require("../utils/makeId");

exports.addHelpDeskQuery = async (req, res, next) => {
  try {
    console.log(req.body);
    const { description, image, author_id, category, priority, status, type } =
      req.body;
    const helpdesk = new Helpdesk();
    helpdesk.helpdesk_id = makeId(7);
    helpdesk.description = description;
    helpdesk.image = image;
    helpdesk.author_id = author_id;
    helpdesk.category = category;
    helpdesk.priority = priority;
    helpdesk.status = status;
    helpdesk.type = type;
    helpdesk.createdAt = new Date();
    await helpdesk.save();
    return res.status(200).json({
      status: "success",
      message: "help desk query created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getHelpDeskQuery = async (req, res, next) => {
  try {
    const helpdesk_id = req.params.helpdeskId;
    const helpdesk = await Helpdesk.findOne({ helpdesk_id: helpdesk_id });
    return res.status(200).json({
      status: "success",
      message: "help desk details fetched successfully",
      data: helpdesk,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllHelpDeskQueries = async (req, res, next) => {
  try {
    const helpdesk = await Helpdesk.find();
    return res.status(200).json({
      status: "success",
      message: "help desk details fetched successfully",
      data: helpdesk,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateHelpDeskQuery = async (req, res, next) => {
  try {
    const {
      description,
      image,
      author_id,
      category,
      priority,
      status,
      type,
      helpdesk_id,
    } = req.body;
    const helpdesk = await Helpdesk.findOne({ helpdesk_id: helpdesk_id });
    helpdesk.description = description;
    helpdesk.image = image;
    helpdesk.author_id = author_id;
    helpdesk.category = category;
    helpdesk.priority = priority;
    helpdesk.status = status;
    helpdesk.type = type;
    await helpdesk.save();
    return res.status(200).json({
      status: "success",
      message: "help desk details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteHelpDeskQuery = async (req, res, next) => {
  try {
    const { helpdesk_id } = req.body;
    await Helpdesk.deleteOne({ helpdesk_id: helpdesk_id });
    return res.status(200).json({
      status: "success",
      message: "help desk query deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
