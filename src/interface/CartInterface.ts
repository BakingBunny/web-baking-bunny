import { Product } from './Product';

// when a user add an item to the cart
export interface CartInterface {
  id: string;
  product: Product;
  tastes: string;
  cakeSize: number;
  qty: number;
  special?: string;
}
