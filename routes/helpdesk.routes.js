const express = require("express");
const helpdesk = require("../controllers/helpdesk.controller");

const router = express.Router();
router.post("/addHelpDeskQuery", helpdesk.addHelpDeskQuery);
router.get("/getHelpDeskQuery/:helpdeskId", helpdesk.getHelpDeskQuery);
router.get("/getAllHelpDeskQueries", helpdesk.getAllHelpDeskQueries);
router.post("/updateHelpDeskQuery", helpdesk.updateHelpDeskQuery);
router.post("/deleteHelpDeskQuery", helpdesk.deleteHelpDeskQuery);

module.exports = router;
