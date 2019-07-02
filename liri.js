var request = require("request");
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var arg = process.argv[2];
var input = process.argv.slice(3).join(" ");


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

liriBot();

function searchSpotify (song) {
    spotify.search({ type: 'track', query: 'All the Small Things', limit: "1" }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
}
