export interface OrderListInterface {
  subtotal: number;
  deliveryFee: number;
  total: number; // subtotal + deliveryFee
  isDelivery: boolean | null;
  pickupDeliveryDate: Date | null;
  pickupHour: number;
  pickupMinute: number;
}
