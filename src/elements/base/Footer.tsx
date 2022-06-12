import React from 'react';
import typography from '../../lib/typography';

export function Footer() {
  return (
    <div className="flex flex-row md:gap-3">
      <p className={typography.paragraph}>Made with ❤️ by Conor Byrne</p>
    </div>
  );
}
