import { SocialsPage } from '@mikhailmogilnikov/page/socials/ui';

type Props = {
  params: {
    lng: string;
  };
};

export default function Socials({ params: { lng } }: Props) {
  return <SocialsPage />;
}
