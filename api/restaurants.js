const express = require("express");

const { getRestaurants } = require("../controllers/restaurants");

const api = express.Router();

api.route("/").get(getRestaurants);

module.exports = api;
