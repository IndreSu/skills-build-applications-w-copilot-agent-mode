import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/octofit";

app.use(cors());
app.use(express.json());

const users = [
  { id: "u1", name: "Alice", email: "alice@example.com", role: "trainer" },
  { id: "u2", name: "Bob", email: "bob@example.com", role: "athlete" },
  { id: "u3", name: "Cara", email: "cara@example.com", role: "athlete" }
];

const teams = [
  { id: "t1", name: "Team Phoenix", members: ["Alice", "Bob"] },
  { id: "t2", name: "Team Titan", members: ["Cara"] }
];

const workouts = [
  { id: "w1", user: "Bob", type: "Cardio", durationMinutes: 45, caloriesBurned: 420 },
  { id: "w2", user: "Cara", type: "Strength", durationMinutes: 55, caloriesBurned: 500 }
];

const leaderboard = [
  { rank: 1, team: "Team Phoenix", score: 980 },
  { rank: 2, team: "Team Titan", score: 860 }
];

const apiRouter = express.Router();

apiRouter.get("/users", (_, res) => {
  res.json(users);
});

apiRouter.get("/teams", (_, res) => {
  res.json(teams);
});

apiRouter.get("/workouts", (_, res) => {
  res.json(workouts);
});

apiRouter.get("/leaderboard", (_, res) => {
  res.json(leaderboard);
});

app.use("/api", apiRouter);

app.get("/", (_, res) => {
  res.json({ status: "ok", message: "OctoFit Tracker backend is running" });
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  })
  .finally(startServer);
