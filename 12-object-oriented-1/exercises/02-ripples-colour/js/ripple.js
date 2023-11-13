class Ripple {

  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.size = 0;
    this.colour = colour;
  }

  display() {
    noFill();
    stroke(this.colour);
    strokeWeight(5);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.size++;
  }
}