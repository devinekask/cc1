const dots = [];


function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  generateRandomPattern();
}

function generateRandomPattern() {
  for (let i = 0; i < 100; i++) {
    dots.push({
      x: random(20, width - 20),
      y: random(20, height - 20)
    });
  }

  console.log(dots);


}

function draw() {
  drawCustomShape(dots);
}

const drawCustomShape = (points) => {
  beginShape();
  noFill();
  strokeWeight(2);
  for (let i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y);
  }
  endShape(CLOSE);
};
