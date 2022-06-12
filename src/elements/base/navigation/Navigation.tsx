import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import NavigationRoute from './NavigationRoute';

export function Navigation() {
  const { data } = useSession();
  return (
    <div className="flex flex-row gap-4 justify-between">
      <NavigationRoute name="Audition" destination="/" />
    </div>
  );
}
