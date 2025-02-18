export type ChildrenType = Readonly<{ children: React.ReactNode }>;

export interface ServicesDataProps {
  icon: string;
  title: string;
  description: string;
  url: string;
}

export interface StoreDataProps {
  image: string;
  title: string;
  price: number;
}

export interface LearningDataProps {
  title?: string;
  description?: string;
  image?: string;
}

export interface BlogDataProps {
  image: string;
  title: string;
  description: string;
  time: number;
}
