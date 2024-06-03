'use client';

import { AnimatePresence, m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { RemoveScroll } from 'react-remove-scroll';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { CloseButton } from '@mikhailmogilnikov/shared/ui/(buttons)/close-button/ui';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Button } from '@mikhailmogilnikov/shared/ui/(buttons)/button/ui';
import { PiGithubLogoBold, PiGlobeSimpleBold } from 'react-icons/pi';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';
import { Chip } from '@nextui-org/react';

type Props = {
  project: ProjectType | undefined;
};

export const ExpandedProject = ({ project }: Props) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <AnimatePresence>
      {project && (
        <RemoveScroll className='fixed z-50'>
          <m.div
            className='fixed inset-0 bg-background z-[70] shadow-base overflow-y-scroll'
            layoutId={`${project.id}_wrapper`}
          >
            <Flex
              direction='column'
              className='max-w-8xl px-4 md:px-8 pb-16 box-border mx-auto'
            >
              <CloseButton
                onPress={handleClose}
                className='fixed top-4 right-4 md:top-6 md:right-6'
              />
              <div className='w-full h-[50vh]' />
              <m.div
                layoutId={`${project.id}_title`}
                className='w-full flex flex-col gap-2 z-20 max-w-8xl mx-auto'
              >
                <h3 className='text-2xl lg:text-3xl font-bold'>
                  {project.name}
                </h3>
                <p className='md:text-lg font-medium opacity-50'>
                  {project.short_description}
                </p>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    type: 'spring',
                    damping: 26,
                    stiffness: 300,
                  },
                  y: 0,
                }}
                exit={{ opacity: 0, y: 100 }}
                className='mt-4 flex flex-col gap-8'
              >
                <Flex
                  tag='section'
                  editable
                  className='gap-4 lg:gap-8 max-md:flex-col'
                >
                  <Button
                    streched
                    color='primary'
                    external
                    icon={<PiGlobeSimpleBold size={20} />}
                  >
                    Посетить сайт
                  </Button>
                  <Button
                    streched
                    shadow
                    external
                    icon={<PiGithubLogoBold size={20} />}
                  >
                    Открыть репозиторий
                  </Button>
                </Flex>

                <Flex col>
                  <Text opacity={0.5}>Технологии</Text>
                  <Flex wrap gap={3}>
                    {project.technologies.map((tech) => (
                      <Chip size='lg' classNames={{ content: 'font-medium' }}>
                        {tech}
                      </Chip>
                    ))}
                  </Flex>
                </Flex>
              </m.div>
            </Flex>
          </m.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};
