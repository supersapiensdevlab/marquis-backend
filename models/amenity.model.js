const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amenitySchema = Schema({
  amenity_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  working_hours: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Amenity = mongoose.model("Amenity", amenitySchema);
module.exports = Amenity;