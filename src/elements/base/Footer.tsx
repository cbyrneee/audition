import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Footer() {
  return (
    <div className="flex flex-row md:gap-3 bg-neutral-100 py-2 px-4 lg:p-0 lg:bg-transparent rounded-xl text-neutral-700 transition-all hover:opacity-70 dark:text-neutral-400">
      <div className="hidden md:inline border-r-2 pr-3 border-current">
        <ThemeToggle />
      </div>

      <p>Made with ❤️ by Conor Byrne</p>
    </div>
  );
}
