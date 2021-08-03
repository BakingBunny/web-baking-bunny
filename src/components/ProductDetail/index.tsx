import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFoundPage } from '../../pages/NotFoundPage';
import formatCurrency from '../../utils/formatCurrency';
import { ProductInterface } from '../../interface/ProductInterface';
import {
  Wrapper,
  CloseBtn,
  Image,
  ProductName,
  OptionWrapper,
  SubOptionWrapper,
  AddToCartBtn,
} from './ProductDetailElements';
import { add } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { CartInterface } from '../../interface/CartInterface';
import { Price } from './Price';
import { Tastes } from './Tastes';
import { Size } from './Size';
import { Quantity } from './Quantity';
import { v4 as uuidv4 } from 'uuid';
import { AiFillCloseCircle } from 'react-icons/ai';

toast.configure();

interface Props {
  // id: string;
  selectedProduct: ProductInterface;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const initialCart = {
  id: '',
  product: {
    productId: 0,
    productName: '',
    price: 0,
    description: '',
    productImage: '',
    comment: '',
    tasteList: [],
    sizeList: [],
    categoryId: 0,
  },
  tasteId: -1,
  sizeId: -1,
  qty: 1,
  special: '',
};

export const ProductDetail: React.FC<Props> = ({
  selectedProduct,
  setShowModal,
}) => {
  const [productToCart, setproductToCart] =
    useState<CartInterface>(initialCart);
  const dispatch = useAppDispatch();

  // initialize product to add to the cart
  useEffect(() => {
    setproductToCart((prevState) => ({
      ...prevState,
      id: uuidv4(),
      product: selectedProduct,
      tasteId: selectedProduct.tasteList.length
        ? selectedProduct.tasteList[0].id
        : -1, // default taste is -1 (no taste option product is -1)
      sizeId: selectedProduct.sizeList.length
        ? selectedProduct.sizeList[0].id
        : -1, // default size is -1 (dacquoise is -1)
    }));
  }, [selectedProduct]);

  // no product(id) found
  if (!selectedProduct) return <NotFoundPage />;

  return (
    <Wrapper>
      <Image
        src={selectedProduct.productImage}
        alt={selectedProduct.productName}
      />
      <CloseBtn onClick={() => setShowModal(false)}>
        <AiFillCloseCircle />
      </CloseBtn>
      <OptionWrapper>
        <ProductName>
          {selectedProduct.productName.replaceAll('-', ' ')}
        </ProductName>
        <Price selectedProduct={selectedProduct} />
        {selectedProduct.tasteList.length > 0 && ( // display if product has multiple tastes (e.g. fruits cake or Dacquoise combo)
          <Tastes
            selectedProduct={selectedProduct}
            productToCart={productToCart}
            setproductToCart={setproductToCart}
          />
        )}
        <SubOptionWrapper>
          {selectedProduct.sizeList.length > 0 && ( // display if product has multiple sizes (e.g. cake)
            <Size
              productToCart={productToCart}
              setproductToCart={setproductToCart}
            />
          )}
          <Quantity
            productToCart={productToCart}
            setproductToCart={setproductToCart}
          />
        </SubOptionWrapper>
        <AddToCartBtn
          onClick={() => {
            dispatch(add(productToCart));
            setShowModal(false);
            toast('Item successfully added to your cart.', {
              type: 'success',
            });
          }}
        >
          {productToCart.sizeId === 2
            ? formatCurrency(selectedProduct.price * 1.2 * productToCart.qty)
            : formatCurrency(selectedProduct.price * productToCart.qty)}
          <br />
          Add To Cart
        </AddToCartBtn>
      </OptionWrapper>
    </Wrapper>
  );
};
