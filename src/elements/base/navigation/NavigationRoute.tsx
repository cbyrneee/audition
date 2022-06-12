import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../../lib/styles';

type Route = {
  name: string;
  destination: string;
  external?: boolean;
};

export default function NavigationRoute({ name, destination, external }: Route) {
  return (
    <Link href={destination} passHref>
      <a
        target={external ? '_blank' : ''}
        className={`select-none text-neutral-700 transition-all dark:text-neutral-400 ${styles.press}`}
      >
        {name}
      </a>
    </Link>
  );
}
