// everything required:
const fs = require("fs");
// this will create the unique id's for each note made
const { v4: uuidv4 } = require("uuid");
const app = require("express").Router();

// The following API routes should be created:
// GET /api/notes - Should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", function (req, res) {
  fs.readFile(__dirname + "/../db/db.json", "utf8", function (err, data) {
    res.send(JSON.parse(data));
    console.log(data);
  });
});
// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post("/api/notes", function (req, res) {
  //  this creates the note, and tells the program the note is the ID and need the body from the html
  let note = {
    id: uuidv4(),
    ...req.body,
  };
  //   this will read the file and add it to the db.json,
  fs.readFile(__dirname + "/../db/db.json", "utf8", function (err, data) {
    const notes = JSON.parse(data);
    notes.push(note);
    const stData = JSON.stringify(notes, null, 2);
    // this writes the note to the db
    fs.writeFile(__dirname + "/../db/db.json", stData, function () {
      res.json(note);
    });
  });
});
// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
app.delete("/api/notes/:id", async function (req, res) {
  try {
    const { id } = req.params;
    // this deals with promises
    const data = await fs.promises.readFile(
      __dirname + "/../db/db.json",
      "utf8"
    );
    let notes = JSON.parse(data);
    notes = notes.filter((note) => note.id !== id);
    const stData = JSON.stringify(notes, null, 2);
    // deals with the promises
    await fs.promises.writeFile(__dirname + "/../db/db.json", stData);
    res.json(true);
  } catch (err) {
    //   error code in case things go wrong
    res.status(500).end();
  }
});
module.exports = app;
