class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(2, 150);
    this.isGrowing = true;
  }

  draw() {
    noFill();
    stroke(255);
    circle(this.x, this.y, this.r * 2);

    if (this.isGrowing) {
      this.r += 1;
    }
  }

  overlaps(otherCircle) {
    const distance = dist(this.x, this.y, otherCircle.x, otherCircle.y);
    return distance < this.r + otherCircle.r;
  }
}
