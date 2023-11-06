const points = [];

function setup() {
  createCanvas(400, 400);
  background(0);

  for (let i = 0; i < 19; i++) {
    ellipse(random(width), random(height), 10);
  }
}

function draw() {
  drawLine();
}

function mouseClicked() {
  const newPoint = {
    x: mouseX,
    y: mouseY,
  };

  // Add new (last)
  points.push(newPoint);
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
