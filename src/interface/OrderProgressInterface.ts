export enum RegualrOrderEnum {
  cart = 1,
  checkout = 2,
  review = 3,
  confirm = 4,
}

export enum CustomOrderEnum {
  checkout = 1,
  review = 2,
  confirm = 3,
}

export interface OrderProgressInterface {
  regularOrder: RegualrOrderEnum;
  customOrder: CustomOrderEnum;
}
