import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';
import Link from 'next/link';
import { PiArrowSquareOutBold, PiCaretRightBold } from 'react-icons/pi';

export const AboutActions = () => {
  return (
    <Flex col className='mt-8'>
      <Link href='/contact' className='flex gap-3'>
        <Text className='text-xl font-semibold'>Связаться со мной</Text>
        <PiCaretRightBold size={22} className='mt-[3px]' />
      </Link>

      <Link href='/socials' className='flex gap-3'>
        <Text className='text-xl font-semibold'>Мои соцсети</Text>
        <PiCaretRightBold size={22} className='mt-[3px]' />
      </Link>

      <Link target='_blank' href='/assets/resume.pdf' className='flex gap-3'>
        <Text className='text-xl font-semibold'>Открыть резюме</Text>
        <PiArrowSquareOutBold size={22} className='mt-[3px]' />
      </Link>
    </Flex>
  );
};
