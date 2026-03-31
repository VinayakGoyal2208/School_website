require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Models/db");
connectDB();

const app = express();
 
// Middleware
app.use(
  cors({
    origin: "https://school-1uy4.onrender.com/",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", require("./Routes/AuthRouter"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});