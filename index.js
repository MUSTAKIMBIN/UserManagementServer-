const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("First Server Deployment Successful");
});

const user = [
  { id: 1, name: "mustakim", email: "mustakim@game.com" },
  { id: 2, name: "vaiya", email: "vaiya@game.com" },
  { id: 3, name: "AlexHOr", email: "AlexHOr@game.com" },
  { id: 4, name: "LilaHOr", email: "LilaHOr@game.com" },
];

// send all user to client
app.get("/users", (req, res) => {
  res.send(user);
});

// post user to server
app.post("/users", (req, res) => {
  console.log(`post mathod called`, req.body);
  const newUser = req.body;
  newUser.id = user.length + 1;
  user.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`app is running on port : ${port}`);
});
