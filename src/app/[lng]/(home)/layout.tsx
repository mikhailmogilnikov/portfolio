import { HomePage } from '@mikhailmogilnikov/page/home';
import { cookies } from 'next/headers';

type Props = {
  params: {
    lng: string;
  };
  children: React.ReactNode;
};

export default function HomeLayout({ params: { lng }, children }: Props) {
  cookies();
  return <HomePage lng={lng}>{children}</HomePage>;
}
