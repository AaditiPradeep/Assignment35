var canvas;
var gameState =0;
var votersCount=0;
var database;
var votersEmail;
var voterse;
var form, voter, game;

function setup(){
    canvas = createCanvas(800,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
   
}