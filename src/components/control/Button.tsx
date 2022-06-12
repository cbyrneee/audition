import Link from 'next/link';
import React from 'react';
import styles from '../../lib/styles';

type ButtonProps = {
  className?: string;
  destination?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  newTab?: boolean;
};

export function Button({ className, destination, onClick, children, newTab }: ButtonProps) {
  const content = <div className={`${className} px-4 py-2 font-bold rounded-lg ${styles.press}`}>{children}</div>;

  if (destination) {
    return (
      <Link href={destination}>
        <a>{content}</a>
      </Link>
    );
  } else {
    return <button onClick={onClick}>{content}</button>;
  }
}
