import Head from 'next/head';
import logo from '/assets/icons/circrete.svg';
import { useTranslation } from 'react-i18next';

export const Header: React.FC<{ heading: string; title: string; className?: string }> = ({
  heading,
  title,
  className
}) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <link rel="icon" href={logo.src} />
        <title>{t(title)}</title>
      </Head>
      <div className="max-w-standard-div flex lg:flex-row lg:justify-center flex-col items-center justify-center gap-8 p-4">
        <img src={logo.src} alt="logo" className="w-50" />
        <h1 className={className + ' lg:text-left w-[690px]'}>{t(heading)}</h1>
      </div>
    </>
  );
};
