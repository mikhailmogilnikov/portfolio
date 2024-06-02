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
    <>
      <h1 className='w-full text-[32px] sm:text-[40px] md:text-[50px] lg:text-[66px] font-bold tracking-tight leading-[1.3] z-10'>
        {t('title')}
      </h1>

      <div className='w-full flex justify-start z-10'>
        <Tabs items={HomeRoutes} />
      </div>

      {children}
    </>
  );
};
