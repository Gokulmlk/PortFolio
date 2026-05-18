const CLIENT_ID     = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

const TOKEN_URL     = "https://accounts.spotify.com/api/token";
const NOW_PLAYING   = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

// ── Get a fresh access token using the refresh token ─────────────
async function getAccessToken(): Promise<string> {
  const res = await fetch(TOKEN_URL, {
    method:  "POST",
    headers: {
      Authorization:  `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type:    "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const data = await res.json();
  return data.access_token;
}

// ── Main function: currently playing OR last played ───────────────
export async function getNowPlaying() {
  const accessToken = await getAccessToken();

  const headers = { Authorization: `Bearer ${accessToken}` };

  // Try currently playing first
  const nowRes = await fetch(NOW_PLAYING, { headers });

  if (nowRes.status === 200) {
    const data = await nowRes.json();

    // Make sure it's a track (not podcast)
    if (data.item && data.currently_playing_type === "track") {
      return {
        isPlaying:  true,
        title:      data.item.name,
        artist:     data.item.artists.map((a: any) => a.name).join(", "),
        album:      data.item.album.name,
        albumArt:   data.item.album.images[0]?.url ?? null,
        songUrl:    data.item.external_urls.spotify,
      };
    }
  }

  // Fallback → last played track
  const recentRes = await fetch(RECENTLY_PLAYED, { headers });

  if (recentRes.status === 200) {
    const data  = await recentRes.json();
    const track = data.items[0]?.track;

    if (track) {
      return {
        isPlaying: false,
        title:     track.name,
        artist:    track.artists.map((a: any) => a.name).join(", "),
        album:     track.album.name,
        albumArt:  track.album.images[0]?.url ?? null,
        songUrl:   track.external_urls.spotify,
      };
    }
  }

  // Nothing found
  return null;
}