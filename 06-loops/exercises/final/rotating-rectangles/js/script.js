function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  background(0);
  noStroke();
  fill("#EDF44E");

  for (let i = 0; i < 9; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(i * 20);
    rect(0, 0, 20, 300);
    pop();
  }

  // alternative solution
  /*
  for (let rectAngle = 0; rectAngle < 360; rectAngle += 20) {
    push();
    translate(width / 2, height / 2);
    rotate(rectAngle);
    rect(0, 0, 20, 300);
    pop();
  }
  */
}
