import { ElementData } from '@/lib/elements';
import { SVGIcon } from '../SVGIcon';
import length from '/assets/icons/length.svg';
import axii from '/assets/icons/axii.svg';

export const DimensionValues: React.FC<{ element: ElementData; sizeClass?: string }> = ({ element, sizeClass }) => {
  return (
    <div className={`flex flex-col gap-1`}>
      <span className="flex flex-row gap-[0.175rem] items-center">
        <SVGIcon src={axii.src} className={sizeClass} />
        <span className={sizeClass}>
          {element.dimensions[0].toFixed(0)}x{element.dimensions[1].toFixed(0)}
        </span>
      </span>
      <span className="flex flex-row gap-[0.175rem] items-center">
        <SVGIcon src={length.src} className={sizeClass} />
        <span className={sizeClass}>{element.dimensions[2].toFixed(0)}</span>
      </span>
    </div>
  );
};
