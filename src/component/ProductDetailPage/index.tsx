import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NotFoundPage } from '../../pages/NotFoundPage';
import formatCurrency from '../../utils';
import { Product } from '../../interface/Product';
import products from '../../productList.json';
import {
  Container,
  Image,
  CakeName,
  OptionWrapper,
  SizeTitle,
  SizeWrapper,
  NA,
  QtyTitle,
  AddToCartBtn,
} from './ProductDetailElements';
import { add } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { CartState } from '../../interface/CartState';
import { Price } from './Price';
import { Tastes } from './Tastes';
import { Size } from './Size';
import { Quantity } from './Quantity';

interface Props {
  id: string;
}

const initialCart = {
  index: 0,
  product: undefined,
  tastes: '',
  cakeSize: 6,
  qty: 1,
  special: '',
};

export const ProductDetail: React.FC<Props> = ({ id }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [productToCart, setproductToCart] = useState<CartState>(initialCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSelectedProduct(products.find((product) => product.id === Number(id)));

    // const fetchData = async () => {
    //   window.scrollTo(0, 0); // scroll to top
    //   const result = await fetch(`/api/cake/${id}`);
    //   const body = await result.json();
    //   setSelectedCake(body);
    // };
    // fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.

    selectedProduct &&
      setproductToCart((prevState) => ({
        ...prevState,
        index: 0,
        product: selectedProduct,
      }));
  }, [id, selectedProduct]);

  if (!selectedProduct) return <NotFoundPage />;

  return (
    <>
      <Container>
        <Image
          src={require(`../../img/${selectedProduct.image}`)?.default}
          alt={selectedProduct.item_name}
        />
        <OptionWrapper>
          <CakeName>{selectedProduct.item_name.replaceAll('-', ' ')}</CakeName>
          <Price selectedProduct={selectedProduct} />
          {selectedProduct.tastes.length > 0 && (
            <Tastes
              selectedProduct={selectedProduct}
              productToCart={productToCart}
              setproductToCart={setproductToCart}
            />
          )}
          <SizeTitle>Size (inch)</SizeTitle>
          {selectedProduct.type === 'cakes' ? ( // cake size option
            <Size
              productToCart={productToCart}
              setproductToCart={setproductToCart}
            />
          ) : (
            <SizeWrapper>
              <NA>N / A</NA>
            </SizeWrapper>
          )}
          <QtyTitle>Quantity</QtyTitle>
          <Quantity
            productToCart={productToCart}
            setproductToCart={setproductToCart}
          />
          <AddToCartBtn onClick={() => dispatch(add(productToCart))}>
            {productToCart.cakeSize === 8
              ? formatCurrency(selectedProduct.price * 1.2 * productToCart.qty)
              : formatCurrency(selectedProduct.price * productToCart.qty)}
            <br />
            Add To Cart
          </AddToCartBtn>
        </OptionWrapper>
      </Container>
    </>
  );
};
