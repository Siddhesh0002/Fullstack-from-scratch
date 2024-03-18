function getLength(str) {
  console.log("length of the given string is :" + str.length);
}
getLength("Siddhesh");

function getIndexOf(str, target) {
  console.log("index is : " + str.indexOf(target));
}

getIndexOf("Siddhesh", "d");

function getSlice(str, start, end) {
  console.log("slice is : " + str.slice(start, end));
}

getSlice("SiddheshDongare", 1, 3);

const str2 = "Hello World";
console.log(str2.replace("World", "Siddhesh"));

const str3 = "jh wfwef wefwef wefsdqf ddwd fddf";
const value = str3.split(" ");
console.log(value.length);

const strTrim = "         Siddhesh       ";
console.log(strTrim.trim());
