import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';

export const getProjects = async (locale: string): Promise<ProjectType[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/${locale}/projects.json`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
};
