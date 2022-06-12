import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Card } from '../../components/layout';
import typography from '../../lib/typography';
import styles from '../../lib/styles';

export default function Artist({ id, genres, name, images }: SpotifyApi.ArtistObjectFull) {
  const genre = genres.sort((a, b) => a.length - b.length).at(0) ?? 'Unknown';

  return (
    <Link href={`https://open.spotify.com/artist/${id}`} passHref>
      <a target="_blank">
        <Card className={`flex flex-col gap-4 items-center text-center transition-all ${styles.press}`}>
          <Image className="rounded-lg" src={images[0].url} width="80px" height="80px" />

          <div>
            <p className={`${typography.paragraph} line-clamp-1`}>{name}</p>
            <p className={`${typography.headline} line-clamp-1`}>{genre}</p>
          </div>
        </Card>
      </a>
    </Link>
  );
}
