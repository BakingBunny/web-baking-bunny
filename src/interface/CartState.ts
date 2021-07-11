import { Product } from './Product';

export interface CartState {
  index: number;
  product: Product | undefined;
  tastes: string;
  cakeSize: number;
  qty: number;
  special?: string;
}
