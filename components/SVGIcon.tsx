const baseStyle = 'h-8';

export const SVGIcon: React.FC<{ src: string; className?: string; onClick?: () => void }> = ({
  src,
  className,
  onClick
}) => (
  <img
    src={src}
    alt="logo"
    className={className ?? onClick ? baseStyle + ' cursor-pointer' : baseStyle}
    onClick={(e) => {
      console.log('clicked');
      e.preventDefault();
      onClick?.();
    }}
  />
);
