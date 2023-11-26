class Circle {
  constructor(x, y, maxSize) {
    this.x = x;
    this.y = y;
    this.r = random(1, maxSize);
    this.isGrowing = true;
  }

  draw() {
    noFill();
    stroke(255);
    strokeWeight(0.5);
    circle(this.x, this.y, this.r * 2);

    if (this.isGrowing) {
      this.r += 0.5;
    }
  }

  overlaps(otherCircle) {
    const distance = dist(this.x, this.y, otherCircle.x, otherCircle.y);
    return distance < this.r + otherCircle.r;
  }
}
