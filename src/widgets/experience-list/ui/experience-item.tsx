import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';
import Image from 'next/image';
import { PiCaretRightBold } from 'react-icons/pi';
import Link from 'next/link';
import { TExperience } from '../model/experience.type';

type Props = {
  item: TExperience;
};

export const ExperienceItem = ({ item }: Props) => {
  const { name, year, image, role, link } = item;
  return (
    <Link href={link} target='_blank' className='flex gap-4 items-center'>
      <Flex>
        <div className='w-12 h-12 md:w-16 md:h-16 rounded-xl bg-default shadow-base relative overflow-clip flex-shrink-0 '>
          <Image src={image} fill alt={name} />
        </div>
        <Flex col gap={0} className='justify-center'>
          <Text className='text-lg font-semibold'>{name}</Text>
          <Text opacity={0.5}>
            {role} · {year}
          </Text>
        </Flex>
      </Flex>
      <PiCaretRightBold size={24} />
    </Link>
  );
};
