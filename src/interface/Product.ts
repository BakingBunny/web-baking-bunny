//Product details (cake, dacquoise, etc.) - API GET
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  tastes: string[];
  productImage: string;
  categoryId: number;
}
