export interface OrderListInterface {
  subtotal: number;
  deliveryFee: number | null;
  total: number; // subtotal + deliveryFee
  isDelivery: boolean | null;
  pickupDeliveryDate: Date | null;
  pickupHour: number;
  pickupMinute: number;
}
