import { useTranslation } from 'react-i18next';
import { SVGIcon } from '@/components/SVGIcon';
import { Map } from '@/components/leaflet/LazyMap';
import brokenHeart from '/assets/icons/heart_broken.svg';
import cart from '/assets/icons/shopping_cart.svg';
import { ICardContentProps } from '@/lib/cardContent';
import { useCircreteStore } from '@/lib/store';
import { ElementData } from '@/lib/elements';
import { ElementDataContent } from './ElementDataContent';

const EMAIL = 'contact@circrete.dk';
// create mailto with basic element data to contact@circrete.dk method
const getMailTo = (element: ElementData) => {
  return `mailto:${EMAIL}?subject=Element ${element.name} &body=I am interested in the element ${element.name} from ${element.type}. I would like to know more about the element and how to purchase it.`;
};

export const ElementContentCard: React.FC<ICardContentProps> = ({ element }) => {
  const { t } = useTranslation('common');

  return (
    <div className="element-card grid w-full grid-cols-[1fr] md:grid-cols-[1fr_1fr] flex-col items-center rounded-2xl overflow-clip shadow-xl mx-auto gap-4">
      <img src={element.src} alt="lamp" className="h-[calc(min(50vh,20rem))] md:h-120 w-full object-cover" />
      <div className="my-auto px-4 font-bold flex flex-col items-start justify-between w-full gap-6 shadow-none h-full">
        <h3>{t(`element-type:${element.type}`)}</h3>
        <div className="grid w-full grid-cols-[1fr_9rem] gap-5">
          <Map className="w-full h-50" elements={[element]} />
          <ElementDataContent element={element} detailLevel="content" />
        </div>
        <div className="grid grid-cols-2 gap-4 justify-between w-full pb-4">
          <span
            className="bg-white-700 text-black cursor-pointer p-2 shadow-xl border-1 rounded-2xl flex flex-row gap-2 justify-center items-center"
            onClick={() => useCircreteStore.getState().removeLiked(element.id)}
          >
            <SVGIcon src={brokenHeart.src} className="h-4 my-auto" />
            {t('dislike')}
          </span>
          <a
            href={getMailTo(element)}
            className="bg-white-700 text-black cursor-pointer p-2 shadow-xl border-1 rounded-2xl flex flex-row gap-2 justify-center items-center"
          >
            <SVGIcon src={cart.src} className="h-4 my-auto" />
            {t('buy')}
          </a>
        </div>
      </div>
    </div>
  );
};
