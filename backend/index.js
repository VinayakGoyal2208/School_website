require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Models/db");
const applyRoutes = require("./Routes/ApplyRouter");
connectDB();

const app = express();
app.use(express.json());
 
// Middleware
app.use(
  cors({
    origin: "https://school-website-4klr.onrender.com",
    credentials: true,
  })
);
app.use("/api", applyRoutes);

// Routes
app.use("/api/auth", require("./Routes/AuthRouter"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
