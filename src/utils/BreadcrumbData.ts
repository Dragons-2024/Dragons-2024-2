
import { categories } from "../core/interfaces/categories";

export type itemprops = {
  name: string;
  link: string;
}

type itemlistprops = {
  id: number;
  name: string;
  link: string;
}


export let BreadcrumbLinks: itemlistprops[] = [];

export function HomeBreadcrumb() {
  return BreadcrumbLinks = [];
}

export function SearchCategory(name: string) {
  let categoryname;
  categories.map((category) => (
    category.subcategories.map((subcategory) => {
      if (subcategory.name === name) {
        categoryname = category.name;
      }
    }
    )))

  if (categoryname === undefined) {
    return "";
  } else {
    return categoryname;
  }

}

export function CategoryLink({ name, link }: itemprops) {
  const namecate = SearchCategory(name);
  BreadcrumbLinks = [];
  BreadcrumbLinks[0] = { id: 1, name: namecate, link: link }
}

export function plpBreadCrumb({ name, link }: itemprops) {
  BreadcrumbLinks=[];
  BreadcrumbLinks[0] = { id: 1, name: name, link: link };
  return BreadcrumbLinks;
}

export function FeaturedPdpB(name:string){
  BreadcrumbLinks[0]={id:1,name:"Computadores",link:"#"};
  BreadcrumbLinks[1]={id:2,name:name,link:"#"};
}

export function AddCartToBreadcrumb() {
  BreadcrumbLinks=[];
  BreadcrumbLinks[0] = { id: 1, name: 'Carrito', link: '/Cart' };  
  return BreadcrumbLinks;
}