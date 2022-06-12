import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { Button } from '../../components/control';
import { ButtonGroup, HeaderContainer } from '../../components/layout';
import typography from '../../lib/typography';

export function Header() {
  const { data } = useSession();
  return (
    <HeaderContainer>
      <h1 className={typography.title}>Audition</h1>
      <h3 className={typography.subtitle}>Find new artists on Spotify based on your music taste!</h3>

      <ButtonGroup className="mt-4">
        {!data ? (
          <Button
            className="bg-green-400 text-green-900 dark:bg-green-500"
            onClick={() => {
              signIn('spotify', { callbackUrl: '/artists' });
            }}
          >
            Login with Spotify
          </Button>
        ) : (
          <Button destination="/artists" className="bg-blue-400 text-blue-900 dark:bg-blue-500">
            View Artists
          </Button>
        )}
      </ButtonGroup>
    </HeaderContainer>
  );
}
