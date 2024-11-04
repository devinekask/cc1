function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Draw 5 ellipses using do while

  let i = 0;
  do {
    ellipse(25 + i * 50, 100, 50);
    i++;
  } while (i < 5);
}
