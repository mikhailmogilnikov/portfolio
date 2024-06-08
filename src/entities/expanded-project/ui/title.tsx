import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { m } from 'framer-motion';

type Props = {
  id: ProjectType['id'];
  name: ProjectType['name'];
  description: ProjectType['description'];
};

export const ExpandedProjectTitle = ({ id, name, description }: Props) => {
  return (
    <m.div
      layoutId={`${id}_title`}
      className='w-full flex flex-col gap-2 z-20 max-w-8xl mx-auto'
    >
      <h3 className='text-2xl lg:text-3xl font-bold'>{name}</h3>
      <p className='md:text-lg font-medium opacity-50'>{description}</p>
    </m.div>
  );
};
