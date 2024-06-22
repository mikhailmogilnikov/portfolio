import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';
import { PiCheckCircle } from 'react-icons/pi';

export const ContactSubmitMessage = () => {
  return (
    <Flex col className='max-w-[700px] animate-appear'>
      <PiCheckCircle size={120} className='text-success -ml-2' />
      <Text className='text-2xl md:text-3xl font-semibold text-success'>
        Ваше обращение успешно отправлено.
      </Text>
      <Text opacity={0.5}>Ожидайте ответа на указанный email-адрес.</Text>
    </Flex>
  );
};
