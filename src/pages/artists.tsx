import { useSession } from 'next-auth/react';
import React from 'react';
import { Auth } from '../components/base';
import { HeaderContainer } from '../components/layout';
import typography from '../lib/typography';
import { UserInfo } from '../elements/artists';

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

        <div className="md:flex mt-4">
          <UserInfo session={data} />
        </div>
      </HeaderContainer>
    </Auth>
  );
}
