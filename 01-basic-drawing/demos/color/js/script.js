function draw() {
  createCanvas(400, 400);

  // White background
  background(255);

  // Red
  fill(255, 0, 0);
  ellipse(35, 35, 60, 60);

  // Green
  fill(0, 255, 0);
  ellipse(130, 35, 60, 60);

  // Blue
  fill(0, 0, 255);
  ellipse(230, 35, 60, 60);

  // 255 means 100% opacity
  fill(255, 0, 0, 255);
  rect(20, 120, 230, 20);

  // 75% opacity
  fill(255, 0, 0, 191);
  rect(20, 160, 230, 20);

  // 55% opacity
  fill(255, 0, 0, 127);
  rect(20, 200, 230, 20);

  // 25% opacity
  fill(255, 0, 0, 63);
  rect(20, 240, 230, 20);
}
