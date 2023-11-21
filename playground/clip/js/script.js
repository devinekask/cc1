function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();

  // Mask in some shapes
  push();
  beginClip();
  triangle(15, 37, 30, 13, 43, 37);
  circle(45, 45, 7);
  endClip();

  fill("red");
  rect(5, 5, 45, 45);
  pop();

  translate(50, 50);

  // Mask out the same shapes
  push();
  beginClip({ invert: true });
  triangle(15, 37, 30, 13, 43, 100);
  circle(45, 45, 7);
  endClip();

  fill("red");
  rect(5, 5, 45, 45);
  pop();
}
