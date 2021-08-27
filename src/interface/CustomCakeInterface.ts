// Custom Cake requirements
export interface CustomCakeInterface {
  requestDescription: string;
  requestDate: Date | null;
  isDelivery: boolean | null;
  tasteId: number;
  cakeTypeId: number;
  sizeId: number;
}
