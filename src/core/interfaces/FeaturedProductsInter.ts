




 export interface FeaturedProductProps {
    id: number;
    img: string;
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
      img: string;
      slug: string;
      description:string;
    }[];
  }
    

