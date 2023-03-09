const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inviteSchema = Schema({
  invite_id: {
    type: String,
    required: true,
  },
  invitee: {
    type: String,
    required: true,
  },
  invitation_date: {
    type: Date,
    required: true,
  },
  invitation_time: {
    type: String,
    required: true,
  },
  invitation_code:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Invite = mongoose.model("Invite", inviteSchema);
module.exports = Invite;
