function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  const courses = ["Web 1", "CC 1", "Visual Design 1", "Experience Design 1"];

  // address the FIRST element from the array
  console.log("First course:");
  console.log(courses[0]);

  // how many elements in the array?
  console.log("How many elements?");
  console.log(courses.length);

  // How to get the last element in an array?
  console.log("last element");
  console.log(courses[courses.length - 1]);

  //log an element that does not exist
  console.log("the next element doesn't exist");
  console.log(courses[19]);
}
