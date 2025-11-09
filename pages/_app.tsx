import { appWithTranslation } from 'next-i18next';
import './globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useCircreteStore, LOCAL_STORAGE_KEY_LIKED, LOCAL_STORAGE_KEY_DISLIKED } from '@/lib/store';

const CircreteMarketplace = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY_LIKED)) {
      console.log(localStorage.getItem(LOCAL_STORAGE_KEY_LIKED));
      useCircreteStore.setState(() => ({
        liked: new Set(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LIKED)!) as number[])
      }));
    }
    if (localStorage.getItem(LOCAL_STORAGE_KEY_DISLIKED)) {
      console.log(localStorage.getItem(LOCAL_STORAGE_KEY_DISLIKED));
      // useCircreteStore.setState(() => ({
      //   disliked: new Set(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DISLIKED)!) as number[])
      // }));
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(CircreteMarketplace);
