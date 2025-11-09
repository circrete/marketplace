import { useTranslation } from 'react-i18next';
import Link from './Link';
import { SVGIcon } from '@/components/SVGIcon';
import heart from '/assets/icons/heart.svg';
import cart from '/assets/icons/shopping_cart.svg';
import { ElementData } from '@/lib/elements';

export const ElementCard: React.FC<{ element: ElementData }> = ({ element }) => {
  const { t } = useTranslation('common');

  return (
    <Link href={`/elements/${element.id}`}>
      <div className="flex flex-col items-center w-[200px] h-[300px] rounded-2xl overflow-clip shadow-xl">
        <img src={element.src} alt="lamp" className="w-[200px] h-[230px] object-cover" />
        <div className="my-auto px-4 font-bold flex flex-row justify-between w-full gap-2 shadow-none">
          <SVGIcon src={heart.src} className="h-4 my-auto" />
          <h3 className="text-10">{element.name}</h3>
          <SVGIcon src={cart.src} className="h-4 my-auto" />
        </div>
      </div>
    </Link>
  );
};
