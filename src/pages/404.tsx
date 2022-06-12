import React from 'react';
import { Button } from '../components/control';
import { ButtonGroup, HeaderContainer } from '../components/layout';
import typography from '../lib/typography';

export default function NotFound() {
  return (
    <HeaderContainer>
      <h1 className={typography.title}>404</h1>
      <h3 className={typography.subtitle}>Oops! That page could not be found.</h3>

      <ButtonGroup className="mt-4">
        <Button className="bg-blue-400 text-blue-900 dark:bg-blue-500" destination={'/'}>
          Go back
        </Button>
      </ButtonGroup>
    </HeaderContainer>
  );
}
