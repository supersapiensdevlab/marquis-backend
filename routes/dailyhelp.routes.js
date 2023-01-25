const express = require("express");
const dailyhelp = require("../controllers/dailyhelp.controller");

const router = express.Router();
router.post("/addDailyHelp", dailyhelp.addDailyHelp);
router.get("/getDailyHelp/:dailyhelpId", dailyhelp.getDailyHelp);
router.get("/getAllDailyHelps", dailyhelp.getAllDailyHelps);
router.post("/updateDailyHelp", dailyhelp.updateDailyHelp);
router.post("/deleteDailyHelp", dailyhelp.deleteDailyHelp);

module.exports = router;
