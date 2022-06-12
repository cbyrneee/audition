import { useSession } from 'next-auth/react';
import React from 'react';
import useSWRImmutable from 'swr/immutable';
import { Auth } from '../components/base';
import { HeaderContainer } from '../components/layout';
import { ArtistsList } from '../elements/artists';
import typography from '../lib/typography';

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function Artists() {
  const {} = useSession({ required: true });
  const { data, error } = useSWRImmutable<SpotifyApi.ArtistObjectFull[]>('/api/artists', fetcher);

  return (
    <Auth>
      <HeaderContainer>
        <h1 className={typography.title}>Artists</h1>
        <h3 className={typography.subtitle}>Here's some recommended artists based on your listening activity.</h3>
      </HeaderContainer>

      {!error && data ? <ArtistsList data={data} /> : <></>}
    </Auth>
  );
}
