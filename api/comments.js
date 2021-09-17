const express = require("express");

const { getComments, getComment } = require("../controllers/comments");

const api = express.Router();

api.route("/").get(getComments);

api.route("/:id").get(getComment);

module.exports = api;
