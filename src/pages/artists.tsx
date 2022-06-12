import { useSession } from 'next-auth/react';
import React from 'react';
import { Auth } from '../components/base';
import { HeaderContainer } from '../components/layout';
import typography from '../lib/typography';

export default function Artists() {
  const { data } = useSession({ required: true });

  if (!data || !data.user) {
    return <></>;
  }

  return (
    <Auth>
      <HeaderContainer>
        <h1 className={typography.title}>Artists</h1>
        <h3 className={typography.subtitle}>Here's some recommended artists based on your listening activity.</h3>
      </HeaderContainer>
    </Auth>
  );
}
