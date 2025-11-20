import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Button } from '@/components/Button';
import { navigateTo } from '@/lib/getCorrectHref';
import { useRouter } from 'next/router';

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer']);
  const router = useRouter();

  return (
    <div className="bg-circretemokka-900 h-[100svh] flex flex-col lg:justify-end lg:gap-30 justify-around items-center">
      <Header className="text-black" heading={'h1'} title={'title'} />
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1">
        <Button className="px-4" href={navigateTo(router.asPath, '/all-elements')}>
          {t('to-all-elements')}
        </Button>
        <Button className="px-4" href={navigateTo(router.asPath, '/favorites')}>
          {t('to-favorites')}
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPaths, getStaticProps };
