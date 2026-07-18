require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");

const logger = require("./middleware/logger");
const limiter = require("./middleware/rateLimiter");

const userRoutes = require("./routes/userRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(logger);

app.use(limiter);

app.get("/", (req, res) => {
    res.json({
        message: "Mission 3 Backend API Running..."
    });
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
