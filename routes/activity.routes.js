const express = require("express");
const activity = require("../controllers/activity.controller");

const router = express.Router();
router.post("/addActivity", activity.addActivity);
router.get("/getActivity/:activityId", activity.getActivity);
router.get("/getAllActivities", activity.getAllActivities);
router.post("/updateActivity", activity.updateActivity);
router.post("/deleteActivity", activity.deleteActivity);

module.exports = router;
