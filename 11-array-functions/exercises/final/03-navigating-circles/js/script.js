let circles = [];
const diameter = 30;

function setup() {
  createCanvas(400, 400);
  createCircles(50);
}

function draw() {
  background(0);

  circles.forEach((element) => {
    circle(element.x, element.y, diameter);
  });
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      updateCircles("x", -10);
      break;
    case RIGHT_ARROW:
      updateCircles("x", 10);
      break;
    case UP_ARROW:
      updateCircles("y", -10);
      break;
    case DOWN_ARROW:
      updateCircles("y", 10);
      break;
  }
}

function updateCircles(coordinate, value) {
  circles = circles.map((element) => {
    if (coordinate === "x") {
      element.x += value;
    } else if (coordinate === "y") {
      element.y += value;
    }
    return element;
  });
}

function createCircles(n) {
  for (let i = 0; i < n; i++) {
    const newCircle = {
      x: random(width),
      y: random(height),
    };

    circles.push(newCircle);
  }
}
