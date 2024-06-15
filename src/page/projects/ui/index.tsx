import dynamic from 'next/dynamic';

type Props = {
  lng: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

const DynamicProjectsList = dynamic(() =>
  import('@mikhailmogilnikov/widgets/projects-list').then(
    (mod) => mod.ProjectsList,
  ),
);

export const ProjectsPage = ({ lng, searchParams }: Props) => {
  const { project } = searchParams;

  return (
    <DynamicProjectsList
      lng={lng}
      activeProject={project as string | undefined}
    />
  );
};
