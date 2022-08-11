function range(start, end, step) {
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return []
  } else {
    let i = start
    let array = []
    while (i <= end) {
      array.push(i);
      i += step
    }
    return array
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));