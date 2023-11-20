class Square extends Shape {
  constructor(x, y, size) {
    // Call the constructor of the parent class
    super(x, y);
    this.size = size;
  }

  display() {
    rect(this.x, this.y, this.size);
  }
}
