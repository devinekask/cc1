class Car {

  // The constructor is executed when a new instance (object) is created.
  // x and y are the initial position of the car.
  constructor(x, y) {
    // The keyword 'this' refers to the object that is being created.
    // We assign the values of x and y to the object's properties.
    this.x = x;
    this.y = y;
  }

  // Display is a method in the Car class.
  display() {
    rect(this.x, this.y, 100, 50);
  }
}