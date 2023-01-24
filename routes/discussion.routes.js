const express = require("express");
const discussion = require("../controllers/discussion.controller");

const router = express.Router();
router.post("/addDiscussion", discussion.addDiscussion);
router.get("/getDiscussion/:discussionId", discussion.getDiscussion);
router.post("/updateDiscussion", discussion.updateDiscussion);
router.post("/deleteDiscussion", discussion.deleteDiscussion);

module.exports = router;
