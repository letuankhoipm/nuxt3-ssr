interface CompanySolution {
  id: number;
  createdAt: string;
  updatedAt: string;
  companySolutionTranslations: CompanySolutionTranslation[];
  images: Image[];
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

interface CompanySolutionTranslation {
  companySolutionId: number;
  languageId: string;
  title: string;
  content: string;
}
