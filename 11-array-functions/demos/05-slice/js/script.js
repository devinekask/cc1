function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  const week = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  console.log(week);

  // store the weekend in a new array
  const weekend = week.slice(5);
  console.log(weekend);

  // store the work week in a new array
  const workWeek = week.slice(0, 5);
  console.log(workWeek);

  // the original array has not changed
  console.log(week);
}
