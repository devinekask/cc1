const bubbles = [];
let chaos = true;

function setup() {
  createCanvas(400, 400);
  createCircles();
}

function draw() {
  background(0);
  noStroke();

  bubbles.forEach((bubble) => {
    bubble.show();
    if (chaos) {
      bubble.move();
    } else {
      bubble.moveToTarget();
    }
  });
}

function mouseClicked() {
  chaos = !chaos;
}

function createCircles() {
  const nCircles = 150;

  for (let i = 0; i < nCircles; i++) {
    const newBubble = new Bubble(random(width), random(height), "white", 5);
    const x = (i / nCircles) * width;
    const y = height / 2;

    newBubble.target = createVector(x, y);

    bubbles.push(newBubble);
  }
}
