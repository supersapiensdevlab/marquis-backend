const express = require("express");
const notice = require("../controllers/notice.controller");

const router = express.Router();
router.post("/addNotice", notice.addNotice);
router.get("/getNotice/:noticeId", notice.getNotice);
router.post("/updateNotice", notice.updateNotice);
router.post("/deleteNotice", notice.deleteNotice);

module.exports = router;
