




 export interface FeaturedProductProps {
    id: number;
    image: string;
    name: string;
    normalPrice: number;
    discountPrice: number;
    discount: string;
    slug: string;
    description:string;

  }


  export interface FeaturedProductsListProps {
    products: {
      id: number;
      name: string;
      normalPrice: number;
      discountPrice: number;
      discount: string;
      image: string;
      slug: string;
      description:string;
    }[];
  }
    

