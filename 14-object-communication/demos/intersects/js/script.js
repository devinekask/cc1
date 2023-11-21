let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);

  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(200, 200);
}

function draw() {
  background(0);
  stroke(255);

  if (bubble1.intersects(bubble2)) {
    background("purple");
  }

  bubble1.show();
  bubble2.show();

  bubble1.move();
  bubble2.move();

  bubble2.x = mouseX;
  bubble2.y = mouseY;
}
