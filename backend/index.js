const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");



dotenv.config();
// connectDB(); 
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
