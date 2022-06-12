import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white text-black dark:bg-black dark:text-white transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
