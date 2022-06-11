import Link from 'next/link';
import React from 'react';
import styles from '../../lib/styles';

type ButtonProps = {
  destination?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  newTab?: boolean;
};

export function Button({ destination, onClick, children, newTab }: ButtonProps) {
  const content = (
    <div className={`px-4 py-2 bg-green-400 text-green-900 dark:bg-green-500 font-bold rounded-lg ${styles.press}`}>
      {children}
    </div>
  );

  if (destination) {
    return <Link href={destination} children={content} />;
  } else {
    return <button onClick={onClick}>{content}</button>;
  }
}
