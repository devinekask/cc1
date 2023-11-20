let circle;
let rectangle;

function setup() {
  createCanvas(400, 400);

  circle = new Circle(200, 100, 100);
  rectangle = new Rectangle(150, 200, 100, 150);
}

function draw() {
  background(0);

  circle.display();
  circle.update();

  rectangle.display();
  rectangle.update();
}
