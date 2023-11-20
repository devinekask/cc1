const planes = [];

function setup() {
  createCanvas(400, 400);
  createPlanes();
}

function draw() {
  background(0);
  planes.forEach((element) => element.run());
}

function createPlanes() {
  for (let i = 0; i < 50; i++) {
    const triangle = new Plane(width / 2, height / 2, random(20));
    planes.push(triangle);
  }
}
