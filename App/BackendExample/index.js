const express = require("express");
const app = express();
app.use(express.json());
var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// get all
app.get("/", (req, res) => {
  const johKidney = users[0].kidneys;
  const totalJohnKid = johKidney.length;
  const healthyKid = johKidney.filter((x) => x.healthy == true).length;
  const unhealthyKid = totalJohnKid - healthyKid;
  res.json({ totalJohnKid, healthyKid, unhealthyKid });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json("Kidney Added");
});

app.put("/", (req, res) => {
  let size = users[0].kidneys;
  for (let i = 0; i < size; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json("All kidneys are healthy now");
});

app.delete("/", (req, res) => {
  let size = users[0].kidneys;
  const newkid = [];
  for (let i = 0; i < size; i++) {
    if (users[0].kidneys[i].healthy) {
      newkid.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newkid;
  res.json("All kidneys are Helthy");
});

app.listen(3001);
