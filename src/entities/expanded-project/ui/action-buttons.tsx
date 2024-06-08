import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { Button } from '@mikhailmogilnikov/shared/ui/(buttons)/button';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import Link from 'next/link';
import { PiGithubLogoBold, PiGlobeSimpleBold } from 'react-icons/pi';

type Props = {
  href: ProjectType['href'];
  github: ProjectType['github'];
};

export const ActionButtons = ({ href, github }: Props) => {
  return (
    <Flex tag='article' editable className='gap-4 lg:gap-8 max-md:flex-col'>
      <Button
        as={Link}
        href={href}
        target='_blank'
        streched
        color='primary'
        external
        icon={<PiGlobeSimpleBold size={20} />}
      >
        Посетить сайт
      </Button>
      <Button
        as={Link}
        href={github}
        target='_blank'
        streched
        shadow
        external
        icon={<PiGithubLogoBold size={20} />}
      >
        Открыть репозиторий
      </Button>
    </Flex>
  );
};
