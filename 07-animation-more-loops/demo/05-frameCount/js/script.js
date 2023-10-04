let drawRect = false;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(0);

  if (frameCount % 60 === 0) {
    drawRect = !drawRect;
  }

  if (drawRect) {
    rect(width / 2, height / 2, 300, 300);
  }
}



