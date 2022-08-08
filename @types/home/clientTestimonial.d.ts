interface ClientTestimonial {
  id: number;
  createdAt: string;
  updatedAt: string;
  clientName: string;
  position: string;
  numberOfStar: number;
  content: string;
  avatar: Avatar;
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
