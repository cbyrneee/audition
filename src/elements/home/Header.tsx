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
          onClick={() => {
            signIn(undefined, {});
          }}
        >
          Login with Spotify
        </Button>
      </ButtonGroup>
    </HeaderContainer>
  );
}
