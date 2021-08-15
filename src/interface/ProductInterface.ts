import { SizeListInterface } from './SizeListInterface';
import { TasteListInterface } from './TasteListInterface';
import { CakeTypeListInterface } from './CakeTypeListInterface';

//Product details (cake, dacquoise, etc.) - API GET
export interface ProductInterface {
  productId: number;
  productName: string;
  price: number;
  description: string;
  productImage: string;
  comment: string;
  tasteList: TasteListInterface[];
  sizeList: SizeListInterface[];
  categoryId: number;
  cakeTypeList: CakeTypeListInterface[];
}
