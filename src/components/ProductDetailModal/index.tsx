import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { NotFoundPage } from '../../pages/NotFoundPage';
import formatCurrency from '../../utils';
import { ProductInterface } from '../../interface/ProductInterface';
import {
  Container,
  Wrapper,
  CloseBtn,
  Image,
  CakeName,
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

interface Props {
  // id: string;
  selectedProduct: ProductInterface;
  showModal: boolean;
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
  tasteId: 0,
  cakeSizeId: 0,
  qty: 1,
  special: '',
};

export const ProductDetailModal: React.FC<Props> = ({
  selectedProduct,
  showModal,
  setShowModal,
}) => {
  const [productToCart, setproductToCart] =
    useState<CartInterface>(initialCart);
  const dispatch = useAppDispatch();
  const ModalRef = useRef<HTMLHeadingElement>(null);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = 'unset'; // allow scrolling once modal close
  }, [setShowModal]);

  const clickBackgroundToClose = (e: React.FormEvent<EventTarget>) => {
    if (ModalRef.current === e.target) {
      closeModal();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) closeModal();
    },
    [showModal, closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.addEventListener('keydown', keyPress);
  }, [keyPress]);

  useEffect(() => {
    setproductToCart((prevState) => ({
      ...prevState,
      id: uuidv4(),
      product: selectedProduct,
      tastes: selectedProduct.tasteList[0]
        ? selectedProduct.tasteList[0].id
        : '',
      cakeSizeId: selectedProduct.categoryId === 1 ? 6 : 1, // default dacquoise size is 1
    }));
  }, [selectedProduct]);

  if (!selectedProduct) return <NotFoundPage />;

  return (
    <Container ref={ModalRef} onClick={clickBackgroundToClose}>
      <Wrapper>
        <Image
          src={require(`../../img/${selectedProduct.productImage}`)?.default}
          alt={selectedProduct.productName}
        />
        <CloseBtn onClick={closeModal}>
          <AiFillCloseCircle />
        </CloseBtn>
        <OptionWrapper>
          <CakeName>
            {selectedProduct.productName.replaceAll('-', ' ')}
          </CakeName>
          <Price selectedProduct={selectedProduct} />
          {selectedProduct.tasteList.length > 0 && (
            <Tastes
              selectedProduct={selectedProduct}
              productToCart={productToCart}
              setproductToCart={setproductToCart}
            />
          )}
          <SubOptionWrapper>
            {selectedProduct.categoryId === 1 && ( // cake size option
              <Size
                productToCart={productToCart}
                setproductToCart={setproductToCart}
              />
            )}
            {/* <QtyTitle>Quantity</QtyTitle> */}
            <Quantity
              productToCart={productToCart}
              setproductToCart={setproductToCart}
            />
          </SubOptionWrapper>
          <AddToCartBtn
            onClick={() => {
              dispatch(add(productToCart));
              closeModal();
            }}
          >
            {productToCart.cakeSizeId === 8
              ? formatCurrency(selectedProduct.price * 1.2 * productToCart.qty)
              : formatCurrency(selectedProduct.price * productToCart.qty)}
            <br />
            Add To Cart
          </AddToCartBtn>
        </OptionWrapper>
      </Wrapper>
    </Container>
  );
};
