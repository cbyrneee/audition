import React from 'react';
import typography from '../../lib/typography';

export function Header() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={typography.title}>Audition</h1>
      <h3 className={typography.subtitle}>Find new artists on Spotify based on your music taste!</h3>
    </div>
  );
}
