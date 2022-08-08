interface Statistic {
  id: number;
  createdAt: string;
  updatedAt: string;
  statisticsTranslations: string[];
  image: Image;
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
