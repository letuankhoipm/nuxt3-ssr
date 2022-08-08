interface ProjectDetail {
  id: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  projectTranslations: ProjectTranslation[];
  images: Image[];
}

interface Image {
  id: number;
  url: string;
  publicId: string;
  blogId?: any;
  projectId: number;
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
  imageTranslations: ImageTranslation[];
}

interface ImageTranslation {
  imageId: number;
  languageId: string;
  title: string;
  description: string;
}

interface ProjectTranslation {
  projectId: number;
  languageId: string;
  name: string;
  description: string;
}
