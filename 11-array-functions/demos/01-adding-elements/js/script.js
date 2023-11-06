function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  //an array with colors
  const colorList = ["#FF0000", "#00FF00", "#0000FF"];

  //add an element to the end of the array
  colorList.push("#987654");

  //log the entire array in the console.
  //console.log(colorList);

  // add multiple elements at the end of the array and store the returned result
  //const amountOfItems = colorList.push("#EEFF89", "#678345");
  //console.log(colorList);
  // console.log(amountOfItems);

  // add an element at the start of the array
  // colorList.unshift("#EEEEEE");

  // add multiple elements at the start of the array
  // colorList.unshift("#FFFFFF", "#000000");
}
