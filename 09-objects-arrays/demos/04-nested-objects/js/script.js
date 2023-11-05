const myCircle = {
  width: 100,
  height: 100,
  color: "#FF0000",
  stroke: {
    color: "#FFFFFF",
    weight: 5,
  },
};

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  stroke(myCircle.stroke.color);
  strokeWeight(myCircle.stroke.weight);

  fill(myCircle.color);
  ellipse(200, 200, myCircle.width, myCircle.height);
}
