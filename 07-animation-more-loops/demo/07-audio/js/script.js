let song;

function preload() {
  song = loadSound("./assets/song.mp3");
}

function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  ellipse(200, 200, 200, 200);
}

function mouseClicked() {
  song.play();
}
