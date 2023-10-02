function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  const nRectangles = 10;

  for (let i = 0; i < nRectangles; i++) {
    const grayScale = (i / nRectangles) * 255;
    const wRect = width / nRectangles;

    noStroke();
    fill(grayScale, 0, 0);
    rect(i * wRect, 0, wRect, height);
  }
}
