'use client';

import { useClientTranslation } from '@mikhailmogilnikov/shared/i18n/use-client-translation';
import { ProjectType } from '../model/project.type';

type Props = {
  data: ProjectType;
};

export const Project = ({ data }: Props) => {
  const { t } = useClientTranslation();

  return (
    <div className='w-full h-min flex flex-col gap-4 md:gap-8'>
      <div className='w-full aspect-video rounded-2xl lg:rounded-3xl bg-neutral-100 dark:bg-neutral-900' />
      <div className='w-full flex flex-col gap-1 md:gap-3'>
        <h3 className='text-2xl md:text-3xl font-bold'>{t(`${data.name}.name`)}</h3>
        <p className='md:text-lg font-medium opacity-60'>
          {t(`${data.name}.description`)}
        </p>
      </div>
    </div>
  );
};
