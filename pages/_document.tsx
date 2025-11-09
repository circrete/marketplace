import Document, { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '../next-i18next.config';
import { Header } from '@/components/Header';

class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale as string}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,600,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
