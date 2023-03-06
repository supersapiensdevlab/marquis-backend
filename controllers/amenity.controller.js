const Amenity = require("../models/amenity.model");
const makeId = require("../utils/makeId");

exports.addAmenity = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, image, working_hours, society_id } = req.body;
    const amenity = new Amenity();
    amenity.amenity_id = makeId(7);
    amenity.name = name;
    amenity.image = image;
    amenity.society_id = society_id;
    amenity.working_hours = working_hours
      ? working_hours
      : { startTime: null, endTime: null };
    amenity.createdAt = new Date();
    await amenity.save();
    return res.status(200).json({
      status: "success",
      message: "amenity created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAmenity = async (req, res, next) => {
  try {
    const amenity_id = req.params.amenityId;
    const amenity = await Amenity.findOne({ amenity_id: amenity_id });
    return res.status(200).json({
      status: "success",
      message: "amenity details fetched successfully",
      data: amenity,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllAmenities = async (req, res, next) => {
  try {
    const amenity = await Amenity.find();
    return res.status(200).json({
      status: "success",
      message: "amenities fetched successfully",
      data: amenity,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateAmenity = async (req, res, next) => {
  try {
    const { name, image, working_hours, amenity_id, society_id } = req.body;
    const amenity = await Amenity.findOne({ amenity_id: amenity_id });
    amenity.name = name;
    amenity.image = image;
    amenity.society_id = society_id;
    amenity.working_hours = working_hours;
    await amenity.save();
    return res.status(200).json({
      status: "success",
      message: "amenity details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteAmenity = async (req, res, next) => {
  try {
    const { amenity_id } = req.body;
    await Amenity.deleteOne({ amenity_id: amenity_id });
    return res.status(200).json({
      status: "success",
      message: "amenity deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
