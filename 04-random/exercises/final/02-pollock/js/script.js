function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {

  if (mouseIsPressed) {
    const randomNumber = Math.floor(random(0, 5));

    switch (randomNumber) {
      case 0:
        fill(227, 0, 34);
        break;
      case 1:
        fill(0, 123, 167);
        break;
      case 2:
        fill(204, 188, 0);
        break;
      case 3:
        fill(0, 168, 107);
        break;
      case 4:
        fill(237, 41, 57);
        break;
      default:
        break;
    }

    const randomSize = random(1, 20);

    noStroke();
    ellipse(mouseX, mouseY, randomSize);
  }
}
