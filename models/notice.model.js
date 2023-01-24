const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticeSchema = Schema({
  notice_id: {
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
  description: {
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

const Notice = mongoose.model("Notice", noticeSchema);
module.exports = Notice;
