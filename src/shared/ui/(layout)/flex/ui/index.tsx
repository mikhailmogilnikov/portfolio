import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tag?: 'div' | 'section' | 'menu' | 'aside' | 'header' | 'footer' | 'span';
  className?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: number;
  width?: number | string;
  editable?: boolean;
};

export const Flex = ({
  children,
  className,
  tag = 'div',
  direction = 'row',
  gap = 16,
  width = '100%',
  editable = false,
}: Props) => {
  const Tag = tag;

  return (
    <Tag
      style={!editable ? { flexDirection: direction, gap, width } : undefined}
      className={`flex ${className}`}
    >
      {children}
    </Tag>
  );
};
