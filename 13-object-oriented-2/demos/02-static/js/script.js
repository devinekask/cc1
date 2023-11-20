function setup() {
  createCanvas(400, 400);

  const pointA = new Point(5, 5);
  const pointB = new Point(10, 10);

  // We can call the static method directly on the class
  console.log(Point.distance(pointA, pointB));
}

function draw() {
  background(220);
}