
function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  background(0);

  const numberOfLines = 360 * 5;

  for (let i = 0; i < numberOfLines; i++) {
    push();
    strokeWeight(3);
    stroke(255);

    const xPos = i / numberOfLines * width;
    const yPos = height / 2;
    const ySin = sin(i) * 100;

    translate(xPos, yPos);
    // line(0, 0, 0, ySin);
    point(0, ySin);
    pop();
  }
}
