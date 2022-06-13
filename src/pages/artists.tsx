import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import useSWRImmutable from 'swr/immutable';
import { Auth } from '../components/base';
import { ArtistsList, Header, Skeleton } from '../elements/artists';

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function Artists() {
  const {} = useSession({ required: true });
  const { data, error } = useSWRImmutable<SpotifyApi.ArtistObjectFull[]>('/api/artists', fetcher);

  return (
    <Auth>
      <Head>
        <title>Audition - Artists</title>
      </Head>

      <Header />
      {!error && data?.length ? <ArtistsList data={data} /> : <Skeleton />}
    </Auth>
  );
}
