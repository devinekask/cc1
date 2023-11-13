let ripples = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  ripples = ripples.filter((ripple) => ripple.size < 250);

  ripples.forEach((ripple) => {
    ripple.display();
    ripple.update();
  });
}

function mouseClicked() {
  const newRippleInstance = new Ripple(mouseX, mouseY, "red");
  ripples.push(newRippleInstance);
}
