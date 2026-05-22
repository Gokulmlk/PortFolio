import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const clientId =
      process.env.SPOTIFY_CLIENT_ID!;
    const clientSecret =
      process.env.SPOTIFY_CLIENT_SECRET!;
    const refreshToken =
      process.env.SPOTIFY_REFRESH_TOKEN!;

    const params = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });

    const tokenResp = await axios.post(
      "https://accounts.spotify.com/api/token",
      params.toString(),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              clientId + ":" + clientSecret
            ).toString("base64"),
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken =
      tokenResp.data.access_token;

    const now = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        validateStatus: () => true,
      }
    );

    if (
      now.status === 200 &&
      now.data &&
      now.data.item
    ) {
      const track = now.data.item;

      return NextResponse.json({
        isPlaying: true,
        title: track.name,
        artist: track.artists
          .map((a: any) => a.name)
          .join(", "),
        image: track.album.images?.[0]?.url,
        url: track.external_urls.spotify,
      });
    }

    return NextResponse.json({
      isPlaying: false,
      title: null,
    });
  } catch (err: any) {
    console.error(
      "Spotify Error:",
      err.response?.data || err.message
    );

    return NextResponse.json(
      {
        error: "Failed to fetch playback",
      },
      { status: 500 }
    );
  }
}