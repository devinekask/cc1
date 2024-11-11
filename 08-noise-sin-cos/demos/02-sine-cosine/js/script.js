// source: https://p5js.org/examples/angles-and-motion-sine-cosine/
let angle = 0;
const circleX = 200;
const circleY = 150;
const circleRadius = 75;

const graphX = 50;
const graphY = 300;
const graphAmplitude = 50;
const graphPeriod = 300;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  // Update angle
  angle++;

  if (angle > 360) {
    angle = 0;
  }

  fill(255);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(`angle: ${angle}`, 25, 25);

  stroke(128);
  fill(64);
  arc(circleX, circleY, circleRadius / 2, circleRadius / 2, 360 - angle, 0);


  // Draw circle and diameters
  noFill();
  stroke(128);
  strokeWeight(3);
  circle(circleX, circleY, 2 * circleRadius);
  line(circleX, circleY - circleRadius, circleX, circleY + circleRadius);
  line(circleX - circleRadius, circleY, circleX + circleRadius, circleY);

  // Draw moving points

  const pointX = circleX + circleRadius * cos(angle);
  const pointY = circleY - circleRadius * sin(angle);

  line(circleX, circleY, pointX, pointY);

  noStroke();

  fill("white");
  circle(pointX, pointY, 10);

  fill("orange");
  circle(pointX, circleY, 10);

  fill("red");
  circle(circleX, pointY, 10);

  // Draw graph

  stroke("grey");
  strokeWeight(3);
  line(graphX, graphY, graphX + 300, graphY);
  line(graphX, graphY - graphAmplitude, graphX, graphY + graphAmplitude);
  line(
    graphX + graphPeriod,
    graphY - graphAmplitude,
    graphX + graphPeriod,
    graphY + graphAmplitude
  );

  fill("grey");
  strokeWeight(1);
  textAlign(CENTER, CENTER);
  text("0", graphX, graphY + graphAmplitude + 20);
  text("360", graphX + graphPeriod, graphY + graphAmplitude + 20);
  text("1", graphX / 2, graphY - graphAmplitude);
  text("0", graphX / 2, graphY);
  text("-1", graphX / 2, graphY + graphAmplitude);

  fill("orange");
  text("cos", graphX + graphPeriod + graphX / 2, graphY - graphAmplitude);
  fill("red");
  text("sin", graphX + graphPeriod + graphX / 2, graphY);

  // Draw cosine curve

  noFill();
  stroke("orange");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    const x = map(t, 0, 360, graphX, graphX + graphPeriod);
    const y = graphY - graphAmplitude * cos(t);
    vertex(x, y);
  }
  endShape();

  // Draw sine curve

  noFill();
  stroke("red");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    const x = map(t, 0, 360, graphX, graphX + graphPeriod);
    const y = graphY - graphAmplitude * sin(t);
    vertex(x, y);
  }
  endShape();

  // Draw moving line

  const lineX = map(angle, 0, 360, graphX, graphX + graphPeriod);
  stroke("grey");
  line(lineX, graphY - graphAmplitude, lineX, graphY + graphAmplitude);

  // Draw moving points on graph

  const orangeY = graphY - graphAmplitude * cos(angle);
  const redY = graphY - graphAmplitude * sin(angle);

  noStroke();

  fill("orange");
  circle(lineX, orangeY, 10);

  fill("red");
  circle(lineX, redY, 10);
}