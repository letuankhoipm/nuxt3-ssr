interface Major {
  id: number;
  createdAt: string;
  updatedAt: string;
  image: Image;
  majorTranslations: MajorTranslation[];
}

interface MajorTranslation {
  majorId: number;
  languageId: string;
  title: string;
  description: string;
}

interface Image {
  id: number;
  url: string;
  publicId: string;
  blogId?: any;
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
  majorId: number;
  imageTranslations: ImageTranslation[];
}

interface ImageTranslation {
  imageId: number;
  languageId: string;
  title: string;
  description: string;
}
