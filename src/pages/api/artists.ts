import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import SpotifyWebApi from 'spotify-web-api-node';
import { getArtists, getRandomTopArtists } from '../../lib/spotify';

const secret = process.env.NEXTAUTH_SECRET;
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jwt = await getToken({ req, secret });
  const accessToken = jwt?.accessToken;

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
      limit: 50,
    });

    const artistIDs: string[] = [];
    recommendations.body.tracks.forEach((track) => {
      const id = track.artists[0].id;
      if (!artistIDs.includes(id)) artistIDs.push(id);
    });

    const recommendedArtists = await getArtists(client, artistIDs.slice(0, 20));
    return res.status(200).json(recommendedArtists);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: 'Bad request' });
  }
}
