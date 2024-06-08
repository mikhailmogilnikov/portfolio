'use client';

import { AnimatePresence, m } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { CloseButton } from '@mikhailmogilnikov/shared/ui/(buttons)/close-button/ui';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { ExpandedProjectSectionVariants } from '../config/animation-variants';
import { ExpandedProjectTitle } from './title';
import { ExpandedProjectTimeInfo } from './time-info';
import { ExpandedProjectGallery } from './gallery';

type Props = {
  project: ProjectType | undefined;
};

export const ExpandedProject = ({ project }: Props) => {
  return (
    <AnimatePresence>
      {project && (
        <RemoveScroll className='fixed z-50'>
          <m.div
            className='fixed inset-0 bg-background z-[70] shadow-base overflow-y-scroll'
            layoutId={`${project.id}_wrapper`}
          >
            <Flex
              tag='main'
              direction='column'
              className='max-w-8xl px-4 md:px-8 pb-16 box-border mx-auto'
            >
              <CloseButton className='fixed top-4 right-4 md:top-6 md:right-6' />

              <div className='w-full h-[50vh] lg:h-[70vh]' />

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
                {/* <ActionButtons href={project.href} github={project.github} />
                <TechnologiesList technologies={project.technologies} /> */}
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
