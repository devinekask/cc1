const circles = [
  {
    x: 50,
    y: 200,
    colour: "#2B3499",
    size: 50,
  },
  {
    x: 150,
    y: 200,
    colour: "#FF6C22",
    size: 50,
  },
  {
    x: 250,
    y: 200,
    colour: "#FF9209",
    size: 50,
  },
  {
    x: 350,
    y: 200,
    colour: "#FFD099",
    size: 50,
  },
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (let i = 0; i < circles.length; i++) {
    // get the current circle object at index 'i'
    const currentCircle = circles[i];

    fill(currentCircle.colour);
    ellipse(currentCircle.x, currentCircle.y, currentCircle.size);
  }
}
