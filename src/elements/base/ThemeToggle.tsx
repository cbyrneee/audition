import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(currentTheme === 'light' ? 'dark' : 'light');

  // We must keep track of our own 'currentTheme' variable to fix conflicts with Next.JS' hydration
  const [currentTheme, setCurrentTheme] = useState<string | undefined>('dark');
  useEffect(() => setCurrentTheme(theme), [theme, currentTheme]);

  return (
    <>
      <button onClick={changeTheme} className="transition-all hover:opacity-70">
        Use {currentTheme === 'dark' ? 'light' : 'dark'} mode
      </button>
    </>
  );
}
