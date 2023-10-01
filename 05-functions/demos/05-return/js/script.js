function setup() {
  createCanvas(400, 400);
  background(0);
  noLoop();
}

function draw() {
  drawDevineLogo(10, 60, 300);
}



function drawDevineLogo(xPos, yPos, size) {
  const randomColour = getRandomColour();

  push();
  translate(xPos, yPos);
  fill(randomColour);
  noStroke();
  const rectSize = 0.8 * size;
  rect(0, 0, rectSize, rectSize);
  arc(rectSize, rectSize / 2, rectSize, rectSize, PI + HALF_PI, HALF_PI);
  fill(0);
  arc(rectSize / 2, rectSize / 2, rectSize, rectSize, PI + HALF_PI, HALF_PI);
  pop();
}

function getRandomColour() {
  const randomNumber = Math.floor(random(0, 3));
  let colour;

  switch (randomNumber) {
    case 0:
      colour = "#F1EFEF";
      break;
    case 1:
      colour = "#CCC8AA";
      break;
    case 2:
      colour = "#7D7C7C";
      break;
    default:
      break;
  }
  return colour;
}
