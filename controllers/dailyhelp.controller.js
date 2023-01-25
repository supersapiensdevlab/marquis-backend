const Dailyhelp = require("../models/dailyhelp.model");
const makeId = require("../utils/makeId");

exports.addDailyHelp = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, image, hours, contact, type, author_id } = req.body;
    const dailyhelp = new Dailyhelp();
    dailyhelp.dailyhelp_id = makeId(7);
    dailyhelp.name = name;
    dailyhelp.image = image;
    dailyhelp.hours = hours;
    dailyhelp.contact = contact;
    dailyhelp.type = type;
    dailyhelp.author_id = author_id;
    dailyhelp.createdAt = new Date();
    await dailyhelp.save();
    return res.status(200).json({
      status: "success",
      message: "daily help created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getDailyHelp = async (req, res, next) => {
  try {
    const dailyhelp_id = req.params.dailyhelpId;
    const dailyhelp = await Dailyhelp.findOne({ dailyhelp_id: dailyhelp_id });
    return res.status(200).json({
      status: "success",
      message: "daily help details fetched successfully",
      data: dailyhelp,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllDailyHelps = async (req, res, next) => {
  try {
    const dailyhelp = await Dailyhelp.find();
    return res.status(200).json({
      status: "success",
      message: "daily helps fetched successfully",
      data: dailyhelp,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateDailyHelp = async (req, res, next) => {
  try {
    const { name, image, hours, contact, type, author_id, dailyhelp_id } =
      req.body;
    const dailyhelp = await Dailyhelp.findOne({ dailyhelp_id: dailyhelp_id });
    dailyhelp.name = name;
    dailyhelp.image = image;
    dailyhelp.hours = hours;
    dailyhelp.contact = contact;
    dailyhelp.type = type;
    dailyhelp.author_id = author_id;
    await dailyhelp.save();
    return res.status(200).json({
      status: "success",
      message: "daily help details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteDailyHelp = async (req, res, next) => {
  try {
    const { dailyhelp_id } = req.body;
    await Dailyhelp.deleteOne({ dailyhelp_id: dailyhelp_id });
    return res.status(200).json({
      status: "success",
      message: "daily help deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
