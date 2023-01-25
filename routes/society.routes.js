const express = require("express");
const society = require("../controllers/society.controller");

const router = express.Router();
router.post("/addSociety", society.addSociety);
router.get("/getSociety/:societyId", society.getSociety);
router.get("/getAllSocieties", society.getAllSocieties);
router.post("/updateSociety", society.updateSociety);
router.post("/deleteSociety", society.deleteSociety);

module.exports = router;
