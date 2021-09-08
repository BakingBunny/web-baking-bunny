// import React from 'react';
import { useCalcCartItems } from './useCalcCartItems';

const useCheckOutPageValid = (): boolean => {
  const { countCartItems } = useCalcCartItems();
  if (countCartItems <= 0) return false;

  return true;
};

const useReviewValid = (): boolean => {
  if (!useCheckOutPageValid()) return false;

  return true;
};

const useConfirm = (): boolean => {
  // if (!useReviewValid()) return false;

  return true;
};

export { useCheckOutPageValid, useReviewValid, useConfirm };
