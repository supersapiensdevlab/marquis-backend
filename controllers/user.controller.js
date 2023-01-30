const User = require("../models/user.model");
const makeId = require("../utils/makeId");
const fetchSocietyAddress = require("../utils/fetchSocietyAddress");

exports.addUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      name,
      email_id,
      contact,
      profile_image,
      flat_no,
      wing,
      floor,
      society_id,
      type,
    } = req.body;
    const user = new User();
    user.user_id = makeId(7);
    user.name = name;
    user.email_id = email_id;
    user.contact = contact;
    user.profile_image = profile_image;
    user.flat_no = flat_no;
    user.wing = wing;
    user.floor = floor;
    user.society_id = society_id;
    user.address = `Flat no.${flat_no}, ${wing} wing, `.concat(
      (await fetchSocietyAddress(society_id)) != null
        ? await fetchSocietyAddress(society_id)
        : ""
    );
    user.type = type;
    user.createdAt = new Date();
    await user.save();
    return res.status(200).json({
      status: "success",
      message: "user created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user_id = req.params.userId;
    const user = await User.findOne({ user_id: user_id });
    return res.status(200).json({
      status: "success",
      message: "user details fetched successfully",
      data: user,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    return res.status(200).json({
      status: "success",
      message: "users fetched successfully",
      data: user,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const {
      name,
      email_id,
      contact,
      profile_image,
      flat_no,
      wing,
      floor,
      society_id,
      address,
      type,
      user_id,
    } = req.body;
    const user = await User.findOne({ user_id: user_id });
    user.name = name;
    user.email_id = email_id;
    user.contact = contact;
    user.profile_image = profile_image;
    user.flat_no = flat_no;
    user.wing = wing;
    user.floor = floor;
    user.society_id = society_id;
    user.address = address;
    user.type = type;
    await user.save();
    return res.status(200).json({
      status: "success",
      message: "user details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { user_id } = req.body;
    await User.deleteOne({ user_id: user_id });
    return res.status(200).json({
      status: "success",
      message: "user deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
