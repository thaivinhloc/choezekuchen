import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* App Configs */}

        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link href="/icon.ico" rel="icon" type="image/png" sizes="48x48" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;700&display=swap"
          rel="stylesheet"
        />

        <title>Choeze Kuchen | Life Long Tibetan Buddhism Practice</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
