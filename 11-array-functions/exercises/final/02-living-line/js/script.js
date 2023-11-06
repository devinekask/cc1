const nPoints = 25;
const points = [];

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(0);

  addPoint();

  if (points.length > nPoints) {
    points.shift();
  }

  drawLine();
}

function drawLine() {
  noFill();
  beginShape();
  stroke(255);
  strokeWeight(3);
  points.forEach((point) => {
    vertex(point.x, point.y);
  });
  endShape();
}

function addPoint() {
  const newPoint = {
    x: mouseX,
    y: mouseY,
  };

  // Add new (last)
  points.push(newPoint);
}
