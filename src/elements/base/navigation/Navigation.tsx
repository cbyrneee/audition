import { useSession } from 'next-auth/react';
import React from 'react';
import NavigationRoute from './NavigationRoute';
import UserInfo from './UserInfo';

export function Navigation() {
  const { data } = useSession();
  return (
    <div className="flex flex-row gap-4 justify-between">
      <NavigationRoute name="Audition" destination="/" />
      <UserInfo />
    </div>
  );
}
