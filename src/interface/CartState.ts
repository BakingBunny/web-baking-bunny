import { Product } from './Product';

export interface CartState {
  id: string;
  product: Product;
  tastes: string;
  cakeSize: number;
  qty: number;
  special?: string;
}
