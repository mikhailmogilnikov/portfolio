'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PiWarningCircle } from 'react-icons/pi';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='h-dvh flex flex-col items-center justify-center text-center gap-8 px-4'>
      <PiWarningCircle size={100} className='text-danger animate-pulse' />
      <h2 className='text-2xl font-semibold text-danger max-w-96'>
        Произошла непредвиденная ошибка.
      </h2>

      <div className='w-full flex flex-col gap-4 max-w-96'>
        <Button size='lg' onClick={() => window.location.reload()}>
          Перезагрузить страницу
        </Button>
        <Button size='lg' onClick={() => router.push('/')}>
          На главную
        </Button>
      </div>

      <Button size='sm' onClick={() => setIsExpanded(!isExpanded)}>
        Подробности
      </Button>

      {isExpanded && (
        <div className='w-full flex flex-col gap-2 text-sm'>
          <p className='font-medium opacity-50'>{error.name}</p>
          <p className='font-medium opacity-50'>{error.message}</p>
          <p className='font-medium opacity-50'>{error.digest}</p>
          <p className='font-medium opacity-50'>{error.stack}</p>
        </div>
      )}
    </div>
  );
}
