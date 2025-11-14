import { CardDetailLevel, ICardDisplayProps } from '@/lib/cardContent';
import { useState } from 'react';
import { ElementContentCard } from './ElementContentCard';
import { ElementMinimalCard } from './ElementMinimalCard';
import { useTranslation } from 'react-i18next';

const DetailLevelSelector: React.FC<{
  detailLevel: (typeof CardDetailLevel)[number];
  setDetailLevel: (detailLevel: (typeof CardDetailLevel)[number]) => void;
}> = ({ detailLevel, setDetailLevel }) => {
  const { t } = useTranslation('common');
  return (
    <span className="flex flex-row gap-2 items-center">
      <label>{t('detail-level')}</label>:
      {CardDetailLevel.map((dL) => (
        <div className="flex flex-row gap-2 items-center">
          <input
            onChange={() => setDetailLevel(detailLevel === 'content' ? 'minimal' : 'content')}
            checked={detailLevel === dL}
            type="radio"
            key={dL}
            value={dL}
          />
          <label htmlFor={dL}>{t(dL)}</label>
        </div>
      ))}
    </span>
  );
};

export const CardRenderer: React.FC<ICardDisplayProps> = ({ detailLevel, elements, className }) => {
  const [localDetailLevel, setLocalDetailLevel] = useState<(typeof CardDetailLevel)[number]>(detailLevel ?? 'minimal');

  return (
    <div className={`${className} overlfow-y-none grid grid-rows-[1fr_auto]`}>
      <div className="max-w-standard-div w-full bg-background z-1 pt-1">
        {<DetailLevelSelector detailLevel={localDetailLevel} setDetailLevel={setLocalDetailLevel} />}
        <div className="h-0">
          <div className="max-w-standard-div h-5 w-full bg-linear-to-b from-background to-transparent" />
        </div>
      </div>

      <div className="overflow-y-scroll">
        <div className="h-5" />
        <div className="w-full">
          <div className={`element-card-grid ${localDetailLevel}`}>
            {elements.map((element) =>
              localDetailLevel === 'minimal' ? (
                <ElementMinimalCard key={element.id} element={element} />
              ) : (
                <ElementContentCard key={element.id} element={element} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
