import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

import { ElementCard } from '@/components/ElementCard';
import { useCircreteStore } from '@/lib/store';
import { Navigation } from '@/components/Navigation';
import { Elements } from '@/lib/elements';
import { SVGIcon } from '@/components/SVGIcon';
import heart from '/assets/icons/heart.svg';
import cart from '/assets/icons/shopping_cart.svg';
import customize from '/assets/icons/customize.svg';

const Favorites: React.FC = () => {
  const { t } = useTranslation(['common', 'footer']);
  const liked = useCircreteStore((s) => s.liked);

  return (
    <>
      <Navigation
        heading={'heading'}
        links={[
          { href: 'tinder-slides', text: 'to-element-swiping', icon: <SVGIcon src={heart.src} /> },
          { href: 'tinder-slides', text: 'to-element-swiping', icon: <SVGIcon src={cart.src} /> },
          { href: 'tinder-slides', text: 'to-element-swiping', icon: <SVGIcon src={customize.src} /> }
        ]}
      />
      <main className="w-[calc(min(100vw,1200px)-50px)] mx-auto">
        <div className="mt-[65px] w-[calc(min(100vw,1200px)-50px)] mx-auto">
          <p>{t('your-favorites')}</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 p-8">
            {liked.values().map((index) => (
              <ElementCard element={Elements[index]} />
            ))}
          </div>
        </div>
      </main>
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
