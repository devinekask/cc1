class Car {
  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }

  display() {
    fill(this.colour);
    rect(this.x, this.y, 100, 50);
  }

  update() {
    this.x++;

    if (this.x > width) {
      this.x = 0;
    }
  }
}
