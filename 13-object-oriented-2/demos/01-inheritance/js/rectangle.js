class Rectangle extends Shape {
  constructor(x, y, width, height) {
    // Call the constructor of the parent class
    super(x, y);

    // Add new properties
    this.width = width;
    this.height = height;
  }

  display() {
    rect(this.x, this.y, this.width, this.height);
  }
}
