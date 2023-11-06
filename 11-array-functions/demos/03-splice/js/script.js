function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  //an array with colors
  const colorList = ["#FF0000", "#00FF00", "#0000FF"];

  // start at position 1, remove 0 elements, add orange, purple and grey
  colorList.splice(1, 0, "orange", "purple", "grey");
  console.log(colorList);

  // remove grey at position 3 and store the value in a new variable
  // const deletedElement = colorList.splice(3, 1);
  // console.log(colorList);

  // note that deletedElement is an array, despite it contains only one element
  // console.log(deletedElement);

  //check the position of orange
  // const index = colorList.indexOf("orange");
  // console.log(index);

  //remove orange and purple from array
  // colorList.splice(index, 2);
  // console.log(colorList);
}
