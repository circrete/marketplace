import { useTranslation } from 'react-i18next';
import Link from './Link';
import { SVGIcon } from '@/components/SVGIcon';
import heart from '/assets/icons/heart.svg';
import brokenHeart from '/assets/icons/heart_broken.svg';
import cart from '/assets/icons/shopping_cart.svg';
import { ElementData } from '@/lib/elements';
import { useCircreteStore } from '@/lib/store';

export const ElementCard: React.FC<{ element: ElementData }> = ({ element }) => {
  const { t } = useTranslation('common');

  return (
    <Link href={`/elements/${element.id}`} className="">
      <div className="flex flex-col items-center w-[calc(min(200px,45svw))] h-[calc(min(300px,60svw))] rounded-2xl overflow-clip shadow-xl">
        <img src={element.src} alt="lamp" className="w-[200px] h-[230px] object-cover" />
        <div className="font-bold flex flex-row justify-between w-full gap-2 shadow-none">
          <SVGIcon
            onClick={() => useCircreteStore.getState().addLiked(element.id)}
            src={heart.src}
            className="h-4 my-auto"
          />
          <p className="text-10">{element.name}</p>
          <SVGIcon
            onClick={() => useCircreteStore.getState().addDisliked(element.id)}
            src={brokenHeart.src}
            className="h-4 my-auto"
          />
        </div>
      </div>
    </Link>
  );
};
