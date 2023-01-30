const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailyhelpSchema = Schema({
  dailyhelp_id: {
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
  hours: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  author_id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Dailyhelp = mongoose.model("Dailyhelp", dailyhelpSchema);
module.exports = Dailyhelp;
