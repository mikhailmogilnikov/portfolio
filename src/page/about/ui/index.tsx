import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';
import Image from 'next/image';

type Props = {
  lng: string;
};

export const AboutPage = ({ lng }: Props) => {
  return (
    <Flex tag='section' className='max-w-6xl' col gap={20}>
      <Flex
        tag='article'
        editable
        className='flex-col-reverse md:flex-row items-center gap-12 lg:gap-16'
      >
        <Text
          className='w-full text-lg lg:text-3xl font-bold leading-snug'
          opacity={0.6}
        >
          Я начал свой путь в роли разработчика в 2022 году с конструкторов
          сайтов и CSS, желая изменить внешний вид стандартных встроенных
          блоков. <br /> <br />
          Сейчас я создаю многофункциональные приложения, используя передовые
          технологии в области веб-разработки, начиная от дизайна и заканчивая
          выгрузкой в сеть.
        </Text>
        <div className='relative rounded-lg w-56 lg:w-80 aspect-[3/4] overflow-clip flex-shrink-0 bg-default'>
          <Image
            alt='Mikhail Mogilnikov'
            src='/assets/mikhailmogilnikov.jpg'
            fill
            draggable={false}
            quality={100}
          />
        </div>
      </Flex>
      <Flex tag='article' col>
        <Text className='text-xl lg:text-3xl font-bold'>Опыт работы</Text>
      </Flex>
    </Flex>
  );
};
