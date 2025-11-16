import { useTranslation } from 'react-i18next';
import Link from '../Link';
import { SVGIcon } from '@/components/SVGIcon';
import heart from '/assets/icons/heart.svg';
import heartBroken from '/assets/icons/heart_broken.svg';
import { useCircreteStore } from '@/lib/store';
import { ICardContentProps } from '@/lib/cardContent';
import { ElementData } from '@/lib/elements';
import { ElementDataContent } from './ElementDataContent';

const InteractionIcon = (element: ElementData) => {
  const { liked } = useCircreteStore();
  return liked.has(element.id) ? (
    <SVGIcon onClick={() => useCircreteStore.getState().removeLiked(element.id)} src={heartBroken.src} />
  ) : (
    <SVGIcon onClick={() => useCircreteStore.getState().addLiked(element.id)} src={heart.src} />
  );
};

export const ElementMinimalCard: React.FC<ICardContentProps> = ({ element }) => {
  return (
    <Link
      href={`/elements/${element.id}`}
      className={`element-card minimal h-[calc(min(250px,60svh))] rounded-2xl overflow-clip shadow-xl`}
    >
      <img src={element.src} alt="lamp" className="w-full h-[calc(100%-2.5rem)] object-cover" />
      <div className="font-bold grid grid-cols-[1fr_auto] items-center h-[2.5rem] w-full shadow-none py-1 px-2">
        {InteractionIcon(element)}
        <ElementDataContent element={element} detailLevel="minimal" />
      </div>
    </Link>
  );
};
