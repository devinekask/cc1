const circles = [];
const radius = 10;


function setup() {
  createCanvas(400, 400);
  createCircles(200);
  background(0);
}

const createCircles = (n) => {
  for (let i = 0; i < n; i++) {
    circles.push({ x: random(width), y: random(height) });
  }
};

function draw() {
  background(0, 10);

  for (let i = 0; i < circles.length; i++) {
    push();
    translate(width / 2, height / 2);

    const xPos = map(circles[i].x, 0, width, -mouseX, mouseX);
    const yPos = map(circles[i].y, 0, height, -mouseY, mouseY);

    fill(255);
    circle(xPos, yPos, radius);
    pop();
  }
}

