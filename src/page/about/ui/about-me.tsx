import { GalleryImage } from '@mikhailmogilnikov/entities/gallery/ui/image';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';

export const AboutMe = () => {
  return (
    <Flex
      tag='article'
      editable
      className='flex-col-reverse md:flex-row items-center gap-12 lg:gap-16'
    >
      <Text
        className='w-full text-lg lg:text-3xl font-bold leading-snug'
        opacity={0.6}
      >
        Я начал свой путь разработчика в 2022 году с конструкторов сайтов, желая
        изменить внешний вид готовых блоков при помощи CSS. <br />
        <br />
        Сейчас я создаю многофункциональные приложения, используя передовые
        технологии в области веб-разработки.
      </Text>
      <div className='relative rounded-lg w-56 lg:w-80 aspect-[3/4] overflow-clip flex-shrink-0 bg-default'>
        <GalleryImage
          description='Mikhail Mogilnikov'
          url='/assets/mikhailmogilnikov.jpg'
          sizes='50vh'
        />
      </div>
    </Flex>
  );
};
