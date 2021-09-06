import { ProductInterface } from './ProductInterface';

// Custom Cake requirements
export interface CustomCakeInterface {
  product: ProductInterface;
  requestDescription: string;
  requestDate: Date | undefined;
  isDelivery: boolean | undefined;
  tasteId: number;
  cakeTypeId: number;
  sizeId: number;
}
