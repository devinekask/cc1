function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (let xPos = 0; xPos < width; xPos++) {
    // RANDOM
    //line(xPos, height, xPos, random(height));

    // NOISE
    // change 0.1, to 0.01, 0.001,0.0001
    // What happens?

    const yNoise = noise(xPos * 0.01);
    const yPos = yNoise * height;

    line(xPos, height, xPos, yPos);
  }
}
