import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ElementCard } from '@/components/ElementCard';
import { Elements } from '@/lib/elements';
import { Header } from '@/components/Header';

export const AllElements = () => {
  const { t } = useTranslation(['common', 'footer']);

  return (
    <>
      <Navigation heading={'all-elements'} links={[]} />
      <div className="max-w-standard-div grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 p-8">
        {Elements.map((element) => (
          <ElementCard key={element.id} element={element} />
        ))}
      </div>
    </>
  );
};

export default AllElements;
