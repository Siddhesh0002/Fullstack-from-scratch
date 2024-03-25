const fs = require("fs");

const readfile = async (path) => {
  try {
    const data = fs.readFileSync(path, "utf-8");

    let a = 0;
    for (let i = 0; i < 100000000; i++) {
      a++;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
readfile("./text.txt");
