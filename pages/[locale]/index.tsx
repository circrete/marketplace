import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import Link from '../../components/Link';

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer']);

  return (
    <>
      <main className="bg-circretemokka-900">
        <Header className="text-black" heading={'h1'} title={'title'} />
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1">
          <Link href="/all-elements">
            <button type="button">{t('to-all-elements')}</button>
          </Link>
          <Link href="/favorites">
            <button type="button">{t('to-favorites')}</button>
          </Link>
          <Link href="/tinder-slides">
            <button type="button">{t('to-element-swiping')}</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPaths, getStaticProps };
