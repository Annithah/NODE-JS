//in controller we import the model in order to interact with the database
const User = require("../models/User");

const Hello = async (req, res) => {
  res.json({ message: "Hello World" });
};

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(error.message);
  }
};

module.exports = {
  Hello,
  getUsers,
  createUser,
};
