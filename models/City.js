const mongoose = require("mongoose");

const { Schema } = mongoose;

const CitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [100, "max 100 chars are allowed for the name"],
  },
});

module.exports = mongoose.model("City", CitySchema);
