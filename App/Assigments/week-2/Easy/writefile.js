const fs = require("fs");

fs.writeFileSync("new.txt", "dgerhgeveve", (err) => {
  if (err) throw err;
});
