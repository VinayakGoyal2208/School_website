const User = require("../Models/Users");
const bcrypt = require("bcryptjs");

// REGISTER
exports.registerUser = async (req, res) => {
  try {
    const {
      studentName,
      parentName,
      email,
      phone,
      classApplyingFor,
      password,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      studentName,
      parentName,
      email,
      phone,
      classApplyingFor,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ msg: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const jwt = require("jsonwebtoken");

// LOGIN
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        studentName: user.studentName,
        classApplyingFor: user.classApplyingFor,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
