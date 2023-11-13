let xPos = 0;
const yPos = 150;
const rectSize = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawRect();
  update();

}

function drawRect() {
  fill("black");
  rect(xPos, yPos, rectSize);
}

function update() {
  xPos++;

  if (xPos > width) {
    xPos = 0;
  }
}
