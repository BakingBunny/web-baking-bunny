import { Product } from './Product';

export interface CartInterface {
  id: string;
  product: Product;
  tastes: string;
  cakeSize: number;
  qty: number;
  special?: string;
}
