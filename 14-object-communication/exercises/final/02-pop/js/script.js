let bubbles = [];

function setup() {
  createCanvas(400, 400);
  createCirlces();
}

function draw() {
  background(0);

  bubbles = bubbles.filter((bubble) => bubble.isAlive);

  bubbles.forEach((bubble) => {
    bubble.show();
    bubble.move();
  });
}

function createCirlces() {
  for (let i = 0; i < 50; i++) {
    bubbles.push(
      new Bubble(random(width), random(height), "white", random(30)),
    );
  }
}

function mouseClicked() {
  bubbles.forEach((bubble) => {
    if (bubble.contains(mouseX, mouseY)) {
      bubble.isAlive = false;
    }
  });
}
