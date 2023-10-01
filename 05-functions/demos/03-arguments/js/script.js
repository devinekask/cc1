function setup() {
  createCanvas(400, 400);
}

function draw() {
  drawFourSquares(20);
  drawThreeCircles(30);
}

function drawFourSquares(yPos = 200) {
  rect(50, yPos, 50, 50);
  rect(150, yPos, 50, 50);
  rect(250, yPos, 50, 50);
  rect(350, yPos, 50, 50);
}

function drawThreeCircles(circleSize) {
  ellipse(75, 300, circleSize, circleSize);
  ellipse(175, 300, circleSize, circleSize);
  ellipse(275, 300, circleSize, circleSize);
}
