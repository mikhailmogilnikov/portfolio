import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';
import { cookies } from 'next/headers';
import { Divider } from '@nextui-org/divider';
import { Fragment } from 'react';
import { getExperience } from '../api/get-experience';
import { ExperienceItem } from './experience-item';

type Props = {
  lng: string;
};

export const ExperienceList = async ({ lng }: Props) => {
  cookies();
  const experience = await getExperience(lng);

  return (
    <Flex tag='article' col gap={5}>
      <Text className='text-xl lg:text-3xl font-bold mb-6'>Опыт работы</Text>
      {experience.map((item, index) => (
        <Fragment key={item.id}>
          <ExperienceItem item={item} />
          {index < experience.length - 1 && (
            <Divider className='ml-16 md:ml-[80px] w-[calc(100%-64px)] md:w-[calc(100%-80px)]' />
          )}
        </Fragment>
      ))}
    </Flex>
  );
};
