import { ProjectsList } from '@mikhailmogilnikov/widgets/projects-list';

type Props = {
  lng: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

export const ProjectsPage = ({ lng, searchParams }: Props) => {
  const { project } = searchParams;

  return <ProjectsList lng={lng} activeProject={project as string} />;
};
