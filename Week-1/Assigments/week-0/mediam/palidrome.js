function palidrome(str) {
  let flag = true;
  let l = 0,
    r = str.length - 1;
  while (r > l) {
    if (str.charAt(l) == str.charAt(r)) {
      l++;
      r--;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(palidrome("aaaabaaaa"));
