'use client';

import { AnimatePresence, PanInfo, m } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { CloseButton } from '@mikhailmogilnikov/shared/ui/(buttons)/close-button/ui';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Video } from '@mikhailmogilnikov/entities/gallery/ui/video';
import { useRouter } from 'next/navigation';
import { ExpandedProjectSectionVariants } from '../config/animation-variants';
import { ExpandedProjectTitle } from './title';
import { ExpandedProjectTimeInfo } from './time-info';
import { ActionButtons } from './action-buttons';
import { TechnologiesList } from './technologies';
import { ExpandedProjectGallery } from './gallery';

type Props = {
  project: ProjectType | undefined;
};

export const ExpandedProject = ({ project }: Props) => {
  const { back } = useRouter();

  const handlePan = (_: PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100) {
      back();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <RemoveScroll className='fixed z-50'>
          <m.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='fixed inset-0 bg-background z-[70] shadow-base overflow-y-scroll'
          >
            <Flex
              tag='main'
              direction='column'
              className='max-w-8xl px-4 md:px-8 pb-16 box-border mx-auto'
            >
              <CloseButton className='fixed top-4 right-4 md:top-6 md:right-6' />

              <m.div
                layoutId={`${project.id}_wrapper`}
                onPanEnd={handlePan}
                className='w-full bg-default rounded-2xl overflow-clip shadow-base aspect-[3/2] md:aspect-[16/9] my-2 mt-12'
              >
                <Video url={project.preview} />
              </m.div>

              <ExpandedProjectTitle
                id={project.id}
                name={project.name}
                description={project.short_description}
              />

              <m.section
                variants={ExpandedProjectSectionVariants}
                initial='enter'
                animate='animate'
                exit='enter'
                className='mt-4 flex flex-col gap-8'
              >
                <ActionButtons href={project.href} github={project.github} />
                <TechnologiesList technologies={project.technologies} />
                <ExpandedProjectTimeInfo />
                <ExpandedProjectGallery items={project.gallery} />
              </m.section>
            </Flex>
          </m.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};
