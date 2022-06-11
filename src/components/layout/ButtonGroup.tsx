import React from 'react';

type ButtonGroupProps = {
  className?: string;
  children?: React.ReactNode;
};

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return <div className={`flex flex-row gap-4 ${className ? className : ''}`}>{children}</div>;
}
