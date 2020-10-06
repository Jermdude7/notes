const express = require("express");
const logger = require("morgan");
const fs = require("fs")
const app = express();
const PORT = 5050;
const notes= [
  {      
    id: "",
    notesTitle: "",
    notesText:"",
  }
];
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
//GET - /api/tables
// View all tables
app.get("/api/notes", function(req, res){
  res.json(tables);
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});







