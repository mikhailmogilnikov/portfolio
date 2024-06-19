import { TExperience } from '../model/experience.type';

export const getExperience = async (locale: string): Promise<TExperience[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/${locale}/experience.json`);

  if (!res.ok) {
    return [];
  }

  return res.json();
};
