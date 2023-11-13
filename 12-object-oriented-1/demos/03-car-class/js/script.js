let car1;
let car2;

function setup() {
  createCanvas(400, 400);
  car1 = new Car(0, 0, "red");
  car2 = new Car(100, 100, "blue");
}

function draw() {
  background(220);

  car1.update();
  car1.display();

  car2.update();
  car2.display();
}
