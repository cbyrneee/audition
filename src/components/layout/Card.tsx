import React from 'react';

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={`p-4 bg-neutral-100 border-neutral-200 dark:bg-neutral-800 border rounded-lg dark:border-neutral-700 ${className}`}
    >
      {children}
    </div>
  );
}
