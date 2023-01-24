const Discussion = require("../models/discussion.model");
const makeId = require("../utils/makeId");

exports.addDiscussion = async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, image, description, author_id } = req.body;
    const discussion = new Discussion();
    discussion.discussion_id = makeId(7);
    discussion.title = title;
    discussion.image = image;
    discussion.description = description;
    discussion.author_id = author_id;
    discussion.comments = [];
    discussion.createdAt = new Date();
    await discussion.save();
    return res.status(200).json({
      status: "success",
      message: "discussion created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getDiscussion = async (req, res, next) => {
  try {
    const discussion_id = req.params.discussionId;
    const discussion = await Discussion.findOne({
      discussion_id: discussion_id,
    });
    return res.status(200).json({
      status: "success",
      message: "discussion details fetched successfully",
      data: discussion,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllDiscussions = async (req, res, next) => {
  try {
    const discussion = await Discussion.find();
    return res.status(200).json({
      status: "success",
      message: "discussions fetched successfully",
      data: discussion,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateDiscussion = async (req, res, next) => {
  try {
    const { title, image, description, author_id, discussion_id, comments } =
      req.body;
    const discussion = await Discussion.findOne({
      discussion_id: discussion_id,
    });
    discussion.title = title;
    discussion.image = image;
    discussion.description = description;
    discussion.author_id = author_id;
    discussion.comments = comments;
    await discussion.save();
    return res.status(200).json({
      status: "success",
      message: "discussion details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteDiscussion = async (req, res, next) => {
  try {
    const { discussion_id } = req.body;
    await Discussion.deleteOne({ discussion_id: discussion_id });
    return res.status(200).json({
      status: "success",
      message: "discussion deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
