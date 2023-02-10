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
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
  },
  flat_no: {
    type: String,
    required: true,
  },
  wing_name: {
    type: String,
    required: true,
  },
  floor: {
    type: String,
    required: true,
  },
  society_id: {
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
  household: {
    type: Array,
    default: [
      {
        name: {
          type: String,
        },
        image: {
          type: String,
        },
        type: {
          type: String,
        },
        contact: {
          type: String,
        },
      },
    ],
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
