import { useLangContext } from '../lib/providers';
import { useTranslation } from './client';

export const useClientTranslation = (filePath = '') => {
  const currentLanguage = useLangContext() as string;

  return useTranslation(currentLanguage, filePath);
};
