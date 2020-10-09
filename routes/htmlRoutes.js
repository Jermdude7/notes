const { Module } = require("module");
const path = require('path');
const app = require("express").Router();
// GET /notes - Should return the notes.html file.

app.get("/notes", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../public/notes.html"));
});
// GET * - Should return the index.html file
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../public/index.html"));
});
module.exports = app;