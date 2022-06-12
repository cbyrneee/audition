import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import styles from '../../../lib/styles';

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(currentTheme === 'light' ? 'dark' : 'light');

  // We must keep track of our own 'currentTheme' variable to fix conflicts with Next.JS' hydration
  const [currentTheme, setCurrentTheme] = useState<string | undefined>('dark');
  useEffect(() => setCurrentTheme(theme), [theme, currentTheme]);

  return (
    <button onClick={changeTheme} className={`${styles.press} ${className}`}>
      {currentTheme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
}
