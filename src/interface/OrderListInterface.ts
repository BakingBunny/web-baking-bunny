export interface OrderListInterface {
  subtotal: number;
  deliveryFee: number;
  total: number; // subtotal + deliveryFee
  isDelivery: boolean | undefined;
  pickupDeliveryDate: Date | undefined;
  allergy: string;
  inquiry: string;
}
