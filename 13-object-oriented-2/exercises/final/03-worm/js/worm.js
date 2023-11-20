class Worm {
  constructor(x, y, size, colour) {
    this.location = createVector(x, y);
    this.velocity = createVector(size / 4, size / 4);
    this.size = size;
    this.colour = colour;
    this.noiseValue = random(100);
  }

  run() {
    this.display();
    this.update();
  }

  update() {
    angleMode(DEGREES);

    const angle = map(noise(this.noiseValue), 0, 1, -30, 30);

    this.velocity.rotate(angle);
    this.location.add(this.velocity);

    this.noiseValue += 0.1;

    if (this.location.x < 0) {
      this.location.x = width;
    } else if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    } else if (this.location.y > height) {
      this.location.y = 0;
    }
  }

  static getRandomColour() {
    let colour;

    const chance = random();

    if (chance < 0.25) {
      colour = "#219C90";
    } else if (chance < 0.5) {
      colour = "#E9B824";
    } else if (chance < 0.75) {
      colour = "#EE9322";
    } else {
      colour = "#D83F31";
    }

    return colour;
  }
}
