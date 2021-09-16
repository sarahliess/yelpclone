const express = require("express");

const { getCities } = require("../controllers/cities");

const api = express.Router();

api.route("/").get(getCities);

module.exports = api;
