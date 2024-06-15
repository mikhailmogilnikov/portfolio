'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const DynamicMeshBackground = dynamic(() =>
  import('@mikhailmogilnikov/shared/ui/gradient-bg').then(
    (mod) => mod.GradientBg,
  ),
);

export const MeshBackground = () => {
  const { resolvedTheme } = useTheme();

  const colors =
    resolvedTheme === 'light'
      ? {
          color1: '#fff',
          color2: '#aaa',
          color3: '#bbb',
          color4: '#ccc',
        }
      : {
          color1: '#000',
          color2: '#111',
          color3: '#222',
          color4: '#333',
        };

  return <DynamicMeshBackground colors={colors} />;
};
