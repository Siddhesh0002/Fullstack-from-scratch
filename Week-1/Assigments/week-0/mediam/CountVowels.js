function cntVow(str) {
  const str2 = str.toLowerCase();
  const arr = str2.split("");
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "a" ||
      arr[i] == "o" ||
      arr[i] == "i" ||
      arr[i] == "u" ||
      arr[i] == "e"
    ) {
      cnt++;
    }
  }
  return cnt;
}

console.log(cntVow("aeiuouhefeheo"));
