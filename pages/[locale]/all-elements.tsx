import { useTranslation } from 'next-i18next';
import { Navigation } from '@/components/Navigation';
import { ElementCard } from '@/components/ElementCard';
import { Elements } from '@/lib/elements';
import { Map } from '@/components/leaflet/LazyMap';

export const AllElements = () => {
  return (
    <>
      <Navigation heading={'all-elements'} links={[]} withoutTopMargin />
      <div className="max-w-standard-div w-full h-[100svh] grid grid-rows-[1fr_auto]">
        <Map className="w-full h-[35vh]" elements={Elements} />
        <div className="overflow-y-auto">
          <div className="max-w-standard-div h-[calc(35vh+8px)] fixed top-0 w-full bg-background" />
          <div className="max-w-standard-div h-8 fixed top-[calc(35vh+8px)] w-full bg-linear-to-b from-background to-transparent" />
          <div className="h-12" />
          <div className="w-full flex flex-row flex-wrap justify-between gap-8">
            {Elements.map((element) => (
              <ElementCard key={element.id} element={element} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllElements;
