const Invite = require("../models/invite.model");
const makeId = require("../utils/makeId");

exports.addInvite = async (req, res, next) => {
  try {
    console.log(req.body);
    const { invitee, invitation_date, invitation_time } = req.body;
    const invite = new Invite();
    invite.invite_id = makeId(7);
    invite.invitee = invitee;
    invite.invitation_date = invitation_date;
    invite.invitation_time = invitation_time;
    invite.createdAt = new Date();
    await invite.save();
    return res.status(200).json({
      status: "success",
      message: "invite created successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getInvite = async (req, res, next) => {
  try {
    const invite_id = req.params.inviteId;
    const invite = await Invite.findOne({ invite_id: invite_id });
    return res.status(200).json({
      status: "success",
      message: "invite details fetched successfully",
      data: invite,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.getAllInvites = async (req, res, next) => {
  try {
    const invite = await Invite.find();
    return res.status(200).json({
      status: "success",
      message: "invites fetched successfully",
      data: invite,
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.updateInvite = async (req, res, next) => {
  try {
    const { invitee, invitation_date, invite_id, invitation_time } = req.body;
    const invite = await Invite.findOne({ invite_id: invite_id });
    invite.invitee = invitee;
    invite.invitation_date = invitation_date;
    invite.invitation_time = invitation_time;
    await invite.save();
    return res.status(200).json({
      status: "success",
      message: "invite details updated successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};

exports.deleteInvite = async (req, res, next) => {
  try {
    const { invite_id } = req.body;
    await Invite.deleteOne({ invite_id: invite_id });
    return res.status(200).json({
      status: "success",
      message: "invite deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: "failed",
    });
  }
};
