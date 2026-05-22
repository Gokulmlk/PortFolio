import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "No code provided" },
      { status: 400 }
    );
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret =
    process.env.SPOTIFY_CLIENT_SECRET!;
  const redirectUri =
    process.env.SPOTIFY_REDIRECT_URI!;

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
            Buffer.from(
              clientId + ":" + clientSecret
            ).toString("base64"),
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      }
    );

    const refresh_token =
      response.data.refresh_token;

    return new NextResponse(
      `
      <h2>Your Spotify Refresh Token:</h2>
      <pre>${refresh_token}</pre>
      <br/>
      <p>Add this to .env.local:</p>
      <pre>SPOTIFY_REFRESH_TOKEN=${refresh_token}</pre>
      `,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  } catch (err: any) {
    console.error(err.response?.data || err.message);

    return NextResponse.json(
      {
        error: "Token exchange failed",
        details: err.response?.data,
      },
      { status: 500 }
    );
  }
}