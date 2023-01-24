const express = require("express");
const user = require("./user.routes");
const activity = require("./activity.routes");
const discussion = require("./discussion.routes");
const notice = require("./notice.routes");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: user,
  },
  {
    path: "/discussion",
    route: discussion,
  },
  {
    path: "/activity",
    route: activity,
  },
  {
    path: "/notice",
    route: notice,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
