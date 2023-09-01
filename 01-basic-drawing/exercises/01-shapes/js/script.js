function setup() {
  createCanvas(400, 400);
  background(0);
  strokeWeight(6);
  stroke(255);
}

function draw() {
  noFill();
  rect(50, 50, 300, 300);
  line(50, 50, 350, 350);
  ellipse(width / 2, height / 2, 300);
  arc(width / 2, height / 2, 100, 100, PI / 4, (PI * 5) / 4);
}
