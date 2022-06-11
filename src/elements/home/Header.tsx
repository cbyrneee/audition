import React from 'react';
import { Button } from '../../components/control';
import { ButtonGroup } from '../../components/layout';
import { getAuthURL } from '../../lib/spotify';
import typography from '../../lib/typography';

export function Header() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={typography.title}>Audition</h1>
      <h3 className={typography.subtitle}>Find new artists on Spotify based on your music taste!</h3>

      <ButtonGroup className="mt-4">
        <Button destination={getAuthURL()}>Login with Spotify</Button>
      </ButtonGroup>
    </div>
  );
}
