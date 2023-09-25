function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    // Set a random color
    const randomNumber = Math.ceil(random(1, 5));
    switch (randomNumber) {
      case 1:
        fill(227, 0, 34);
        break;
      case 2:
        fill(0, 123, 167);
        break;
      case 3:
        fill(204, 188, 0);
        break;
      case 4:
        fill(0, 168, 107);
        break;
      case 5:
        fill(237, 41, 57);
        break;
      case 6:
        fill(204, 85, 0);
        break;
      case 7:
        fill(255, 217, 0);
        break;
      case 8:
        stroke(0, 45, 114);
        break;
      case 9:
        stroke(115, 74, 18);
        break;
      case 10:
        stroke(0, 150, 100);
        break;
      default:
        break;
    }

    // Random circle size

    const randomSize = random(1, 35);
    noStroke();
    ellipse(mouseX, mouseY, randomSize);
  }
}
