const lines = [];

let longestLength = 0;
let indexOfLongest;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(10);

  searchLongestLine();
  drawLines();
  drawTempLine();
}

function mousePressed() {
  const newLine = {
    xPos1: mouseX,
    yPos1: mouseY,
    xPos2: undefined,
    yPos2: undefined,
  };

  lines.push(newLine);
}

function mouseReleased() {
  const lastLine = lines[lines.length - 1];

  lastLine.xPos2 = mouseX;
  lastLine.yPos2 = mouseY;
}

function searchLongestLine() {
  lines.forEach((element) => {
    if (element.xPos2 && element.yPos2) {
      const distance = dist(
        element.xPos1,
        element.yPos1,
        element.xPos2,
        element.yPos2,
      );

      if (distance > longestLength) {
        longestLength = distance;
        indexOfLongest = lines.indexOf(element);
      }
    }
  });
}

function drawLines() {
  lines.forEach((element, index) => {
    // Longest line is thick and red
    // All other stored lines are thin and black
    if (index === indexOfLongest) {
      stroke(255, 0, 0);
    } else {
      stroke(255);
    }

    // Only if start & end exists, draw the line
    if (element.xPos1 && element.xPos2) {
      line(element.xPos1, element.yPos1, element.xPos2, element.yPos2);
    }
  });
}

function drawTempLine() {
  if (mouseIsPressed) {
    const lastLine = lines[lines.length - 1];

    stroke(220);
    line(mouseX, mouseY, lastLine.xPos1, lastLine.yPos1);
  }
}
