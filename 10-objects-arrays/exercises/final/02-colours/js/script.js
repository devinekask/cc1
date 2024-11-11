const colours = ["#2B3499", "#FF6C22", "#FF9209", "#FFD099"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (let i = 0; i < colours.length; i++) {
    const rectWidth = width / colours.length;
    noStroke();
    fill(colours[i]);
    rect(i * rectWidth, 0, rectWidth, height);
  }
}
