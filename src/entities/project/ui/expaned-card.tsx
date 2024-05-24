'use client';

import { AnimatePresence, m, useWillChange } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { PiXBold } from 'react-icons/pi';
import { RemoveScroll } from 'react-remove-scroll';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';

type Props = {
  project: ProjectType | undefined;
};

export const ExpandedCard = ({ project }: Props) => {
  const router = useRouter();
  const willChange = useWillChange();

  const handleClose = () => {
    router.push('/', { scroll: false });
  };

  return (
    <AnimatePresence>
      {project && (
        <RemoveScroll className='fixed z-50'>
          <m.div
            style={{ willChange }}
            className='fixed inset-0 bg-background z-[70] px-4 md:px-8 shadow-base overflow-y-scroll'
            layoutId={`${project.id}_wrapper`}
          >
            <button
              className='w-10 h-10 lg:w-14 lg:h-14 bg-default rounded-full shadow-base flex items-center justify-center fixed top-4 right-4 md:top-6 md:right-6'
              type='button'
              aria-label='close'
              onClick={handleClose}
            >
              <PiXBold className='w-1/2 h-1/2' />
            </button>
            <div className='w-full h-[70vh]' />
            <m.div
              layoutId={`${project.id}_title`}
              className='w-full flex flex-col gap-2 z-20 max-w-8xl mx-auto'
            >
              <h3 className='text-2xl lg:text-3xl font-bold'>{project.name}</h3>
              <p className='md:text-lg font-medium opacity-50'>
                {project.short_description}
              </p>
            </m.div>
          </m.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};
