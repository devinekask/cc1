const circle = {
  x: 0,
  y: 200,
  colour: "red",
  size: 100,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(circle.colour);
  ellipse(circle.x, circle.y, circle.size);
  circle.x++;
}
