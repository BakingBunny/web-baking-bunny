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
  TastesTitle,
  TastesWrapper,
  TastesBtn,
  SizeTitle,
  SizeWrapper,
  SizeBtn,
  NA,
  QtyTitle,
  QtyWrapper,
  QtyMinusBtn,
  QtyPlusBtn,
  CakeQty,
  AddToCartBtn,
} from './ProductDetailElements';
import { add } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { CartState } from '../../interface/CartState';

interface Props {
  id: string;
  productType: string;
}

type cakeSizeType = 6 | 8;

export const ProductDetail: React.FC<Props> = ({ id, productType }) => {
  const [productList, setProductList] = useState<Product[]>(dacquoisesList);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [tastes, setTastes] = useState<string>('');
  const [productQty, setProductQty] = useState<number>(1);
  const [cakeSize, setCakeSize] = useState<cakeSizeType>(6);
  const [productToCart, setproductToCart] = useState<CartState>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (productType) {
      case 'cakes':
        setProductList(cakesList);
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

  const AddToCartHandler = () => {
    setproductToCart({
      type: selectedProduct.type,
      item_name: selectedProduct.item_name,
      tastes: tastes,
      cakeSize: cakeSize,
      qty: productQty,
      special: '',
    });
    dispatch(add(productToCart));
  };

  return (
    <>
      <Container>
        <Image
          src={require(`../../img/${selectedProduct.image}`)?.default}
          alt={selectedProduct.item_name}
        />
        <OptionWrapper>
          <CakeName>{selectedProduct.item_name.replaceAll('-', ' ')}</CakeName>
          <Price>
            {
              selectedProduct.price === 0
                ? 'Various' // custum cakes
                : formatCurrency(selectedProduct.price) //regular cakes and dacquoise
            }
            {
              selectedProduct.price !== 0 && ' / ' // divider
            }
            {
              productType === '/cakes' && selectedProduct.price !== 0
                ? formatCurrency(selectedProduct.price * 1.2) // cake 8 inch price
                : selectedProduct.item_name === 'Dacquoise-Set'
                ? '5-Piece' // dacquoise set piece
                : '1-Piece' // dacquoise piece
            }
          </Price>
          {selectedProduct.tastes.length > 0 && (
            <>
              <TastesTitle>Tastes / Fruits</TastesTitle>
              <TastesWrapper>
                {selectedProduct.tastes.map((item) => (
                  <TastesBtn
                    key={item}
                    isSelected={tastes === item}
                    onClick={() => setTastes(item)}
                  >
                    {item.replaceAll('-', ' ')}
                  </TastesBtn>
                ))}
              </TastesWrapper>
            </>
          )}
          <SizeTitle>Size (inch)</SizeTitle>
          {productType === 'cakes' ? ( // cake size option
            <SizeWrapper>
              <SizeBtn
                isSelected={cakeSize === 6}
                onClick={() => setCakeSize(6)}
              >
                6
              </SizeBtn>
              <SizeBtn
                isSelected={cakeSize === 8}
                onClick={() => setCakeSize(8)}
              >
                8
              </SizeBtn>
            </SizeWrapper>
          ) : (
            // dacquoises has no size option
            <SizeWrapper>
              <NA>N / A</NA>
            </SizeWrapper>
          )}
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
          <AddToCartBtn onClick={() => AddToCartHandler()}>
            {cakeSize === 8
              ? formatCurrency(selectedProduct.price * 1.2 * productQty)
              : formatCurrency(selectedProduct.price * productQty)}
            <br />
            Add To Cart
          </AddToCartBtn>
        </OptionWrapper>
      </Container>
    </>
  );
};
