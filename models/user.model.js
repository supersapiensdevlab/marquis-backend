const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  profile_image: {
    type: String,
  },
  flat_no: {
    type: Number,
    required: true,
  },
  wing: {
    type: String,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  society_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
