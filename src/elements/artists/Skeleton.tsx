import React from 'react';
import { Card } from '../../components/layout';

export function Skeleton() {
  return (
    <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {new Array(20).fill(0).map(() => (
        <Card className="w-full h-36 animate-pulse" />
      ))}
    </div>
  );
}
