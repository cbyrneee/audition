import Link from 'next/link';
import React from 'react';
import styles from '../../../lib/styles';
import typography from '../../../lib/typography';

export default function GitHubLink() {
  return (
    <Link href="https://github.com/cbyrneee/audition" passHref>
      <a
        target="_blank"
        className={`bg-neutral-100 dark:bg-neutral-900 p-2 px-4 rounded-xl ${typography.paragraph} ${styles.press}`}
      >
        Got good recommendations? Give us a ⭐️ on GitHub!
      </a>
    </Link>
  );
}
