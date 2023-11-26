const bubbles = [];

function setup() {
  createCanvas(400, 400);
  createCircles();
}

function draw() {
  background(0);
  noStroke();

  bubbles.forEach((bubble) => {
    bubble.show();
    bubble.move();
  });
}

function mouseClicked() {
  bubbles.forEach((bubble, i) => {
    if (bubble.target === undefined) {
      const x = (i / bubbles.length) * width;
      const y = height / 2;
      bubble.target = createVector(x, y);
    } else {
      bubble.target = undefined;
    }
  });
}

function createCircles() {
  const nCircles = 150;

  for (let i = 0; i < nCircles; i++) {
    const newBubble = new Bubble(random(width), random(height), "white", 5);
    bubbles.push(newBubble);
  }
}
