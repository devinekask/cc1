let bubble1;
let bubble2;

function setup() {
  createCanvas(400, 400);

  bubble1 = new Bubble(75, 200);
  bubble2 = new Bubble(275, 200);
}

function draw() {
  background(220);

  // Check if the bubbles are overlapping
  checkIntersection();

  bubble1.move();
  bubble2.move();

  bubble1.show();
  bubble2.show();
}


function checkIntersection() {
  if (bubble1.intersects(bubble2)) {

    // Only change the colour if the bubbles are not already overlapping
    if (!bubble1.overlap && !bubble2.overlap) {
      bubble1.overlap = true;
      bubble2.overlap = true;

      bubble1.colour = getRandomColour();
      bubble2.colour = getRandomColour();
    }
  } else {
    // If the bubbles are not overlapping, reset the overlap property
    bubble1.overlap = false;
    bubble2.overlap = false;
  }
}

// this function will return a random colour from the array
function getRandomColour() {
  const colours = [
    "#2B2A4C",
    "#B31312",
    "#EA906C",
    "#EEE2DE",
    "#6B240C",
    "#6B240C",
  ];
  return random(colours);
}
