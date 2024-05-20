import { promises as fs } from 'fs';
import { ProjectType } from '../model/types/project.type';

export const getProjects = async (locale: string) => {
  const resp = fs.readFile(
    `${process.cwd()}/public/${locale}/projects.json`,
    'utf8',
  );

  return JSON.parse(await resp) as ProjectType[];
};
