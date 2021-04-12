import {ICategory} from './icategory';

export interface IProduct {
  productId: number;
  productName: string;
  number: number;
  description: string;
  price: number;
  category: ICategory;
}
