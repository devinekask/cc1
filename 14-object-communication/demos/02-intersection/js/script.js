let bubble1;
let bubble2;

function setup() {
  createCanvas(400, 400);

  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(200, 200);
}

function draw() {
  background(220);

  // Check if the bubbles are overlapping
  // If they are, change the background color to red
  if (bubble1.intersects(bubble2)) {
    background("red");
  }

  bubble1.move();
  bubble2.move();

  bubble1.show();
  bubble2.show();

  line(
    bubble1.location.x,
    bubble1.location.y,
    bubble2.location.x,
    bubble2.location.y,
  );
}
