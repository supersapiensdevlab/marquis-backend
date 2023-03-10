const mongoose = require("mongoose");
const Schema = mongoose.Schema; //

const societySchema = Schema({
  society_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  committee_members: {
    type: Array,
    required: true,
    default: [
      //array of objects
      {
        member_name: {
          type: String,
        },
        contact: {
          type: String,
        },
        designation: {
          type: String,
        },
      },
    ],
  },
  emergency_numbers: {
    type: Array,
    required: true,
    default: [
      //array of objects
      {
        emergency_name: {
          type: String,
        },
        contact: {
          type: String,
        },
      },
    ],
  },
  wings: {
    type: Array,
    required: true,
    default: [
      {
        name: {
          type: String,
        },
        floors: {
          type: Number,
        },
        flat_count_per_floor: {
          type: Number,
        },
      },
    ],
  },
  amenities: {
    type: Array,
    default: [], //array of strings
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Society = mongoose.model("Society", societySchema);
module.exports = Society;
