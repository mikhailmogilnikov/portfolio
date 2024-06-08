import { Article } from '@mikhailmogilnikov/shared/ui/(layout)/article';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';

export const ExpandedProjectTimeInfo = () => {
  return (
    <>
      <Article title='Год создания'>
        <Text className='text-xl font-semibold'>2024</Text>
      </Article>
      <Article title='Время активной разработки'>
        <Text className='text-xl font-semibold'>2 месяца</Text>
      </Article>
    </>
  );
};
