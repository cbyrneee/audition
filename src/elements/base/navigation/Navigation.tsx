import React from 'react';
import typography from '../../../lib/typography';
import NavigationRoute from './NavigationRoute';
import { ThemeToggle } from './ThemeToggle';
import UserInfo from './UserInfo';

export function Navigation() {
  return (
    <div className="flex flex-row items-center justify-between">
      <NavigationRoute name="Audition" destination="/" />

      <div className="flex flex-row items-center gap-6">
        <UserInfo className="border-r border-r-neutral-600 pr-3" />
        <ThemeToggle className={typography.paragraph} />
      </div>
    </div>
  );
}
