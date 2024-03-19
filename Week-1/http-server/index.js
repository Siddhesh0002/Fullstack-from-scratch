const express = require("express");
const app = express();
const port = 3001;
app.get("/", (req, res) => {
  res.send("hello World");
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
