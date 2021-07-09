import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

export const ProductDetail: React.FC<Props> = ({ id, productType }) => {
  const [productList, setProductList] = useState<Product[]>(dacquoisesList);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [productToCart, setproductToCart] = useState<CartState>({
    id: '',
    type: '',
    item_name: '',
    tastes: '',
    cakeSize: 6,
    qty: 1,
    special: '',
  });
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

    selectedProduct &&
      setproductToCart((prevState) => ({
        ...prevState,
        id: uuidv4(),
        type: selectedProduct.type,
        item_name: selectedProduct.item_name,
      }));

    // const fetchData = async () => {
    //   window.scrollTo(0, 0); // scroll to top
    //   const result = await fetch(`/api/cake/${id}`);
    //   const body = await result.json();
    //   setSelectedCake(body);
    // };
    // fetchData(); //Cannot use async on useEffect, so made the fetchData and run it later.
  }, [id, productType, productList, selectedProduct]);

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
                    isSelected={productToCart.tastes === item}
                    onClick={() =>
                      setproductToCart((prevState) => ({
                        ...prevState,
                        tastes: item,
                      }))
                    }
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
                isSelected={productToCart.cakeSize === 6}
                onClick={() =>
                  setproductToCart((prevState) => ({
                    ...prevState,
                    cakeSize: 6,
                  }))
                }
              >
                6
              </SizeBtn>
              <SizeBtn
                isSelected={productToCart.cakeSize === 8}
                onClick={() =>
                  setproductToCart((prevState) => ({
                    ...prevState,
                    cakeSize: 8,
                  }))
                }
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
              onClick={() =>
                setproductToCart((prevState) => ({
                  ...prevState,
                  qty: productToCart.qty - 1,
                }))
              }
              disabled={productToCart.qty <= 1}
            >
              -
            </QtyMinusBtn>
            <CakeQty>{productToCart.qty}</CakeQty>
            <QtyPlusBtn
              onClick={() =>
                setproductToCart((prevState) => ({
                  ...prevState,
                  qty: productToCart.qty + 1,
                }))
              }
              disabled={productToCart.qty >= 9}
            >
              +
            </QtyPlusBtn>
          </QtyWrapper>
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
