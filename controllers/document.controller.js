const Document = require("../models/document.model");
const makeId = require("../utils/makeId");

exports.addDocument = async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, file_link, author_id } = req.body;
    const document = new Document();
    document.document_id = makeId(7);
    document.title = title;
    document.file_link = file_link;
    document.author_id = author_id;
    document.createdAt = new Date();
    await document.save();
    return res.status(200).json({
      status: "success",
      message: "document created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getDocument = async (req, res, next) => {
  try {
    const document_id = req.params.documentId;
    const document = await Document.findOne({ document_id: document_id });
    return res.status(200).json({
      status: "success",
      message: "document details fetched successfully",
      data: document,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllDocuments = async (req, res, next) => {
  try {
    const document = await Document.find();
    return res.status(200).json({
      status: "success",
      message: "documents fetched successfully",
      data: document,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateDocument = async (req, res, next) => {
  try {
    const { title, file_link, author_id, document_id } = req.body;
    const document = await Document.findOne({ document_id: document_id });
    document.title = title;
    document.file_link = file_link;
    document.author_id = author_id;
    await document.save();
    return res.status(200).json({
      status: "success",
      message: "document details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteDocument = async (req, res, next) => {
  try {
    const { document_id } = req.body;
    await Document.deleteOne({ document_id: document_id });
    return res.status(200).json({
      status: "success",
      message: "document deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
