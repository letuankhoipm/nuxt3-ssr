interface Gallery {
  id: number;
  type: string;
  createdAt: string;
  updatedAt: string;
  images: Image[];
  galleryTranslations: GalleryTranslation[];
}

interface GalleryTranslation {
  name: string;
  galleryId: number;
  languageId: string;
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
  galleryId: number;
  majorId?: any;
  imageTranslations: ImageTranslation[];
}

interface ImageTranslation {
  imageId: number;
  languageId: string;
  title: string;
  description: string;
}
