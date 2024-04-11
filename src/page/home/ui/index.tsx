import { useTranslation } from '@mikhailmogilnikov/shared/i18n';
import { Tabs } from '@mikhailmogilnikov/shared/ui/tabs/ui';
import { HomeRoutes } from '../config/home-routes';

type Props = {
  lng: string;
  children: React.ReactNode;
};

export const HomePage = async ({ lng, children }: Props) => {
  const { t } = await useTranslation(lng, 'homepage');

  return (
    <main className='flex min-h-screen h-[1400px] flex-col gap-14 md:gap-24 items-center p-4 pt-10 md:p-10 lg:p-24'>
      <h1 className='w-full text-[32px] sm:text-[40px] md:text-[50px] lg:text-[66px] font-bold tracking-tight leading-[1.3]'>
        {t('title')}
      </h1>

      <div className='w-full flex justify-start sm:justify-center'>
        <Tabs items={HomeRoutes} />
      </div>

      {children}
    </main>
  );
};
