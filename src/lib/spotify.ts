import SpotifyWebApi from 'spotify-web-api-node';

export function getAuthURL() {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const scope = process.env.NEXT_PUBLIC_SCOPE;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  return `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`;
}

export async function getRandomTopArtists(
  client: SpotifyWebApi,
  limit: number,
): Promise<SpotifyApi.ArtistObjectSimplified[]> {
  const response = await client.getMyTopArtists();
  return response.body.items.sort(() => 0.5 - Math.random()).slice(0, limit);
}

export async function getArtists(client: SpotifyWebApi, ids: string[]): Promise<SpotifyApi.ArtistObjectFull[]> {
  const response = await client.getArtists(ids);
  return response.body.artists;
}
