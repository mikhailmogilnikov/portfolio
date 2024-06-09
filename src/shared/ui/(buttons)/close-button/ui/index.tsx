import { useOriginContext } from '@mikhailmogilnikov/shared/lib/providers';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { PiXBold } from 'react-icons/pi';

type Props = {
  className?: string;
};

export const CloseButton = ({ className }: Props) => {
  const router = useRouter();
  const isWithinPage = useOriginContext();

  const handleClick = useCallback(() => {
    if (isWithinPage) router.back();
    else router.push('/', { scroll: false });
  }, [isWithinPage, router]);

  return (
    <Button
      className={`w-10 h-10 lg:w-14 lg:h-14 bg-default rounded-full z-50 shadow-base flex items-center justify-center ${className}`}
      type='button'
      aria-label='close'
      isIconOnly
      onClick={handleClick}
    >
      <PiXBold className='w-1/2 h-1/2' />
    </Button>
  );
};
