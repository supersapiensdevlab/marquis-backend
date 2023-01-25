const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = Schema({
  document_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  file_link: {
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

const Document = mongoose.model("Document", documentSchema);
module.exports = Document;
