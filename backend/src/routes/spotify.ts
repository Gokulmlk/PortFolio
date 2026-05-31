import { Router } from "express";
import axios from "axios";
import { getPlayback } from "../services/spotify.js";

const router = Router();

router.get("/playback", async (_req, res) => {
  try {
    const playback = await getPlayback();
    res.json(playback);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    const details =
      axios.isAxiosError(err) ? err.response?.data : undefined;
    console.error("Spotify Error:", details || message);
    res.status(500).json({ error: "Failed to fetch playback" });
  }
});

router.get("/login", (_req, res) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI!;

  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
  ].join(" ");

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: scopes,
    redirect_uri: redirectUri,
    state: "123",
  });

  res.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );
});

router.get("/callback", async (req, res) => {
  const code = req.query.code as string | undefined;

  if (!code) {
    res.status(400).json({ error: "No code provided" });
    return;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI!;

  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
  });

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      params.toString(),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const refresh_token = response.data.refresh_token;

    res.type("html").send(`
      <h2>Your Spotify Refresh Token:</h2>
      <pre>${refresh_token}</pre>
      <br/>
      <p>Add this to backend/.env:</p>
      <pre>SPOTIFY_REFRESH_TOKEN=${refresh_token}</pre>
    `);
  } catch (err: unknown) {
    const details = axios.isAxiosError(err) ? err.response?.data : undefined;
    console.error(details || err);
    res.status(500).json({
      error: "Token exchange failed",
      details,
    });
  }
});

export default router;
