const circles = [];

function setup() {
  createCanvas(400, 400);
  addCircle(5);
}

function draw() {
  background(0);

  circles.forEach((circle) => circle.draw());

  stopExistingCircles();

  if (circles.length < 100) {
    addCircle(10);
  }
}

function addCircle(amount) {
  for (let i = 0; i < amount; i++) {
    const newCircle = new Circle(random(width), random(height), 100);

    if (!doesCircleOverlap(newCircle)) {
      circles.push(newCircle);
    }
  }
}

function doesCircleOverlap(newCircle) {
  return circles.some((existingCircle) => newCircle !== existingCircle && newCircle.overlaps(existingCircle));
}


function stopExistingCircles() {
  circles.forEach((circleOne, indexOne) => {
    circles.forEach((circleTwo, indexTwo) => {
      if (indexOne !== indexTwo && circleOne.overlaps(circleTwo)) {
        circleOne.isGrowing = false;
        circleTwo.isGrowing = false;
      }
    });
  });
}