import express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import cors from "cors";
import env from "./utils/env";

const app = express();

// CORS
app.use(
  cors({
    origin: env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// JSON parser
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running 🚀",
  });
});

// Main API routes
app.use("/api", router);

// Important: use Railway assigned port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
