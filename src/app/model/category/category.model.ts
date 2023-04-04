export interface Product{
  id?:number;
  name?:string;
  price?:number;
  description?:string;
  slug?:string;
  image?: Image;
}
export interface Image {
  id?: number;
  link?:string;
  productId?: number;
}
