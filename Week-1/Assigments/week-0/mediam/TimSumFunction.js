function calculateTime(n) {
  let start = performance.now();
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  let end = performance.now();
  return end - start;
}
