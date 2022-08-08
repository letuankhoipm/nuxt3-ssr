interface ProjectAll {
  pageInfo: PageInfo;
  totalCount: number;
  content: Content[];
}

interface Content {
  id: number;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  images: Image[];
  projectTranslations: ProjectTranslation[];
}

interface ProjectTranslation {
  projectId: number;
  languageId: string;
  name: string;
  description: string;
}

interface Image {
  id: number;
  url: string;
  publicId: string;
  imageTranslations: ImageTranslation[];
}

interface ImageTranslation {
  imageId: number;
  languageId: string;
  title: string;
  description: string;
}

interface PageInfo {
  page: number;
  totalPages: number;
  size: number;
}
