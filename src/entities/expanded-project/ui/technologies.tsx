import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { Button } from '@mikhailmogilnikov/shared/ui/(buttons)/button';
import { Article } from '@mikhailmogilnikov/shared/ui/(layout)/article/ui';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import Link from 'next/link';

type Props = {
  technologies: ProjectType['technologies'];
};

export const TechnologiesList = ({ technologies }: Props) => {
  return (
    <Article title='Технологии'>
      <Flex wrap gap={3}>
        {technologies.map((tech) => (
          <Button
            as={Link}
            href={`https://www.google.com/search?q=${tech}`}
            target='_blank'
            key={tech}
            radius='full'
            className='h-8 px-3 min-w-2'
          >
            {tech}
          </Button>
        ))}
      </Flex>
    </Article>
  );
};
