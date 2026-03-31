const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/apply", async (req, res) => {
  const {
    studentName,
    parentName,
    email,
    phone,
    className,
    dob,
    address,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Application",
      html: `
        <h2>New Student Application</h2>
        <p><b>Name:</b> ${studentName}</p>
        <p><b>Parent:</b> ${parentName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Class:</b> ${className}</p>
        <p><b>DOB:</b> ${dob}</p>
        <p><b>Address:</b> ${address}</p>
      `,
    });

    res.json({ message: "Application sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Email failed" });
  }
});

module.exports = router;