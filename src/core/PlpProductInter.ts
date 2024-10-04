export interface PlpProductProps {
    id: number;
    image: string;
    name: string;
    normalPrice: number;
    discountPrice: number;
    discount: string;
    slug: string;
    description:string;
    details:{
     [key:string]:string;
    }
  }


  export interface  PlpProductsListProps {
    products: {
      id: number;
      name: string;
      normalPrice: number;
      discountPrice: number;
      discount: string;
      image: string;
      slug: string;
      description:string;
      details:{
        [key:string]:string;
       }
    }[];
  }