class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 0;
  }

  display() {
    noFill();
    stroke(255);
    strokeWeight(5);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.size++;
  }
}
