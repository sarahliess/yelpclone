const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [100, "max 100 chars are allowed for the name"],
  },
  image: {
    type: String,
    maxlength: [1000, "max 1000 chars are allowed for the name"],
  },
  comment: {
    type: String,
    required: [true, "Please add a comment"],
    maxlength: [1000, "max 1000 chars are allowed for the comment"],
  },
  recommend: {
    type: Boolean,
    required: [true, "Please add a name"],
  },
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant",
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
