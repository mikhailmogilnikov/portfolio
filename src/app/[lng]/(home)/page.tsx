import { ProjectsPage } from '@mikhailmogilnikov/page/projects';

type Props = {
  params: {
    lng: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Projects({ params, searchParams }: Props) {
  return <ProjectsPage lng={params.lng} searchParams={searchParams} />;
}
