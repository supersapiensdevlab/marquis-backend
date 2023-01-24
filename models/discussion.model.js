const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = Schema({
  discussion_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  author_id: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    required: true,
    default: [],
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Discussion = mongoose.model("Discussion", discussionSchema);
module.exports = Discussion;
