const circle = {
  x: 0,
  y: 200,
  colour: "red",
  size: 100,
};

// Another circle does not have a size property
const anotherCircle = {
  x: 400,
  y: 200,
  colour: "black",
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Circle
  fill(circle.colour);
  ellipse(circle.x, circle.y, circle.size);

  // Create new size property
  anotherCircle.size = 125;

  // Another circle
  fill(anotherCircle.colour);
  ellipse(anotherCircle.x, anotherCircle.y, anotherCircle.size);

  // Manipulating the object properties
  circle.x++;
  anotherCircle.x--;

  if (anotherCircle.x < 200) {
    anotherCircle.colour = "red";
  }
}
