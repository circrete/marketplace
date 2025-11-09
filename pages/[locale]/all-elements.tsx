import { useTranslation } from 'next-i18next';
import { Navigation } from '@/components/Navigation';
import { ElementCard } from '@/components/ElementCard';
import { Elements } from '@/lib/elements';
import { Map } from '@/components/leaflet/LazyMap';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import { SVGIcon } from '@/components/SVGIcon';

import heart from '/assets/icons/heart.svg';
import burger from '/assets/icons/burger.svg';
import home from '/assets/icons/home.svg';

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
      <div className="max-w-standard-div w-full h-[100svh] grid grid-rows-[1fr_auto]">
        <Map className="w-full h-[35vh]" elements={Elements} />
        <div className="overflow-y-auto">
          <div className="max-w-standard-div h-[calc(35vh+8px)] fixed top-0 w-full bg-background" />
          <div className="max-w-standard-div h-8 fixed top-[calc(35vh+8px)] w-full bg-linear-to-b from-background to-transparent" />
          <div className="h-12" />
          <div className="w-full element-card-grid">
            {Elements.map((element) => (
              <ElementCard customWidthClassName="element-card" key={element.id} element={element} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllElements;

const getStaticProps = makeStaticProps(['all-elements']);
export { getStaticPaths, getStaticProps };
