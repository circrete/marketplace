import { useTranslation } from 'next-i18next';
import LanguageSwitchLink from './LanguageSwitchLink';

export const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer>
      <p>{t('description')}</p>
      <p>
        <LanguageSwitchLink />
      </p>
    </footer>
  );
};
