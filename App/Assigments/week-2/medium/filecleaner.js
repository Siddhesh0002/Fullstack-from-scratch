//

const fs = require("fs");

const filecleaner = async (path) => {
  try {
    let data = fs.readFileSync(path, "utf-8");
    data = data.replace(/\s+/g, " ");
    console.log(data);
    fs.writeFileSync("text.txt", data, (err) => {
      console.log(err);
    });
  } catch (error) {
    console.log(error);
  }
};

filecleaner("./text.txt");
