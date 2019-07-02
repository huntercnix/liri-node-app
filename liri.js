// variables/npm installs/keys

var request = require("request");
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var arg = process.argv[2];
var input = process.argv.slice(3).join(" ");

// This is the liriBot function that houses the other functions
function liriBot() {
    if (arg === "spotify-this-song"){
        console.log(input);
        searchSpotify(input);
    }   else if (arg === "movie-this"){
        console.log(input);
        searchMovie(input); 
    }   else if (arg === "concert-this"){
        console.log(input);
        searchSpotify(input);
    }   else if (arg === "do-what-it-says"){
        console.log(input);
        doWhatever(input);
    }
};


// run liriBot
liriBot();


// Spotify search function 

function searchSpotify (song) {
    spotify.search({ type: 'track', query: song, limit: "1" }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        // console log all the items from the api
      console.log("================================================================");
      console.log("Spotify Search Results");
      console.log("");
      console.log("Artist: " + data.tracks.items[0].artists[0].name); 
      console.log("");
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("");
      console.log("Preview Song: " + data.tracks.items[0].preview_url);
      console.log("");
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("================================================================");
     
      
      });
}

// Movie search function 
function searchMovie (movie) {
    if (!movie) {
        movie = "Mr. Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=bd87554d";

    // creating an axios request to call the queryUrl 
    axios.get(queryUrl).then(
        function (response) {
            if (!movie) {
                movie = "Mr. Nobody";
            }

            // logging different responses from omdb
            console.log("================================================================");
            console.log("Movie Search Results");
            console.log("");
            console.log("Movie Title: " + response.data.Title);
            console.log("");
            console.log("Release Year: " + response.data.Year);
            console.log("");
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("");
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("");
            console.log("Country Produced In: " + response.data.Country);
            console.log("");
            console.log("Language: " + response.data.Language);
            console.log("");
            console.log("Movie Plot: " + response.data.Plot);
            console.log("");
            console.log("Actors and Actresses: " + response.data.Actors);
            console.log("");
            console.log("================================================================");

        //    console.log(response.data)
        
        }
    );
}
