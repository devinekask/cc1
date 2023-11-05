const circle = {
  x: 0,
  y: 200,
  colour: "red",
  size: 100,
};

const anotherCircle = {
  x: 400,
  y: 200,
  colour: "black",
  size: 100,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Circle
  fill(circle.colour);
  ellipse(circle.x, circle.y, circle.size);

  // Another circle
  fill(anotherCircle.colour);
  ellipse(anotherCircle.x, anotherCircle.y, anotherCircle.size);

  circle.x++;
  anotherCircle.x--;
}
