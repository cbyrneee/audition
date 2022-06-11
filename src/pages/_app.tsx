import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { PageContainer } from '../components/layout/PageContainer';
import { Footer } from '../elements/base';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
      <PageContainer>
        <Component {...pageProps} />
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
}
