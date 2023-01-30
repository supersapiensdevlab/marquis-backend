const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = Schema({
  activity_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  access_details: {
    type: String,
    required: true,
  },
  allowed_by: {
    type: String,
    required: true,
  },
  visitor_contact: {
    type: Number,
    required: true,
  },
  objection: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
