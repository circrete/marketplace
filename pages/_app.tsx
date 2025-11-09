import { appWithTranslation } from 'next-i18next';
import './globals.css';
import Head from 'next/head';

const CircreteMarketplace = ({ Component, pageProps }: { Component: any; pageProps: any }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(CircreteMarketplace);
