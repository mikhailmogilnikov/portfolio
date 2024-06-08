export type TGalleryItem = {
  url: string;
  type: 'video' | 'image';
  aspect: string;
  description?: string;
};

export type ProjectType = {
  id: string;
  name: string;
  short_description: string;
  href: string;
  github: string;
  technologies: string[];
  year: number;
  dev_months: number;
  description: string;
  features: string[];
  contribution: string[];
  preview: string;
  gallery: TGalleryItem[];
};
