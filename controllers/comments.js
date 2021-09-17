const Comment = require("../models/Comment");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("restaurant");
    console.log(comments);
    res.json({
      success: true,
      data: comments,
      msg: "show all comments",
    });
  } catch (err) {
    console.log(err);
  }
};

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id).populate("restaurant");

    res.json({
      msg: `show comment with id ${id}`,
      success: true,
      data: comment,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getComments,
  getComment,
};
