import React from 'react';
import { HeaderContainer } from '../../../components/layout';
import typography from '../../../lib/typography';
import GitHubLink from './GitHubLink';

export function Header() {
  return (
    <HeaderContainer>
      <h1 className={typography.title}>Artists</h1>
      <h3 className={typography.subtitle}>Here's some recommended artists based on your listening activity.</h3>

      <div className="flex mt-4">
        <GitHubLink />
      </div>
    </HeaderContainer>
  );
}
