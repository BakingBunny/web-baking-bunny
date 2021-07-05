import React, { useState, useEffect } from 'react';
import { ProductDetail } from '../component/ProductPage/ProductDetail';

interface Props {
  match: {
    params: {
      id: string;
    };
    url: string;
  };
}

export const ProductPage = (props: Props) => {
  const [productType, setproductType] = useState('');

  useEffect(
    () =>
      setproductType(
        props.match.url.substring(1, props.match.url.lastIndexOf('/'))
      ),
    [props.match.url]
  );

  console.log(productType);

  return (
    <>
      <ProductDetail id={props.match.params.id} productType={productType} />
    </>
  );
};
