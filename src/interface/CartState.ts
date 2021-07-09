export interface CartState {
  id: string;
  type: string;
  item_name: string;
  tastes: string;
  cakeSize: number;
  qty: number;
  special?: string;
}
