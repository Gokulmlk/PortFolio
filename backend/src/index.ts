import "dotenv/config";
import express from "express";
import cors from "cors";
import guestbookRouter from "./routes/guestbook.js";
import spotifyRouter from "./routes/spotify.js";

const app = express();
const port = Number(process.env.PORT) || 4000;
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:3000";

app.use(
  cors({
    origin: frontendUrl,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/guestbook", guestbookRouter);
app.use("/api/spotify", spotifyRouter);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
