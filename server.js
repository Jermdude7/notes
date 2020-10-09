var express = require("express");
// needing express
var app = express();
// this lets node know we are making an app using an app
var PORT = process.env.PORT || 8080;
// this creates the port using the express logic
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
// this will require the use of the routes we make later
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
// this will tell our node to listen for the app
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
