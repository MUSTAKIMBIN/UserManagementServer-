const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("First Server Deployment Successful");
});

const user = [
  { id: 1, name: "mustakim", email: "mustakim@game.com" },
  { id: 1, name: "vaiya", email: "vaiya@game.com" },
  { id: 1, name: "AlexHOr", email: "AlexHOr@game.com" },
  { id: 1, name: "LilaHOr", email: "LilaHOr@game.com" },
];

// send all user to client
app.get("/users", (req, res) => {
  res.send(user);
});

app.listen(port, () => {
  console.log(`app is running on port : ${port}`);
});
