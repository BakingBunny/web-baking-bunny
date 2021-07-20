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
import { Product } from '../../interface/Product';
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
  selectedProduct: Product;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const initialCart = {
  id: '',
  product: {
    id: 0,
    name: '',
    price: 0,
    description: '',
    tastes: [],
    productImage: '',
    categoryId: 0,
  },
  tastes: '',
  cakeSize: 1,
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
      tastes: selectedProduct.tastes[0] ? selectedProduct.tastes[0] : '',
      cakeSize: selectedProduct.categoryId === 1 ? 6 : 1, // default dacquoise size is 1
    }));
  }, [selectedProduct]);

  if (!selectedProduct) return <NotFoundPage />;

  return (
    <Container ref={ModalRef} onClick={clickBackgroundToClose}>
      <Wrapper>
        <Image
          src={require(`../../img/${selectedProduct.productImage}`)?.default}
          alt={selectedProduct.name}
        />
        <CloseBtn onClick={closeModal}>
          <AiFillCloseCircle />
        </CloseBtn>
        <OptionWrapper>
          <CakeName>{selectedProduct.name.replaceAll('-', ' ')}</CakeName>
          <Price selectedProduct={selectedProduct} />
          {selectedProduct.tastes.length > 0 && (
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
            {productToCart.cakeSize === 8
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
