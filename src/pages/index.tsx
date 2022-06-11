import Head from 'next/head';
import { ThemeToggle } from '../elements/base';

export default function Home() {
  return (
    <>
      <Head>
        <title>Audition</title>
      </Head>

      <h1 className="text-4xl font-bold">Hello World</h1>
      <ThemeToggle />
    </>
  );
}
