const Notice = require("../models/notice.model");
const makeId = require("../utils/makeId");

exports.addNotice = async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, name, image, description, author_id } = req.body;
    const notice = new Notice();
    notice.notice_id = makeId(7);
    notice.title = title;
    notice.name = name;
    notice.image = image;
    notice.description = description;
    notice.author_id = author_id;
    notice.createdAt = new Date();
    await notice.save();
    return res.status(200).json({
      status: "success",
      message: "notice created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getNotice = async (req, res, next) => {
  try {
    const notice_id = req.params.noticeId;
    const notice = await Notice.findOne({
      notice_id: notice_id,
    });
    return res.status(200).json({
      status: "success",
      message: "notice details fetched successfully",
      data: notice,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateNotice = async (req, res, next) => {
  try {
    const { title, name, image, description, author_id, notice_id } = req.body;
    const notice = await Notice.findOne({ notice_id: notice_id });
    notice.title = title;
    notice.name = name;
    notice.image = image;
    notice.description = description;
    notice.author_id = author_id;
    await notice.save();
    return res.status(200).json({
      status: "success",
      message: "notice details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteNotice = async (req, res, next) => {
  try {
    const { notice_id } = req.body;
    await Notice.deleteOne({ notice_id: notice_id });
    return res.status(200).json({
      status: "success",
      message: "notice deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
