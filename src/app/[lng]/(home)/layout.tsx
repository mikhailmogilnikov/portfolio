import { HomePage } from '@mikhailmogilnikov/page/home';

type Props = {
  params: {
    lng: string;
  };
  children: React.ReactNode;
};

export default async function HomeLayout({ params: { lng }, children }: Props) {
  return <HomePage lng={lng}>{children}</HomePage>;
}
