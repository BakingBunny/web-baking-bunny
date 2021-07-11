import { Product } from './Product';

export interface CartState {
  id: string;
  product: Product | undefined;
  tastes: string;
  cakeSize: number;
  qty: number;
  special?: string;
}
