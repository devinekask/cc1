const bouncingBalls = [
  {
    xPos: 50,
    xStep: 2,
    yPos: 50,
    yStep: 3,
    size: 50,
  },
  {
    xPos: 300,
    xStep: 2,
    yPos: 50,
    yStep: 3,
    size: 50,
  },
  {
    xPos: 150,
    xStep: 2,
    yPos: 200,
    yStep: -3,
    size: 50,
  },
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let i = 0; i < bouncingBalls.length; i++) {
    drawBall(bouncingBalls[i]);
  }
}

function drawBall(ball) {
  fill(0);
  ellipse(ball.xPos, ball.yPos, ball.size);

  ball.xPos = ball.xPos + ball.xStep;
  ball.yPos = ball.yPos + ball.yStep;

  const circleRadius = ball.size / 2;

  const touchedRight = ball.xPos >= width - circleRadius;
  const touchedLeft = ball.xPos <= 0 + circleRadius;

  const touchedBottom = ball.yPos >= height - circleRadius;
  const touchedTop = ball.yPos <= 0 + circleRadius;

  // -1 * -1 =  1
  //  1 * -1 = -1

  if (touchedLeft || touchedRight) {
    ball.xStep = ball.xStep * -1;
  } else if (touchedTop || touchedBottom) {
    ball.yStep = ball.yStep * -1;
  }
}
