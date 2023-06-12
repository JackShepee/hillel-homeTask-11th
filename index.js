function pow(num, degree) {
  if (
    typeof degree !== "number" ||
    degree < 0 ||
    Math.floor(degree) !== degree
  ) {
    alert("Degree must be a non-negative integer");
    return;
  } else if (degree === 0) {
    return 1;
  } else {
    return num * pow(num, degree - 1);
  }
}

alert(pow(5, 4));
