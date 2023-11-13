let car;

function setup() {
  createCanvas(400, 400);
  car = new Car(0, 0);
}

function draw() {
  background(220);

  car.display();
}
