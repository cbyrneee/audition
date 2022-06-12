import { ChartSquareBarIcon } from '@heroicons/react/outline';
import React from 'react';
import Artist from './Artist';

type ArtistListProps = {
  data: SpotifyApi.ArtistObjectFull[];
};

export function ArtistsList({ data }: ArtistListProps) {
  return (
    <div className="grid grid-flow-row gird-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {data.map((artist) => (
        <Artist {...artist} />
      ))}
    </div>
  );
}
