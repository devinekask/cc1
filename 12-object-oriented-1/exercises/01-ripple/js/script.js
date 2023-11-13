let ripple;

function setup() {
  createCanvas(400, 400);
  ripple = new Ripple(height / 2, width / 2, "red");
}

function draw() {
  background(0);

  ripple.display();
  ripple.update();
}
