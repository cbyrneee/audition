import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto items-center flex justify-between h-full min-h-screen w-full max-w-4xl flex-col gap-8 p-4 pt-8 lg:p-0 lg:py-12 md:items-start">
      {children}
    </div>
  );
}
