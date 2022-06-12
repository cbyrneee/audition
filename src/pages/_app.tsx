import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { PageContainer } from '../components/layout/PageContainer';
import { Footer, Navigation } from '../elements/base';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <PageContainer>
          <div className="flex flex-col gap-8 w-full">
            <Navigation />
            <Component {...pageProps} />
          </div>
          <Footer />
        </PageContainer>
      </ThemeProvider>
    </SessionProvider>
  );
}
