import { useTranslation } from 'next-i18next';
import { Navigation } from '@/components/Navigation';
import { ElementMinimalCard } from '@/components/cards/ElementMinimalCard';
import { Elements } from '@/lib/elements';
import { Map } from '@/components/leaflet/LazyMap';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import { SVGIcon } from '@/components/SVGIcon';

import heart from '/assets/icons/heart.svg';
import burger from '/assets/icons/burger.svg';
import home from '/assets/icons/home.svg';
import { CardRenderer } from '@/components/cards/CardRenderer';

export const AllElements = () => {
  const { t } = useTranslation(['all-elements']);

  return (
    <>
      <Navigation
        heading={'all-elements'}
        links={[
          { href: 'favorites', text: 'to-favorites', icon: <SVGIcon src={heart.src} /> },
          { href: 'tinder-slides', text: 'to-element-swiping', icon: <SVGIcon src={burger.src} /> },
          { href: '/', text: 'back-to-home', icon: <SVGIcon src={home.src} /> }
        ]}
        withoutTopMargin
      />
      <div className="max-w-standard-div w-full h-[100svh] grid grid-rows-[1fr_auto] overflow-auto">
        <Map className="w-full h-[35svh] z-1" elements={Elements} />
        <CardRenderer className="h-[65svh]" elements={Elements} />
      </div>
    </>
  );
};

export default AllElements;

const getStaticProps = makeStaticProps(['all-elements']);
export { getStaticPaths, getStaticProps };
