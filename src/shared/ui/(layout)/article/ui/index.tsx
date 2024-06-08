import { ReactNode } from 'react';
import { Flex } from '../../flex';
import { Text } from '../../text';

type Props = {
  children: ReactNode;
  title: string;
};

export const Article = ({ children, title }: Props) => {
  return (
    <Flex col tag='article' gap={2}>
      <Text tag='h3' opacity={0.5}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};
