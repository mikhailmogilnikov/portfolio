import { ProjectsList } from '@mikhailmogilnikov/widgets/projects-list';

type Props = {
  lng: string;
};

export const ProjectsPage = ({ lng }: Props) => {
  return <ProjectsList lng={lng} />;
};
