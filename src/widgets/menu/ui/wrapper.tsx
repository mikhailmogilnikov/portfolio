'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const DynamicMenu = dynamic(() => import('./index').then((mod) => mod.Menu), {
  ssr: false,
  loading: () => (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black z-50' />
  ),
});

type Props = {
  children: ReactNode;
};

export const MenuWrapper = ({ children }: Props) => {
  return (
    <>
      <DynamicMenu />
      {children}
    </>
  );
};
