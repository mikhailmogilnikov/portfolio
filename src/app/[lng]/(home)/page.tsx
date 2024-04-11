import { ProjectsPage } from '@mikhailmogilnikov/page/projects';

type Props = {
  params: {
    lng: string;
  };
};

export default function Projects({ params: { lng } }: Props) {
  return <ProjectsPage lng={lng} />;
}
