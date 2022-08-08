interface NavbarItem {
  label: string;
  path: string;
  toName: string;
}
interface ExpertCard {
  icon: string;
  fill: string;
  title: string;
  content: string;
}
interface Employee {
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

interface EmployeeTranslation extends Translation {
  employeeId: string;
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

// PortfolioCard
interface PortfolioCard {
  img: string;
  title: string;
  content: string;
  link: string;
}
