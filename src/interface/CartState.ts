export interface CartState {
  type: string;
  item_name: string;
  tastes: string;
  cakeSize: number;
  qty: number;
  special?: string;
}
