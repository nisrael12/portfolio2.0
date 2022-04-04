import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="A simple HTML5 Template for new projects." />
      <meta name="author" content="SitePoint" />
      <meta property="og:title" content="A Basic HTML5 Template" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/" />
      <meta property="og:description" content="A simple HTML5 Template for new projects." />
      <meta property="og:image" content="image.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:wght@400;700&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/7574c101d8.js" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};