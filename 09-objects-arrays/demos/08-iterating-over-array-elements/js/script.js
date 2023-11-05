const colours = ["#2B3499", "#FF6C22", "#FF9209", "#FFD099"];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  for (let i = 0; i < colours.length; i++) {
    fill(colours[i]);
    rect(i * 100, 0, 100, 400);
  }
}
