class SquareWorm extends Worm {
  constructor(x, y, size, colour) {
    super(x, y, size, colour);
  }

  display() {
    stroke(0);
    fill(this.colour);
    rect(this.location.x, this.location.y, this.size);
  }
}
