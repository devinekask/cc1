function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  fill(255);

  const leftWall = 100;
  const rightWall = 300;

  const xPos = mouseX;
  const xPosConstrained = constrain(mouseX, leftWall, rightWall);

  // Walls
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

  // Balls
  ellipse(xPos, 100, 30);
  ellipse(xPosConstrained, 300, 30);
}
