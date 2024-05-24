import { ExpandedCard, Project } from '@mikhailmogilnikov/entities/project';
import { getProjects } from '@mikhailmogilnikov/shared/api/get-projects';

type Props = {
  lng: string;
  activeProject: string | undefined;
};

export const ProjectsList = async ({ lng, activeProject }: Props) => {
  const projects = await getProjects(lng);
  const currentProject = projects.find(({ id }) => id === activeProject);

  return (
    <div className='w-full h-min flex flex-col gap-16 xl:gap-24'>
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
      <ExpandedCard project={currentProject} />
    </div>
  );
};
