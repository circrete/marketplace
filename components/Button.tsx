import { Tooltip } from './Tooltip';

const baseStyle =
  'p-2 shadow-xl border-1 rounded-2xl flex flex-row gap-2 justify-center items-center transition-all duration-400 hover:shadow-2xl';
const enabledStyle = 'bg-gray-100 text-black cursor-pointer hover:bg-gray-50 ' + baseStyle;
const disabledStyle = 'bg-gray-300 text-black cursor-not-allowed hover:bg-gray-400 ' + baseStyle;

const getStyle = (disabled: boolean | undefined, className: string | undefined) =>
  (disabled ? disabledStyle : enabledStyle) + (className ? ' ' + className : '');

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
  href?: string;
}> = ({ children, className, onClick, disabled, tooltip, href }) => (
  <Tooltip text={tooltip}>
    {href ? (
      <a href={disabled ? undefined : href} className={getStyle(disabled, className)} title={tooltip}>
        {children}
      </a>
    ) : (
      <button onClick={onClick} disabled={disabled} className={getStyle(disabled, className)} title={tooltip}>
        {children}
      </button>
    )}
  </Tooltip>
);
