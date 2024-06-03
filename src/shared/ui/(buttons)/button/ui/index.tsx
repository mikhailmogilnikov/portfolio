import { Button as NativeButton } from '@nextui-org/button';
import { ReactNode } from 'react';
import { PiArrowUpRightBold } from 'react-icons/pi';

type Props = {
  icon?: ReactNode;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  variant?:
    | 'solid'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'faded'
    | 'shadow'
    | 'ghost';
  className?: string;
  onPress?: () => void;
  streched?: boolean;
  shadow?: boolean;
  external?: boolean;
};

export const Button = ({
  icon,
  children,
  size = 'lg',
  streched,
  color,
  variant,
  className,
  onPress,
  shadow,
  external,
}: Props) => {
  return (
    <NativeButton
      fullWidth={streched}
      onPress={onPress}
      size={size}
      color={color}
      variant={variant}
      className={`${shadow && 'shadow-base'} font-medium relative ${className}`}
    >
      {icon}
      {children}
      {external && (
        <PiArrowUpRightBold size={16} className='absolute top-2 right-2' />
      )}
    </NativeButton>
  );
};
