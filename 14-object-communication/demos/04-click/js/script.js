let bubble;

function setup() {
  createCanvas(600, 400);

  bubble = new Bubble(200, 200);
}

function draw() {
  background(220);

  bubble.show();
  bubble.move();
}

// If mouseX and mouseY are inside the bubble, stop the animation
function mouseClicked() {
  if (bubble.contains(mouseX, mouseY)) {
    // bubble.r+= 2;
    noLoop();
  } else {
    loop();
  }
}
