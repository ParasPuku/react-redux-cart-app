const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = new User({ username, password: hashedPassword });
    await user.save();

    // Create and sign a JWT token
    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logoutUser = (req, res) => {
  // Remove the JWT token from the client
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
};
