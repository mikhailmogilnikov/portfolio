import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { ExperienceList } from '@mikhailmogilnikov/widgets/experience-list/ui';
import { AboutMe } from './about-me';

type Props = {
  lng: string;
};

export const AboutPage = ({ lng }: Props) => {
  return (
    <Flex tag='section' className='max-w-6xl animate-appear' col gap={20}>
      <AboutMe />
      <ExperienceList lng={lng} />
    </Flex>
  );
};
