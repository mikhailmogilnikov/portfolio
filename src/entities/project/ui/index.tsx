'use client';

import { m } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';

type Props = {
  data: ProjectType;
};

export const Project = ({ data }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleExpand = () => {
    router.push(`${pathname}?project=${data.id}`, { scroll: false });
  };

  return (
    <m.button
      type='button'
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0, 1, 0, 1], duration: 1 }}
      onClick={handleExpand}
      className='w-full h-min flex flex-col gap-6 lg:gap-8 text-start'
    >
      <m.div
        layoutId={`${data.id}_wrapper`}
        className='w-full aspect-square md:aspect-video max-h-[90vh] rounded-2xl lg:rounded-3xl bg-default shadow-base cursor-pointer relative z-10'
      />

      <m.div
        layoutId={`${data.id}_title`}
        className='w-full flex flex-col gap-2 z-20'
      >
        <h3 className='text-2xl lg:text-3xl font-bold'>{data.name}</h3>
        <p className='md:text-lg font-medium opacity-50'>
          {data.short_description}
        </p>
      </m.div>
    </m.button>
  );
};
