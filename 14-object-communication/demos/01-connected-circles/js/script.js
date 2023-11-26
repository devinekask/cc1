let bubble1;
let bubble2;

function setup() {
  createCanvas(400, 400);

  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(200, 200);
}

function draw() {
  background(220);

  bubble1.move();
  bubble2.move();

  bubble1.show();
  bubble2.show();

  // Draw a line between the two bubbles
  // This line represents the distance between the two bubbles
  // We will use this distance to check if the bubbles are overlapping

  line(
    bubble1.location.x,
    bubble1.location.y,
    bubble2.location.x,
    bubble2.location.y,
  );
}
