function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  for (let i = 0; i < 10; i++) {
    rect(25 + i * 30, 30, 30, 300);

    if (i > 5) {
      break;
    }
  }
}
