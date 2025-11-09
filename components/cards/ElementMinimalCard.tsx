import { useTranslation } from 'react-i18next';
import Link from '../Link';
import { SVGIcon } from '@/components/SVGIcon';
import heart from '/assets/icons/heart.svg';
import brokenHeart from '/assets/icons/heart_broken.svg';
import { ElementData } from '@/lib/elements';
import { useCircreteStore } from '@/lib/store';

export const ElementMinimalCard: React.FC<{
  element: ElementData;
  customWidthClassName?: string;
  customHeightClassName?: string;
}> = ({
  element,
  customWidthClassName = 'w-[calc(min(200px,45svw))]',
  customHeightClassName = 'h-[calc(min(300px,60svw))]'
}) => {
  const { t } = useTranslation('common');

  return (
    <Link href={`/elements/${element.id}`} className="">
      <div
        className={`flex flex-col items-center ${customWidthClassName} ${customHeightClassName} rounded-2xl overflow-clip shadow-xl`}
      >
        <img src={element.src} alt="lamp" className="w-full h-[90%] object-cover" />
        <div className="font-bold flex flex-row justify-between w-full gap-2 shadow-none p-2">
          <SVGIcon
            onClick={() => useCircreteStore.getState().addLiked(element.id)}
            src={heart.src}
            className="h-4 my-auto"
          />
          <p className="text-3 text-ellipsis overflow-hidden whitespace-nowrap">{element.name}</p>
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
