import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Container } from '../components/layout/Container';
import { Footer } from '../elements/base';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
