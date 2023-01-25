const express = require("express");
const amenity = require("../controllers/amenity.controller");

const router = express.Router();
router.post("/addAmenity", amenity.addAmenity);
router.get("/getAmenity/:amenityId", amenity.getAmenity);
router.get("/getAllAmenities", amenity.getAllAmenities);
router.post("/updateAmenity", amenity.updateAmenity);
router.post("/deleteAmenity", amenity.deleteAmenity);

module.exports = router;
