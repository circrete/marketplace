import logo from '/assets/icons/circrete.svg';
import { useTranslation } from 'react-i18next';
import LanguageSwitchLink from './LanguageSwitchLink';
import Link from './Link';

export const Navigation: React.FC<{
  heading: string;
  links: { href: string; text: string; icon?: React.ReactNode }[];
  withoutTopMargin?: boolean;
}> = ({ links, withoutTopMargin = false }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="fixed top-0 w-[100vw] z-10000 bg-linear-to-b from-background to-transparent">
        <div className="w-[calc(min(100vw,1200px)-50px)] mx-[calc(max(0px,calc(50vw-600px))+25px)] left-0 p-2 flex flex-row items-center justify-between">
          <Link href="/">
            <img src={logo.src} alt="logo" className="h-15" />
          </Link>
          <span className="text-sm flex flex-row items-center gap-2">
            {links.map((link) => (
              <Link
                href={link.href}
                children={link.icon ? link.icon : t(link.text)}
                tooltip={link.icon ? t(link.text) : undefined}
                key={link.href}
              />
            ))}
            <LanguageSwitchLink />
          </span>
        </div>
      </div>
      {withoutTopMargin ? null : <span className="h-18" />}
    </>
  );
};
