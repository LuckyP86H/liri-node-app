console.log('this is loaded');


exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);


require('dotenv').config();
//Global Variables 
var keys = require('./keys');

var client = new Twitter(keys.twitter);
//Spotify Needs
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//Movie Needs
var request = require("request");
//Do-What-It-Says Needs
var fs = require("fs");
//To take in User Input
var command = process.argv[2];
var input = process.argv[3];

switch (command) {
        //Spotify Case
    case 'spotify-this-song':
        song();
        break;
        //Movie Case
    case 'movie-this':
        movie();
        break;
        //Do What It Says Case
    case 'do-what-it-says':
        followDirections();
        break;
        //Default
    default:
        console.log("I'm sorry, I don't understand.")
};