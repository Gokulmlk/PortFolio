import axios from "axios";

const TOKEN_URL = "https://accounts.spotify.com/api/token";

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const tokenResp = await axios.post(TOKEN_URL, params.toString(), {
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return tokenResp.data.access_token;
}

export interface PlaybackResponse {
  isPlaying: boolean;
  title: string | null;
  artist?: string;
  image?: string | null;
  url?: string;
  error?: string;
}

export async function getPlayback(): Promise<PlaybackResponse> {
  const accessToken = await getAccessToken();

  const now = await axios.get(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      validateStatus: () => true,
    }
  );

  if (now.status === 200 && now.data?.item) {
    const track = now.data.item;
    return {
      isPlaying: now.data.is_playing ?? true,
      title: track.name,
      artist: track.artists.map((a: { name: string }) => a.name).join(", "),
      image: track.album.images?.[0]?.url ?? null,
      url: track.external_urls.spotify,
    };
  }

  const recent = await axios.get(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      validateStatus: () => true,
    }
  );

  const lastTrack = recent.data?.items?.[0]?.track;
  if (recent.status === 200 && lastTrack) {
    return {
      isPlaying: false,
      title: lastTrack.name,
      artist: lastTrack.artists
        .map((a: { name: string }) => a.name)
        .join(", "),
      image: lastTrack.album.images?.[0]?.url ?? null,
      url: lastTrack.external_urls.spotify,
    };
  }

  return { isPlaying: false, title: null };
}
