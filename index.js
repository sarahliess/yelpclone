require("dotenv").config();
require("colors");
const express = require("express");

const server = express();
const cors = require("cors");
server.use(cors());

const connectDB = require("./dbinit.js");
const restaurants = require("./api/restaurants");
const cities = require("./api/cities");
const PORT = process.env.PORT || 5000;

connectDB();

server.use(express.json());
server.get("/", (req, res) => res.send("Hello World!"));
server.use("/restaurants", restaurants);
server.use("/cities", cities);
server.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
