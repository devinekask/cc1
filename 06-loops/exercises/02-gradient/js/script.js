const nRectangles = 15;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  for (let i = 0; i < nRectangles; i++) {
    const grayScale = map(i, 0, 15, 0, 255);
    const wRect = width / nRectangles;
    fill(grayScale);
    rect(i * wRect, 0, wRect, height);
  }
}
