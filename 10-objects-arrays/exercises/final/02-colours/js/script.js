const colours = ["#2B3499", "#FF6C22", "#FF9209", "#FFD099"];
let currentIndex = 0;

function setup() {
  createCanvas(400, 400);
  stroke(255);
}

function draw() {
  background(colours[currentIndex]);
}

function mouseClicked() {
  // increase current index
  currentIndex++;

  // reset when we are at the end of our array
  if (currentIndex > colours.length - 1) {
    currentIndex = 0;
  }
}
