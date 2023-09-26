function setup() {
  createCanvas(400, 400);
}

function draw() {
  /* We map 
  - from mouseY (min:0, max:400) 
  - to grayscale (min:0, max:255)
  */
  const mappedColour = map(mouseY, 0, 400, 0, 255);

  background(mappedColour, 0, 0);
}
