const bubbles = [];
let currentFormation = 0;

function setup() {
  createCanvas(1080 / 2, 1920 / 2);
  background(255);

  const N_ROWS = 55;
  const N_COLS = 55;
  const N_CIRCLES = N_COLS * N_COLS;
  const CELL_WIDTH = width / N_COLS;
  const CELL_HEIGHT = height / N_ROWS;
  let counter = 0;

  for (let i = 0; i < N_COLS; i++) {
    for (let j = 0; j < N_COLS; j++) {
      counter++;
      const newBubble = new Bubble(random(-width / 2, 1.5 * width), random(-height / 2, 1.5 * height));

      let xPos;
      let yPos;

      // Circle formation
      const angle = map(counter, 0, N_CIRCLES, 0, TWO_PI);
      xPos = width / 2 + cos(angle) * 0;
      yPos = height / 2 + sin(angle) * 0;
      newBubble.formations.push(createVector(xPos, yPos));

      xPos = width / 2 + cos(angle) * 225;
      yPos = height / 2 + sin(angle) * 225;
      newBubble.formations.push(createVector(xPos, yPos));

      xPos = width / 2 + cos(angle) * 0;
      yPos = height / 2 + sin(angle) * 0;
      newBubble.formations.push(createVector(xPos, yPos));

      // Random formation
      xPos = random(50, width - 50);
      yPos = random(50, height - 50);
      newBubble.formations.push(createVector(xPos, yPos));

      // Vertical Line formation
      xPos = width / 2;
      yPos = map(counter, 0, N_CIRCLES, 50, height - 50);
      newBubble.formations.push(createVector(xPos, yPos));

      // Horizontal Line formation
      xPos = map(counter, 0, N_CIRCLES, 50, width - 50);
      yPos = height / 2;
      newBubble.formations.push(createVector(xPos, yPos));

      // Square formation
      xPos = map(i, 0, N_COLS, 50, width - 50);
      yPos = map(j, 0, N_ROWS, 50, height - 50);
      newBubble.formations.push(createVector(xPos, yPos));


      // Circle formation
      xPos = width / 2 + cos(angle) * 0;
      yPos = height / 2 + sin(angle) * 0;
      newBubble.formations.push(createVector(xPos, yPos));

      xPos = width / 2 + cos(angle) * 450;
      yPos = height / 2 + sin(angle) * 700;
      newBubble.formations.push(createVector(xPos, yPos));

      bubbles.push(newBubble);
    }
  }

}

function draw() {
  background(255, 200);

  bubbles.forEach(bubble => {
    bubble.show();
    bubble.target = bubble.formations[currentFormation];
    bubble.moveToTarget();
  });

  setFormation();
}

function setFormation() {
  if (frameCount > 456) {
    noLoop();
  } else if (frameCount > 390) {
    currentFormation = 8;
  } else if (frameCount > 342) {
    currentFormation = 7;
  } else if (frameCount > 294) {
    currentFormation = 6;
  } else if (frameCount > 248) {
    currentFormation = 5;
  } else if (frameCount > 201) {
    currentFormation = 4;
  } else if (frameCount > 165) {
    currentFormation = 3;
  } else if (frameCount > 111) {
    currentFormation = 2;
  } else if (frameCount > 62) {
    currentFormation = 1;
  }
}

function mouseClicked() {
  noLoop();
}

