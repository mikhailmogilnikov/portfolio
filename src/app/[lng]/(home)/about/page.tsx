import { AboutPage } from '@mikhailmogilnikov/page/about';

type Props = {
  params: {
    lng: string;
  };
};

export default function About({ params: { lng } }: Props) {
  return <AboutPage lng={lng} />;
}
