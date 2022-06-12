import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import SpotifyWebApi from 'spotify-web-api-node';
import { getRandomTopArtists } from '../../lib/spotify';

const secret = process.env.NEXTAUTH_SECRET;
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jwt = await getToken({ req, secret });
  const accessToken = jwt?.accessToken;

  console.log(jwt);

  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const client = new SpotifyWebApi({ accessToken, clientId });
    const topArtists = await getRandomTopArtists(client, 5);
    const recommendations = await client.getRecommendations({
      min_energy: 0.0,
      min_popularity: 0.0,
      seed_artists: topArtists.map((it) => it.id),
    });

    const artists = recommendations.body.tracks.map((track) => track.artists[0]);
    return res.status(recommendations.statusCode).json(artists);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: 'Bad request' });
  }
}
