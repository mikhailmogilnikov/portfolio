'use client';

import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';
import { Textarea } from '@nextui-org/input';
import { Spinner } from '@nextui-org/spinner';
import { FormEventHandler, useState } from 'react';
import { PiCaretRightBold } from 'react-icons/pi';
import { ContactSubmitMessage } from './submit-message';

export const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();

    formData.append('email', email);
    formData.append('message', message);

    formData.append(
      'access_key',
      process.env.NEXT_PUBLIC_MESSAGE_TOKEN as string,
    );

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      setIsLoading(false);
      setIsSubmited(true);
    } catch {
      setIsLoading(false);
    }
  };

  return isSubmited ? (
    <ContactSubmitMessage />
  ) : (
    <form
      action='submit'
      onSubmit={handleSubmit}
      className='flex flex-col gap-10 max-w-[700px] animate-appear'
    >
      <Text className='text-2xl md:text-3xl font-semibold max-md:-mt-4'>
        <span className='opacity-50'>
          Вы можете связаться со мной, написав мне в{' '}
        </span>
        <button
          type='button'
          onClick={() =>
            window.open('https://t.me/mikhailmogilnikov', '_blank')
          }
        >
          Telegram.
        </button>
        <span className='opacity-50'> Или заполнив форму ниже:</span>
      </Text>
      <Flex col gap={6} className='max-md:-mt-2'>
        <input
          id='email'
          name='email'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Ваш email'
          className='h-16 md:h-20 rounded-full bg-default/50 backdrop-blur-lg outline-none text-xl md:text-2xl px-8 shadow-large '
        />
        <Textarea
          id='message'
          name='message'
          type='text'
          required
          placeholder='Сообщение'
          maxRows={Infinity}
          minRows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          classNames={{
            helperWrapper: 'shadow-large',
            innerWrapper: 'px-4 py-4 min-h-32',
            input: 'text-xl md:text-2xl',
            inputWrapper:
              'rounded-4xl !bg-default/50 backdrop-blur-lg !shadow-large',
          }}
        />
        {isLoading ? (
          <Flex className='mt-2 animate-pulse'>
            <Spinner size='sm' />
            <Text className='text-xl md:text-2xl font-medium '>
              Отправка обращения
            </Text>
          </Flex>
        ) : (
          <button
            className='text-xl md:text-2xl font-medium flex gap-2 items-center mt-2'
            type='submit'
          >
            Отправить
            <PiCaretRightBold size={24} className='mt-[2px]' />
          </button>
        )}
      </Flex>
    </form>
  );
};
