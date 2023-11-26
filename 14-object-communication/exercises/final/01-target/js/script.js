let bubbles = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 50; i++) {
    bubbles.push(new Bubble(random(width), random(height), "white", 10));
  }
}

function draw() {
  background(0);

  bubbles = bubbles.filter((bubble) => bubble.isAlive);

  bubbles.forEach((bubble) => {
    bubble.show();
    bubble.move();
  });
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
