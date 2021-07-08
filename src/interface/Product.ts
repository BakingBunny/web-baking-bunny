import React from 'react';

export interface Product {
  type: string;
  item_name: string;
  item_name_kor: string;
  tastes: string[];
  tastes_kor: string[];
  price: number;
  available_date: number[];
  image: string;
  special?: string;
}
