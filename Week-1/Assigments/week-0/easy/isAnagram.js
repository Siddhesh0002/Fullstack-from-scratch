function isAnagrm(str1, str2) {
  const char1 = str1.split("").sort();
  console.log(char1);
  const char2 = str2.split("").sort();
  if (char1.length !== char2.length) return false;
  for (let i = 0; i < char1.length; i++) {
    if (char1[i] !== char2[i]) return false;
  }
  return true;
}

console.log(isAnagrm("aaabbbccc", "cccbbbaaa"));

function isAnagram(str1, str2) {
  const s1 = sortString(str1);
  const s2 = sortString(str2);
  if (s1 === s2) return true;
  return false;
}

function sortString(str) {
  const chr = str.split("");
  const strNew = chr.sort().join("");
  console.log(strNew);
  return strNew;
}

console.log(isAnagram("abcabcabc", "aaabbbccc"));
