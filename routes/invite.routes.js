const express = require("express");
const invite = require("../controllers/invite.controller");

const router = express.Router();
router.post("/addInvite", invite.addInvite);
router.get("/getInvite/:inviteId", invite.getInvite);
router.get("/getAllInvites", invite.getAllInvites);
router.post("/updateInvite", invite.updateInvite);
router.post("/deleteInvite", invite.deleteInvite);

module.exports = router;
