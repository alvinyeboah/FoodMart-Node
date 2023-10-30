const express = require("express");
const app = express();
const port = 6969;
const fs = require("fs");
app.use(express.static("src"));
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.get("/", (req, res) => res.sendFile(__dirname + "/src/index.html"));

app.listen(port, () => {
  console.log(port);
});
