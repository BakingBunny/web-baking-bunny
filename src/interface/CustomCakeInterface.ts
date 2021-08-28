import { ProductInterface } from './ProductInterface';

// Custom Cake requirements
export interface CustomCakeInterface {
  product: ProductInterface;
  requestDescription: string;
  requestDate: Date | null;
  isDelivery: boolean | null;
  tasteId: number;
  cakeTypeId: number;
  sizeId: number;
}
