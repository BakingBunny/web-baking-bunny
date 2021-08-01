export interface OrderListInterface {
  subtotal: number;
  deliveryFee: number;
  total: number; // subtotal + deliveryFee
  isDelivery: boolean;
  pickupDeliveryDate: Date | null;
}
