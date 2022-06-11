import Link from 'next/link';
import React from 'react';
import styles from '../../lib/styles';

type ButtonProps = {
  destination: string;
  children?: React.ReactNode;
  newTab?: boolean;
};

export function Button({ destination, children, newTab }: ButtonProps) {
  return (
    <Link href={destination} passHref>
      <a
        target={newTab ? '_blank' : ''}
        className={`px-4 py-2 bg-green-400 text-green-900 dark:bg-green-500 font-bold rounded-lg ${styles.press}`}
      >
        {children}
      </a>
    </Link>
  );
}
