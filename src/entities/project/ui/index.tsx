'use client';

import { m } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { PiCaretRightBold } from 'react-icons/pi';
import { AppendAnimation } from '@mikhailmogilnikov/shared/ui/(layout)/append-animation';

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
    <AppendAnimation>
      <m.button
        type='button'
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
          <Flex className='justify-between items-center'>
            <h3 className='text-2xl lg:text-3xl font-bold'>{data.name}</h3>
            <div className='w-8 h-8 bg-default flex justify-center items-center rounded-full'>
              <PiCaretRightBold size={20} />
            </div>
          </Flex>

          <p className='md:text-lg font-medium opacity-50'>
            {data.short_description}
          </p>
        </m.div>
      </m.button>
    </AppendAnimation>
  );
};
