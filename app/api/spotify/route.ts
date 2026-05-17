import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID!,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN!,
});

export async function GET() {
  const data = await spotifyApi.refreshAccessToken();

  spotifyApi.setAccessToken(data.body.access_token);

  const recent = await spotifyApi.getMyRecentlyPlayedTracks({
    limit: 1,
  });

  const track = recent.body.items[0].track;

  return Response.json({
    title: track.name,
    artist: track.artists.map((a) => a.name).join(", "),
    image: track.album.images[0].url,
    url: track.external_urls.spotify,
  });
}