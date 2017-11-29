/* jshint esnext: true */

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
  "name": "Chandler",
  "photo": "http://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w190.h190.2x.jpg",
  "scores": ["5","1","4","4","5","1","2","5","4","1"]
  },
  {
  "name": "Joe",
  "photo": "https://typeset-beta.imgix.net/uploads/image/2017/8/22/4dbabff7-c8bd-4817-abff-a413fd946e49-joey-tribbiani-pineapple.jpg",
  "scores": ["5","1","4","4","5","1","2","5","4","1"]
  },
  {
  "name": "Ross",
  "photo": "https://vignette2.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg",
  "scores": ["5","1","4","4","5","1","2","5","4","1"]
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});


// Get all characters
app.get("/api/friends", function(req, res) {
  res.json(characters);
});



// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
