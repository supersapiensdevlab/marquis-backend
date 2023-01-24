const Activity = require("../models/activity.model");
const makeId = require("../utils/makeId");

exports.addActivity = async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      name,
      title,
      image,
      access_details,
      allowed_by,
      visitor_contact,
      objection,
    } = req.body;
    const activity = new Activity();
    activity.activity_id = makeId(7);
    activity.title = title;
    activity.name = name;
    activity.image = image;
    activity.access_details = access_details;
    activity.allowed_by = allowed_by;
    activity.visitor_contact = visitor_contact;
    activity.objection = objection;
    activity.createdAt = new Date();
    await activity.save();
    return res.status(200).json({
      status: "success",
      message: "activity created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getActivity = async (req, res, next) => {
  try {
    const activity_id = req.params.activityId;
    const activity = await Activity.findOne({ activity_id: activity_id });
    return res.status(200).json({
      status: "success",
      message: "activity details fetched successfully",
      data: activity,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllActivities = async (req, res, next) => {
  try {
    const activity = await Activity.find();
    return res.status(200).json({
      status: "success",
      message: "activities fetched successfully",
      data: activity,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateActivity = async (req, res, next) => {
  try {
    const {
      name,
      title,
      image,
      access_details,
      allowed_by,
      visitor_contact,
      objection,
      activity_id,
    } = req.body;
    const activity = await Activity.findOne({ activity_id: activity_id });
    activity.title = title;
    activity.name = name;
    activity.image = image;
    activity.access_details = access_details;
    activity.allowed_by = allowed_by;
    activity.visitor_contact = visitor_contact;
    activity.objection = objection;
    await activity.save();
    return res.status(200).json({
      status: "success",
      message: "activity details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteActivity = async (req, res, next) => {
  try {
    const { activity_id } = req.body;
    await Activity.deleteOne({ activity_id: activity_id });
    return res.status(200).json({
      status: "success",
      message: "activity deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
