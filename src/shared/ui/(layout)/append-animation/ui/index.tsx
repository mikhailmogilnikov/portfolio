import { m } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const AppendAnimation = ({ children }: PropsWithChildren) => {
  return (
    <m.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ ease: [0, 1, 0, 1], duration: 1 }}
    >
      {children}
    </m.div>
  );
};
