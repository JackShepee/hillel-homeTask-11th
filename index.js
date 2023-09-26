function pow(num, degree) {
  if (typeof num !== "number") {
    throw new Error("Num must be a valid number!");
  }
  if (
    typeof degree !== "number" ||
    degree < 0 ||
    Math.floor(degree) !== degree
  ) {
    throw new Error("Degree must be a non-negative integer");
  } else if (degree === 0) {
    return 1;
  } else {
    return num * pow(num, degree - 1);
  }
}

console.log(pow(5, 4))

module.exports = pow;