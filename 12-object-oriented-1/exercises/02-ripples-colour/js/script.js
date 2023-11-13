let ripple1;
let ripple2;

function setup() {
  createCanvas(400, 400);
  ripple1 = new Ripple(200, 100, "red");
  ripple2 = new Ripple(200, 300, "blue");
}

function draw() {
  background(0);

  ripple1.display();
  ripple1.update();

  ripple2.display();
  ripple2.update();
}
