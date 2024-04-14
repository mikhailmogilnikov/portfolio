import { Project } from '@mikhailmogilnikov/entities/project';
import { Projects } from '../config/projects';

type Props = {
  lng: string;
};

export const ProjectsList = ({ lng }: Props) => {
  return (
    <div className='w-full h-min flex flex-col gap-24'>
      {Projects.map((project) => (
        <Project key={project.id} data={project} />
      ))} 
    </div>
  );
};
