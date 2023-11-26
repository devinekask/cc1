const circles = [];

function setup() {
  createCanvas(400, 400);
  addCircle(10);
}

function draw() {
  background(0);

  circles.forEach(circle => circle.draw());

  stopExistingCircles();

  if (circles.length < 5) {
    addCircle(2);
  }
}

function addCircle(amount) {
  for (let i = 0; i < amount; i++) {
    const newCircle = createRandomCircle();

    if (!doesCircleOverlap(newCircle)) {
      circles.push(newCircle);
    }
  }
}

function doesCircleOverlap(newCircle) {
  let overlap = false;

  circles.forEach(existingCircle => {
    if (newCircle.overlaps(existingCircle)) {
      overlap = true;
    }
  });

  return overlap;
}


function createRandomCircle() {
  const circleRadius = 100;
  return new Circle(random(width), random(height), circleRadius);
}


function stopExistingCircles() {
  circles.forEach((circleOne) => {
    circles.forEach(circleTwo => {
      if (circleOne.overlaps(circleTwo)) {
        circleOne.isGrowing = false;
        circleTwo.isGrowing = false;
      }
    });
  });
}

