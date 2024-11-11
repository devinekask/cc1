function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (let xPos = 0; xPos < width; xPos++) {
    // RANDOM
    //line(xPos, height, xPos, random(height));

    // NOISE
    // We add the frameCount as the parameter that is affacting our noise

    const yNoise = noise(xPos * 0.01, frameCount * 0.003);
    const yPos = yNoise * height;

    line(xPos, height, xPos, yPos);
  }
}
