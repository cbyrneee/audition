import Head from 'next/head';
import { Header } from '../elements/home';
import typography from '../lib/typography';

export default function Home() {
  return (
    <>
      <Head>
        <title>Audition</title>
      </Head>

      <Header />
    </>
  );
}
