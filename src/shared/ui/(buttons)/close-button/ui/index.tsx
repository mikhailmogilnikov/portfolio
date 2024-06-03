import { Button } from '@nextui-org/button';
import { PiXBold } from 'react-icons/pi';

type Props = {
  onPress: () => void;
  className?: string;
};

export const CloseButton = ({ onPress, className }: Props) => {
  return (
    <Button
      className={`w-10 h-10 lg:w-14 lg:h-14 bg-default rounded-full shadow-base flex items-center justify-center ${className}`}
      type='button'
      aria-label='close'
      isIconOnly
      onClick={onPress}
    >
      <PiXBold className='w-1/2 h-1/2' />
    </Button>
  );
};
