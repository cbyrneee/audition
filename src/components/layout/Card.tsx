import React from 'react';

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div className={`p-4 border-neutral-200 rounded-lg border-2 dark:border-neutral-800 ${className}`}>{children}</div>
  );
}
