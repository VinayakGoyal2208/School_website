const express = require("express");
const router = express.Router();
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/apply", async (req, res) => {
  const data = req.body;

  
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // default (works for testing)
      to: process.env.EMAIL_USER, // your email
      subject: "New Student Application",
      html: `
      <h2>New Student Application</h2>
      <p><b>Name:</b> ${data.studentName}</p>
      <p><b>Parent:</b> ${data.parentName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Class:</b> ${data.className}</p>
      <p><b>DOB:</b> ${data.dob}</p>
      <p><b>Address:</b> ${data.address}</p>
      `,
    });
    // ✅ instant response (fast UX)
    res.json({ message: "Application submitted successfully" });
  } catch (err) {
    console.log("Resend error:", err);
    // ❌ send failure if email fails
    res.status(500).json({ message: "Failed to send application" });
  }
});

module.exports = router;