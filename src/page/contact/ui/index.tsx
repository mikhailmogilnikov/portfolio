import { CloseButton } from '@mikhailmogilnikov/shared/ui/(buttons)/close-button';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { ContactForm } from '@mikhailmogilnikov/widgets/contact-form/ui';

export const ContactPage = () => {
  return (
    <>
      <Flex>
        <CloseButton />
      </Flex>
      <ContactForm />
    </>
  );
};
