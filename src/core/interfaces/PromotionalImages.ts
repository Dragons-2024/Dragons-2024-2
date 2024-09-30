export interface PromoImg {
  image: string;
  name: string;
}

export interface PromoImgs {
  id: number;
  name: string;
  image: string;
}

export interface imgspropstype {
  imgs: PromoImgs[];
}

export interface PromotionalImagesContainerProps {
  minId?: number;
  maxId?: number;
}