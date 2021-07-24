import { UserInterface } from './UserInterface';
import { CartInterface } from './CartInterface';
import { CustomCakeInterface } from './CustomCakeInterface';
import { OrderListInterface } from './OrderListInterface';

// when a user checkout (API-POST)
export interface CheckOutInterface {
  user: UserInterface;
  cart: CartInterface[];
  customCake: CustomCakeInterface;
  orderList: OrderListInterface;
  // allergy: string;
  // comment: string;
}
