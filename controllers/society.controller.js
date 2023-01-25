const Society = require("../models/society.model");
const makeId = require("../utils/makeId");

exports.addSociety = async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      name,
      address,
      image,
      committee_members,
      emergency_numbers,
      wings,
      amenities,
    } = req.body;
    const society = new Society();
    society.society_id = makeId(7);
    society.address = address;
    society.name = name;
    society.image = image;
    society.committee_members = committee_members;
    society.emergency_numbers = emergency_numbers;
    society.wings = wings;
    society.amenities = amenities;
    society.createdAt = new Date();
    await society.save();
    return res.status(200).json({
      status: "success",
      message: "society created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getSociety = async (req, res, next) => {
  try {
    const society_id = req.params.societyId;
    const society = await Society.findOne({ society_id: society_id });
    return res.status(200).json({
      status: "success",
      message: "society details fetched successfully",
      data: society,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllSocieties = async (req, res, next) => {
  try {
    const society = await Society.find();
    return res.status(200).json({
      status: "success",
      message: "societies fetched successfully",
      data: society,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateSociety = async (req, res, next) => {
  try {
    const {
      name,
      address,
      image,
      committee_members,
      emergency_numbers,
      wings,
      amenities,
      society_id,
    } = req.body;
    const society = await Society.findOne({ society_id: society_id });
    society.address = address;
    society.name = name;
    society.image = image;
    society.committee_members = committee_members;
    society.emergency_numbers = emergency_numbers;
    society.wings = wings;
    society.amenities = amenities;
    await society.save();
    return res.status(200).json({
      status: "success",
      message: "society details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteSociety = async (req, res, next) => {
  try {
    const { society_id } = req.body;
    await Society.deleteOne({ society_id: society_id });
    return res.status(200).json({
      status: "success",
      message: "society deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
