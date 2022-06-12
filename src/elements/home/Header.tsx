import { signIn } from 'next-auth/react';
import React from 'react';
import { Button } from '../../components/control';
import { ButtonGroup, HeaderContainer } from '../../components/layout';
import typography from '../../lib/typography';

export function Header() {
  return (
    <HeaderContainer>
      <h1 className={typography.title}>Audition</h1>
      <h3 className={typography.subtitle}>Find new artists on Spotify based on your music taste!</h3>

      <ButtonGroup className="mt-4">
        <Button
          className="bg-green-400 text-green-900 dark:bg-green-500"
          onClick={() => {
            signIn('spotify', { callbackUrl: '/artists' });
          }}
        >
          Login with Spotify
        </Button>
      </ButtonGroup>
    </HeaderContainer>
  );
}
