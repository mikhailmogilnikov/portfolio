'use client';

import { Button } from '@nextui-org/button';

export default function Error() {
  return (
    <div className='w-full h-dvh flex flex-col items-center justify-center text-center gap-4'>
      <h2 className='text-xl font-bold'>ERROR</h2>

      <Button
        size='lg'
        variant='light'
        onPress={() => window.location.reload()}
      >
        ПЕРЕЗАГРУЗКА
      </Button>
    </div>
  );
}
