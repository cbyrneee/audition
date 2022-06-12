import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import useSWRImmutable from 'swr/immutable';
import { Auth } from '../components/base';
import { HeaderContainer } from '../components/layout';
import { ArtistsList, Skeleton } from '../elements/artists';
import styles from '../lib/styles';
import typography from '../lib/typography';

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function Artists() {
  const {} = useSession({ required: true });
  const { data, error } = useSWRImmutable<SpotifyApi.ArtistObjectFull[]>('/api/artists', fetcher);

  return (
    <>
      <Head>
        <title>Audition - Artists</title>
      </Head>

      <Auth>
        <HeaderContainer>
          <h1 className={typography.title}>Artists</h1>
          <h3 className={typography.subtitle}>Here's some recommended artists based on your listening activity.</h3>

          <div className="flex mt-4">
            <a
              target="_blank"
              href="https://github.com/cbyrneee/audition"
              className={`bg-neutral-100 dark:bg-neutral-900 p-2 px-4 rounded-xl ${typography.paragraph} ${styles.press}`}
            >
              Got good recommendations? Give us a ⭐️ on GitHub!
            </a>
          </div>
        </HeaderContainer>

        {!error && data && data.length ? <ArtistsList data={data} /> : <Skeleton />}
      </Auth>
    </>
  );
}
