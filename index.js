function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else {
    return num * pow(num, degree - 1);
  }
}

alert(pow(5, 4));
