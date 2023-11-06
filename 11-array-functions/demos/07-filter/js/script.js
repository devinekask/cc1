function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  //an array with colors
  const colorList = ["#FF0000", "#00FF00", "green", "#0000FF", "red", "blue"];

  // use the filterOnHashtag function as a parameter
  const filtered = colorList.filter(filterOnHashtag);
  console.log(filtered);

  // short notation
  const filteredShort = colorList.filter((clr) => clr.startsWith("#"));
  console.log(filteredShort);
}

function filterOnHashtag(item) {
  console.log(item);

  if (item.startsWith("#")) {
    console.log("starts with #");
    return true;
  } else {
    console.log("does NOT start with #");
    return false;
  }
}
