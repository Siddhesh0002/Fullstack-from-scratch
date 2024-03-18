const fs = require("fs");

function readFileTest() {
  console.log("level 1");
  return new Promise(function (resolve) {
    console.log("level-2");
    fs.readFile("./Arrays.js", "utf8", function (err, data) {
      console.log("level-3");
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

readFileTest().then(onDone);

//output will be level-1, level-2, level-3, data

var d = new Promise(function (resolve) {}); // initializing promise and 1st arg should be a fn and it should have 1 arg resolve

var prom = new Promise(function (resolve) {
  resolve("Siddhesh");
});
function onDone() {
  console.log(prom);
}
console.log(prom); // this will return >pending>
prom.then(onDone); // this will return siddhesh
