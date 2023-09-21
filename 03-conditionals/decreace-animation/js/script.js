let angle = 0;
let size1 = 200;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  rectMode(CENTER);

  const centerX = width / 2;
  const centerY = width / 2;

  push();
  translate(centerX, centerY);
  rotate(angle);
  rect(0, 0, size1);
  pop();
  /*
    push();
      translate(centerX, centerY);
      rotate(-angle);
      rect(0, 0, 100, 100);
    pop();
    
    */

  angle++;
  size1 = size1 - 1;
}
