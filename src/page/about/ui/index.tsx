import { MeshBackground } from '@mikhailmogilnikov/entities/mesh-bg';

type Props = {
  lng: string;
};

export const AboutPage = ({ lng }: Props) => {
  return (
    <>
      <MeshBackground />
      About
    </>
  );
};
