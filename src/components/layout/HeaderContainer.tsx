import React from 'react';

type HeaderContainerProps = {
  children?: React.ReactNode;
};

export function HeaderContainer({ children }: HeaderContainerProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
