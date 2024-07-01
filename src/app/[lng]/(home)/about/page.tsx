import { AboutPage } from '@mikhailmogilnikov/page/about';

type Props = {
  params: {
    lng: string;
  };
};

export default async function About({ params: { lng } }: Props) {
  return <AboutPage lng={lng} />;
}
