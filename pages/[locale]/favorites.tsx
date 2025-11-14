import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

import { ElementMinimalCard } from '@/components/cards/ElementMinimalCard';
import { useCircreteStore } from '@/lib/store';
import { Navigation } from '@/components/Navigation';
import { ElementData, Elements } from '@/lib/elements';
import { SVGIcon } from '@/components/SVGIcon';

import cart from '/assets/icons/shopping_cart.svg';
import burger from '/assets/icons/burger.svg';
import home from '/assets/icons/home.svg';
import { CardRenderer } from '@/components/cards/CardRenderer';
import { useMemo } from 'react';

const Favorites: React.FC = () => {
  const { t } = useTranslation(['common', 'footer']);
  const liked = useCircreteStore((s) => s.liked);

  const elements = useMemo(
    () =>
      [...liked.values()]
        .map((index) => Elements.find((element) => element.id === index))
        .filter((element) => element) as ElementData[],
    [liked]
  );

  return (
    <>
      <Navigation
        heading={'heading'}
        links={[
          { href: 'all-elements', text: 'to-all-elements', icon: <SVGIcon src={cart.src} /> },
          { href: 'tinder-slides', text: 'to-element-swiping', icon: <SVGIcon src={burger.src} /> },
          { href: '/', text: 'back-to-home', icon: <SVGIcon src={home.src} /> }
        ]}
      />
      {elements.length ? (
        <main>
          <div>
            <p>{t('your-favorites')}</p>
            <CardRenderer detailLevel="content" elements={elements} />
          </div>
        </main>
      ) : (
        <div>{t('no-favorites')}</div>
      )}
    </>
  );
};

export default Favorites;

const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPaths, getStaticProps };

// // or if you want to merge the i18n props with other props...
// export { getStaticPaths };
// export const getStaticProps = async (ctx: any) => {
//   // some data fetched from anywhere...
//   const someOtherData = 'hello world';
//   return {
//     props: {
//       ...(await getI18nProps(ctx, ['second-page', 'common', 'footer'])),
//       someOtherData
//     }
//   };
// };
