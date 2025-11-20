import { useTranslation } from 'react-i18next';
import { SVGIcon } from '@/components/SVGIcon';
import { Map } from '@/components/leaflet/LazyMap';
import cart from '/assets/icons/shopping_cart.svg';
import { ICardContentProps } from '@/lib/cardContent';
import { ElementData } from '@/lib/elements';
import { ElementDataContent } from './ElementDataContent';
import { Button } from '../Button';
import { LikeButton } from './cardData/LikeButton';

const EMAIL = 'contact@circrete.dk';
// create mailto with basic element data to contact@circrete.dk method
const getMailTo = (element: ElementData) => {
  return `mailto:${EMAIL}?subject=Element ${element.name} &body=I am interested in the element ${element.name} from ${element.type}. I would like to know more about the element and how to purchase it.`;
};

export const ElementContentCard: React.FC<ICardContentProps> = ({ element }) => {
  const { t } = useTranslation(['common', 'element-type']);

  return (
    <div className="element-card grid w-full grid-cols-[1fr] md:grid-cols-[1fr_1fr] flex-col items-center rounded-2xl overflow-clip shadow-xl mx-auto gap-4">
      <div className="relative w-full h-[calc(min(50vh,20rem))] md:h-120">
        <img src={element.src} alt="lamp" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <span className="text-gray-600 text-4xl font-bold">Demo</span>
        </div>
      </div>
      <div className="my-auto p-3 font-bold flex flex-col items-start justify-between w-full gap-4 shadow-none h-full">
        <h3 className="md:pt-4">{t(element.type)}</h3>
        <div className="grid w-full grid-cols-[1fr_auto] gap-5">
          <Map className="w-full h-50" elements={[element]} />
          <ElementDataContent element={element} detailLevel="content" />
        </div>
        <div className="grid grid-cols-2 gap-4 justify-between w-full">
          <LikeButton element={element} detailLevel="content" />
          <Button href={getMailTo(element)} tooltip={'Demo Mode'} disabled dontLocalizedHref>
            <SVGIcon src={cart.src} className="h-4 my-auto" />
            {t('buy')}
          </Button>
        </div>
      </div>
    </div>
  );
};
