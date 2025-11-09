import { useRouter } from 'next/router';
import { getStaticPathsWithAdditionalParams, makeStaticProps } from '../../../lib/getStatic';
import { useTranslation } from 'react-i18next';
import { Elements } from '@/lib/elements';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ElementContentCard } from '@/components/ElementContentCard';
import { SVGIcon } from '@/components/SVGIcon';
import heart from '/assets/icons/heart.svg';
import cart from '/assets/icons/shopping_cart.svg';
import customize from '/assets/icons/customize.svg';

export const Element = () => {
  const { t } = useTranslation(['404', 'common', 'footer']);
  const router = useRouter();

  const { elementIndex } = router.query;
  const index = Number(elementIndex);

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
        <div className="mt-[65px] w-[calc(min(100vw,1200px)-50px)]">
          {Elements[index] && <ElementContentCard element={Elements[index]} />}
        </div>
      </main>
    </>
  );
};

export default Element;

const getStaticProps = makeStaticProps(['404', 'common', 'footer']);
const getStaticPaths = getStaticPathsWithAdditionalParams(
  Elements.map((_, index) => ({ elementIndex: index.toString() }))
);

export { getStaticPaths, getStaticProps };
