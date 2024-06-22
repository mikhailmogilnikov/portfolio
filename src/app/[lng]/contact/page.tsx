import { ContactPage } from '@mikhailmogilnikov/page/contact';

type Props = {
  params: {
    lng: string;
  };
};

export default function Contact({ params: { lng } }: Props) {
  return <ContactPage />;
}
