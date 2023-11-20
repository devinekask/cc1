let circle;
let square;

function setup() {
  createCanvas(400, 400);

  circle = new Circle(200, 100, 100);
  square = new Square(150, 200, 100);
}

function draw() {
  background(0);

  circle.display();
  circle.update();

  square.display();
  square.update();
}
