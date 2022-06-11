import Head from 'next/head';
import typography from '../lib/typography';

export default function Home() {
  return (
    <>
      <Head>
        <title>Audition</title>
      </Head>

      <div>
        <h1 className={typography.title}>Audition</h1>
      </div>
    </>
  );
}
