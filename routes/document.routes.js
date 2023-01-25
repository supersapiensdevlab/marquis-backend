const express = require("express");
const document = require("../controllers/document.controller");

const router = express.Router();
router.post("/addDocument", document.addDocument);
router.get("/getDocument/:documentId", document.getDocument);
router.get("/getAllDocuments", document.getAllDocuments);
router.post("/updateDocument", document.updateDocument);
router.post("/deleteDocument", document.deleteDocument);

module.exports = router;
