import { Session } from 'next-auth';
import React from 'react';
import { Card } from '../../components/layout';
import Image from 'next/image';
import typography from '../../lib/typography';

type UserInfoProps = {
  session: Session;
};

export function UserInfo({ session }: UserInfoProps) {
  return (
    <Card>
      {session.user ? (
        <div className="flex flex-row gap-2 items-center">
          {session.user.image && <Image className="rounded-md" src={session.user.image} width="50px" height="50px" />}

          <div>
            <p className={typography.headline}>Logged in as</p>
            <h5 className={typography.subtitle}>{session.user.name}</h5>
          </div>
        </div>
      ) : (
        <p className={typography.headline}>Not logged in!</p>
      )}
    </Card>
  );
}
