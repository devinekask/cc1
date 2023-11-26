const bubbles = [];

function setup() {
  createCanvas(400, 400);
  createCircles();
}

function draw() {
  background(0);

  bubbles.forEach((bubble) => {
    bubble.show();
    bubble.move();
  });
}

function createCircles() {
  for (let i = 0; i < 50; i++) {
    bubbles.push(new Bubble(random(width), random(height), "white", 10));
  }
}

function mouseClicked() {
  bubbles.forEach((bubble) => {
    if (bubble.target === undefined) {
      bubble.target = createVector(mouseX, mouseY);
    } else {
      bubble.target = undefined;
    }
  });
}
