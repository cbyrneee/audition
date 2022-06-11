import React from 'react';
import { Button } from '../components/control';
import { ButtonGroup } from '../components/layout';
import typography from '../lib/typography';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={typography.title}>404</h1>
      <h3 className={typography.subtitle}>Oops! That page could not be found.</h3>

      <ButtonGroup className="mt-4">
        <Button destination={'/'}>Go back</Button>
      </ButtonGroup>
    </div>
  );
}
