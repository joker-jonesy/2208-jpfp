const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.use(cors());
app.use(volleyball);
app.use(express.urlencoded({ extended: false }));

//this is where some things should go
app.use("/api", require("../server/api/campuses"));
app.use("/api", require("../server/api/students"));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
