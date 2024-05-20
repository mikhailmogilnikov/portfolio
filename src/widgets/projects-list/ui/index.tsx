import { Project } from '@mikhailmogilnikov/entities/project';
import { getProjects } from '@mikhailmogilnikov/shared/api/get-projects';

type Props = {
  lng: string;
};

export const ProjectsList = async ({ lng }: Props) => {
  const projects = await getProjects(lng);

  return (
    <div className='w-full h-min flex flex-col gap-8 xl:gap-24'>
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </div>
  );
};
