import { ProductInterface } from './ProductInterface';

// when a user add an item to the cart
export interface CartInterface {
  id: string;
  product: ProductInterface;
  tasteId: number;
  cakeSizeId: number;
  qty: number;
  special?: string;
}
