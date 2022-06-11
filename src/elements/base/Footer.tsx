import React from 'react';
import typography from '../../lib/typography';
import { ThemeToggle } from './ThemeToggle';

export function Footer() {
  return (
    <div className="flex flex-row md:gap-3">
      <div className={`hidden md:inline border-r-2 pr-3 border-current ${typography.paragraph}`}>
        <ThemeToggle />
      </div>

      <p className={typography.paragraph}>Made with ❤️ by Conor Byrne</p>
    </div>
  );
}
