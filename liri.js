// variables/npm installs/keys

var request = require("request");
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var arg = process.argv[2];
var input = process.argv.slice(3).join(" ");

// This is the liriBot function that houses the other functions
function liriBot() {
    if (arg === "spotify-this-song"){
        console.log("");
        searchSpotify(input);
    } else if (arg === "concert-this"){
        console.log(input);
        searchSpotify(input);
    }  else if (arg === "movie-this"){
        console.log("");
        searchMovie(input);
    }  else if (arg === "do-what-it-says"){
        console.log("");
        doIt(input);
    }
};


// run liriBot
liriBot();


// spotify search function 

function searchSpotify (song) {
    spotify.search({ type: 'track', query: song, limit: "1" }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        // console log all the items from the api
      console.log("================================================================")
      console.log("Artist: " + data.tracks.items[0].artists[0].name); 
      console.log("")
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("")
      console.log("Preview Song: " + data.tracks.items[0].preview_url);
      console.log("")
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("================================================================")
     
      
      });
}
