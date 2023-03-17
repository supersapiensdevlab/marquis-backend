const express = require("express");
const user = require("./user.routes");
const activity = require("./activity.routes");
const discussion = require("./discussion.routes");
const amenity = require("./amenity.routes");
const society = require("./society.routes");
const helpdesk = require("./helpdesk.routes");
const dailyhelp = require("./dailyhelp.routes");
const document = require("./document.routes");
const invite = require("./invite.routes");
const notice = require("./notice.routes");
const email = require("./email.routes");
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
  {
    path: "/helpdesk",
    route: helpdesk,
  },
  {
    path: "/amenity",
    route: amenity,
  },
  {
    path: "/invite",
    route: invite,
  },
  {
    path: "/document",
    route: document,
  },
  {
    path: "/society",
    route: society,
  },
  {
    path: "/dailyhelp",
    route: dailyhelp,
  },
  {
    path: "/email",
    route: email,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
