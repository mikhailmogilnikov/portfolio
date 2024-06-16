'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  DarkGradientColors,
  LightGradientColors,
} from '../config/gradient-colors';

const DynamicMeshBackground = dynamic(() =>
  import('@mikhailmogilnikov/shared/ui/gradient-bg').then(
    (mod) => mod.GradientBg,
  ),
);

export const MeshBackground = () => {
  const { resolvedTheme } = useTheme();
  const searchParams = useSearchParams();

  const [isMountable, setIsMountable] = useState(false);
  const [colors, setColors] = useState(DarkGradientColors);

  useEffect(() => {
    const project = searchParams.get('project');

    if (project) {
      setIsMountable(false);
    } else {
      setIsMountable(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (resolvedTheme === 'light') {
      setColors(LightGradientColors);
    } else {
      setColors(DarkGradientColors);
    }
  }, [resolvedTheme]);

  return isMountable && <DynamicMeshBackground colors={colors} />;
};
