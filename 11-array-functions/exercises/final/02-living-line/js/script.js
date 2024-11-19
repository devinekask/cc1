const numberOfPoints = 100;
const points = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  addPoint();
  removeLastPoint();
  drawLine();
}

function addPoint() {
  const newPoint = {
    x: mouseX,
    y: mouseY,
  };

  // new point(last)
  points.push(newPoint);
}

function removeLastPoint() {
  if (points.length > numberOfPoints) {
    points.shift();
  }
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
