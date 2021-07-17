import { CartInterface } from './CartInterface';
import { CustomCakeInterface } from './CustomCakeInterface';

export interface CheckOutInterface {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  cart: CartInterface[];
  customCake: CustomCakeInterface;
  allergy: string;
  isDelivery: boolean;
  pickupDate: string;
  address: string;
  postalCode: string;
  comment: string;
}
