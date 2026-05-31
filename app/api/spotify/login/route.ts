import { NextResponse } from "next/server";

export async function GET() {
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

  const authUrl =
    "https://accounts.spotify.com/authorize?" +
    params.toString();

  return NextResponse.redirect(authUrl);
}