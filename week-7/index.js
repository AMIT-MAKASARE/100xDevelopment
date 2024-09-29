const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "asdfjkl";

const app = express();
mongoose.connect(
  "mongodb+srv://amit:AMITMAKASARE777@cluster0.vwl8d.mongodb.net/Exotica_events"
);
app.use(express.json());

app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });
  res.json({
    message: "you are login",
  });
});
app.post("/signup", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = UserModel.findOne({
    email: email,
    password: password,
  });
  console.log(user);

  if (user) {
    const token = jwt.sign({
      id: user._id,
    });
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "incorrect credentails",
    });
  }
});

app.post("/todo", function (req, res) {});
app.post("/todos", function (req, res) {});

app.listen(5000);
