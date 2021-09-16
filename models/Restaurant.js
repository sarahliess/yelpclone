const mongoose = require("mongoose");

const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [100, "max 100 chars are allowed for the name"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [700, "max 700 chars are allowed for the ingredients"],
  },
  img: {
    type: String,
    required: [true, "Please add an image"],
    maxlength: [200, "max 200 chars are allowed for the image"],
  },
  city: {
    type: String,
    required: [true, "Please add a city"],
    maxlength: [100, "max 100 chars are allowed for the city"],
  },
  tag: {
    type: String,
    required: [true, "Please add a tag"],
    maxlength: [50, "max 50 chars are allowed for the tag"],
  },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
