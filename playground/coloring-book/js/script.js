let colorPicker;

function setup() {
  createCanvas(400, 400);
  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(0, height + 5);
  noStroke();
}

function draw() {
  fill(colorPicker.color());

  if (!mouseIsPressed) return;
  ellipse(mouseX, mouseY, 20, 20);
}
