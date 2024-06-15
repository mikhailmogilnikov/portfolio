import { ExpandedProject } from '@mikhailmogilnikov/entities/expanded-project';
import { Project } from '@mikhailmogilnikov/entities/project';
import { getProjects } from '@mikhailmogilnikov/shared/api/get-projects';
import { cookies } from 'next/headers';

type Props = {
  lng: string;
  activeProject: string | undefined;
};

export const ProjectsList = async ({ lng, activeProject }: Props) => {
  cookies();
  const projects = await getProjects(lng);
  const currentProject = projects.find(({ id }) => id === activeProject);

  return (
    <div className='w-full h-min flex flex-col gap-16 xl:gap-24'>
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}

      <ExpandedProject project={currentProject} />
    </div>
  );
};
