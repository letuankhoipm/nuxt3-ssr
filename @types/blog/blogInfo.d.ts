interface BlogInfo {
  pageInfo: PageInfo;
  totalCount: number;
  content: Content[];
}

interface Content {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  shortDescription: string;
  published: boolean;
  authorId: AuthorId;
  author: Author;
  thumbnail: Avatar;
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
}

interface Author {
  id: number;
  createdAt: string;
  updatedAt: string;
  fullname: string;
  urlCV: string;
  avatar: Avatar;
  blogs: null[];
  employeeTranslations: EmployeeTranslation[];
  jobPositions: JobPosition2[];
}

interface JobPosition2 {
  mainPosition: boolean;
  jobPosition: JobPosition;
}

interface JobPosition {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

interface EmployeeTranslation {
  employeeId: string;
  languageId: string;
  shortDescription: string;
  longDescription: string;
}

interface Avatar {
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

interface AuthorId {}

interface PageInfo {
  page: number;
  totalPages: number;
  size: number;
}
