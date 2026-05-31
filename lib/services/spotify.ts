import axios from "axios";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET =
  process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN =
  process.env.SPOTIFY_REFRESH_TOKEN!;

const TOKEN_URL =
  "https://accounts.spotify.com/api/token";

// ── Get Spotify access token ─────────────────────
export async function getAccessToken() {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: REFRESH_TOKEN,
  });

  const response = await axios.post(
    TOKEN_URL,
    params.toString(),
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            CLIENT_ID + ":" + CLIENT_SECRET
          ).toString("base64"),
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data.access_token;
}

// ── Get currently playing track ─────────────────
export async function getNowPlaying() {
  try {
    const accessToken =
      await getAccessToken();

    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        validateStatus: () => true,
      }
    );

    // Nothing currently playing
    if (response.status === 204) {
      return null;
    }

    if (
      response.status !== 200 ||
      !response.data?.item
    ) {
      return null;
    }

    const track = response.data.item;

    return {
      isPlaying: response.data.is_playing,
      title: track.name,
      artist: track.artists
        .map((a: any) => a.name)
        .join(", "),
      image: track.album.images?.[0]?.url,
      url: track.external_urls.spotify,
    };
  } catch (error: any) {
    console.error(
      "Spotify Error:",
      error.response?.data || error.message
    );

    return null;
  }
}