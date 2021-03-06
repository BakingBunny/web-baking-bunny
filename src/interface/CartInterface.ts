import { ProductInterface } from './ProductInterface';

// when a user add an item to the cart
export interface CartInterface {
  id: string;
  product: ProductInterface;
  tasteId: number;
  cakeTypeId: number;
  sizeId: number;
  qty: number;
}
