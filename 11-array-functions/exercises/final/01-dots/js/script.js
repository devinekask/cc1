const points = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  drawLines();
}

function drawLines() {
  noFill();
  stroke(255);

  points.forEach((point, index) => {
    // draw circle
    ellipse(point.x, point.y, 10, 10);

    // if it's not the first point
    if (index > 0) {
      // draw lines between points/circles
      const previousPoint = points[index - 1];
      line(previousPoint.x, previousPoint.y, point.x, point.y);
    }
  });
}

function mouseClicked() {
  // create a new point object
  const newPoint = {
    x: mouseX,
    y: mouseY,
  };

  // add new point to the points array
  points.push(newPoint);
}