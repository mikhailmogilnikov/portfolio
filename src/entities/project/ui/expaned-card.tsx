import { AnimatePresence, m } from 'framer-motion';
import { PiXBold } from 'react-icons/pi';
import { RemoveScroll } from 'react-remove-scroll';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';

type Props = {
  data: ProjectType;
  isExpanded: boolean;
  setIsExpanded: (bool: boolean) => void;
};

export const ExpandedCard = ({ data, isExpanded, setIsExpanded }: Props) => {
  return (
    <AnimatePresence>
      {isExpanded && (
        <RemoveScroll className='fixed z-50'>
          <m.div
            className='fixed inset-0 bg-background z-[70] px-4 md:px-6 shadow-base overflow-y-scroll'
            layoutId={`${data.id}_wrapper`}
          >
            <button
              className='w-10 h-10 lg:w-14 lg:h-14 bg-default rounded-full shadow-base flex items-center justify-center fixed top-4 right-4 md:top-6 md:right-6'
              type='button'
              aria-label='close'
              onClick={() => setIsExpanded(false)}
            >
              <PiXBold className='w-1/2 h-1/2' />
            </button>
            <div className='w-full h-[70vh]' />
            <m.div
              layoutId={`${data.id}_title`}
              className='w-full flex flex-col gap-2 z-20 max-w-8xl mx-auto'
            >
              <h3 className='text-2xl lg:text-3xl font-bold'>{data.name}</h3>
              <p className='md:text-lg font-medium opacity-50'>
                {data.short_description}
              </p>
            </m.div>
          </m.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};
