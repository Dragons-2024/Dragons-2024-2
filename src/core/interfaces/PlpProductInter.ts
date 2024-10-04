
export interface PlpProductProps {
    id: number;
    img: string;
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
      img: string;
      slug: string;
      description:string;
      details:{
        [key:string]:string;
       }
    }[];
  }
    