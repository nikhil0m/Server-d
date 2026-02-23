import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());


const users = [
{
    "att":80,
    "id":108043,
    "total_sub":14,
    "bonus":20,
    "name":"Dax"
},
{
    "att":100,
    "id":108563,
    "total_sub":14,
    "bonus":0,
    "name":"hetu"
},
{
    "att":80,
    "id":108459,
    "total_sub":14,
    "bonus":1,
    "name":"nikhil"
}];


app.get("/", (req, res) => {
  res.status(200).send("User API is running");
});


app.get("/users", (req, res) => {
  res.status(200).json(users);
});


app.get("/users/:uid", (req, res) => {
  const uid = Number(req.params.uid);
  const user = users.find(u => u.id === uid);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});


app.post("/user", (req, res) => {
const { name, att, total_sub, bonus } = req.body;

  if (!name || att === undefined || total_sub === undefined || bonus === undefined) {
    return res.status(400).json({
      message: "Name, att, total_sub and bonus are required"
    });
  }

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    att,
    total_sub,
    bonus
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.put("/users/:uid", (req, res) => {
  const uid = Number(req.params.uid);
  const userIndex = users.findIndex(u => u.id === uid);


  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, att, total_sub, bonus } = req.body;

  if (!name || att === undefined || total_sub === undefined || bonus === undefined) {
    return res.status(400).json({
      message: "Name, att, total_sub and bonus are required"
    });
  }

  users[userIndex] = { ...users[userIndex], name, att, total_sub, bonus };

  res.status(200).json(users[userIndex]);
});

app.patch("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name) user.name = req.body.name;
  if (req.body.role) user.role = req.body.role;

  res.status(200).json({
    message: "User updated",
    user
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});