import React, { useState, useEffect } from 'react';
import { NotFoundPage } from '../../pages/NotFoundPage';
import formatCurrency from '../../utils';
import cakesList from '../ProductListPage/cakesList.json';
import dacquoisesList from '../ProductListPage/dacquoisesList.json';
import { Product } from '../../interface/Product';
import {
  Container,
  Image,
  CakeName,
  Price,
  OptionWrapper,
  FruitsTitle,
  FruitsWrapper,
  FruitsBtn,
  SizeTitle,
  SizeWrapper,
  SizeBtn,
  QtyTitle,
  QtyWrapper,
  QtyMinusBtn,
  QtyPlusBtn,
  CakeQty,
  AddToCartBtn,
} from './ProductDetailElements';

interface Props {
  id: string;
  productType: string;
}

type cakeSizeType = 6 | 8;
type fruitsType = 'Mango' | 'Strawberry' | 'None(Fresh-Milk)';

export const ProductDetail: React.FC<Props> = ({ id, productType }) => {
  const [productList, setProductList] = useState<Product[]>(dacquoisesList);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [fruits, setFruits] = useState<fruitsType>('Mango');
  const [productQty, setProductQty] = useState<number>(1);
  const [cakeSize, setCakeSize] = useState<cakeSizeType>(6);

  useEffect(() => {
    switch (productType) {
      case 'cakes':
        setProductList(cakesList);
        console.log(productList);
        break;
      case 'dacquoises':
        setProductList(dacquoisesList);
        break;
    }

    setSelectedProduct(productList.find((product) => product.item_name === id));

    // const fetchData = async () => {
    //   window.scrollTo(0, 0); // scroll to top
    //   const result = await fetch(`/api/cake/${id}`);
    //   const body = await result.json();
    //   setSelectedCake(body);
    // };
    // fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.
  }, [id, productType, productList]);

  if (!selectedProduct) return <NotFoundPage />;

  return (
    <>
      <Container>
        <Image
          src={require(`../../img/${selectedProduct.image}`)?.default}
          alt={selectedProduct.item_name}
        />
        <CakeName>{selectedProduct.item_name.replaceAll('-', ' ')}</CakeName>
        <Price>
          {formatCurrency(selectedProduct.price)} (6") /{' '}
          {formatCurrency(selectedProduct.price * 1.2)} (8")
        </Price>
        <OptionWrapper>
          {selectedProduct.tastes.length > 0 && (
            <>
              <FruitsTitle>Fruits</FruitsTitle>
              <FruitsWrapper>
                <FruitsBtn
                  isSelected={fruits === 'Mango'}
                  onClick={() => setFruits('Mango')}
                >
                  Mango
                </FruitsBtn>
                <FruitsBtn
                  isSelected={fruits === 'Strawberry'}
                  onClick={() => setFruits('Strawberry')}
                >
                  Strawberry
                </FruitsBtn>
                <FruitsBtn
                  isSelected={fruits === 'None(Fresh-Milk)'}
                  onClick={() => setFruits('None(Fresh-Milk)')}
                >
                  None
                  <br />
                  <span>(Fresh-Milk)</span>
                </FruitsBtn>
              </FruitsWrapper>
            </>
          )}
          <SizeTitle>Size (inch)</SizeTitle>
          <SizeWrapper>
            <SizeBtn isSelected={cakeSize === 6} onClick={() => setCakeSize(6)}>
              6
            </SizeBtn>
            <SizeBtn isSelected={cakeSize === 8} onClick={() => setCakeSize(8)}>
              8
            </SizeBtn>
          </SizeWrapper>
          <QtyTitle>Quantity</QtyTitle>
          <QtyWrapper>
            <QtyMinusBtn
              onClick={() => setProductQty(productQty - 1)}
              disabled={productQty <= 1}
            >
              -
            </QtyMinusBtn>
            <CakeQty>{productQty}</CakeQty>
            <QtyPlusBtn
              onClick={() => setProductQty(productQty + 1)}
              disabled={productQty >= 9}
            >
              +
            </QtyPlusBtn>
          </QtyWrapper>
        </OptionWrapper>
        <AddToCartBtn>
          {cakeSize === 8
            ? formatCurrency(selectedProduct.price * 1.2 * productQty)
            : formatCurrency(selectedProduct.price * productQty)}
          <br />
          Add To Cart
        </AddToCartBtn>
      </Container>
    </>
  );
};
