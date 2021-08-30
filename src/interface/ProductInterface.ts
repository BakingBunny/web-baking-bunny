import { SizeListInterface } from './SizeListInterface';
import { TasteListInterface } from './TasteListInterface';
import { CakeTypeListInterface } from './CakeTypeListInterface';
import { CategoryListInterface } from './CategoryListInterface';

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
  categoryList: CategoryListInterface[];
  cakeTypeList: CakeTypeListInterface[];
}
