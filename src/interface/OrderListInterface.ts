export interface OrderListInterface {
  subtotal: number;
  deliveryFee: number | null;
  total: number; // subtotal + deliveryFee
  isDelivery: boolean;
  pickupDeliveryDate: Date | null;
}
