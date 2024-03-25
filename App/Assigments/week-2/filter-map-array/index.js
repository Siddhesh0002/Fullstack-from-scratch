// multiply each lelemetn by 2

const arr = [1, 2, 3, 4, 5, 6, 7];
const newarr = arr.map((item) => 2 * item);
console.log(newarr);

// even values from the arr

const arr2 = arr.filter((item) => item % 2 === 0);
console.log(arr2);
