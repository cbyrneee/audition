import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { PageContainer } from '../components/layout/PageContainer';
import { Footer } from '../elements/base';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <PageContainer>
          <Component {...pageProps} />
          <Footer />
        </PageContainer>
      </ThemeProvider>
    </SessionProvider>
  );
}
