interface BlogDetail {
  id: number;
  authorId: number;
  title: string;
  content: string;
  shortDescription: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
  thumbnail: Thumbnail;
  author: Author;
}

interface Author {
  id: number;
  fullname: string;
  urlCV: string;
  createdAt: string;
  updatedAt: string;
  jobPositions: JobPosition2[];
}

interface JobPosition2 {
  employeeId: number;
  jobPositionId: number;
  mainPosition: boolean;
  jobPosition: JobPosition;
}

interface JobPosition {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Thumbnail {
  id: number;
  url: string;
  publicId: string;
  blogId: number;
  projectId?: any;
  employeeId?: any;
  companyId?: any;
  companyValueId?: any;
  statisticsId?: any;
  companySolutionId?: any;
  imageCategoryId?: any;
  clientTestimonialId?: any;
  technologyId?: any;
  fieldId?: any;
  cooperatorId?: any;
  galleryId?: any;
  majorId?: any;
}

interface Tag {
  blogId: number;
  tagId: number;
}
