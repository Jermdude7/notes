// Node Modules
const fs = require("express");
const logger = require("morgan");

const app = express();
const PORT = 8080;

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(logger("dev"));

app.get("/",function (req,res){

res.sendFile(__dirname +"/public/index.html");
});

// GET - /api/notes
// View all notes
app.get("/api/notes", function (req,res){
    fs.readFile(__dirname + "/db/db.json", function (err,data){
// read from my db.json file
// send data
res.json(JSON.parse(data));
    });
});
