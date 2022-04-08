import { Html, Head, Main, NextScript } from "next/document";

const AppDocument = (): JSX.Element => (
  <Html lang="en-US">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="bg-gray-100">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default AppDocument;
