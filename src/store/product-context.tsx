import { useState, useReducer } from "react";
import { createContext, useEffect } from "react";
import { FiltersType, FiltersReducerAction } from "@/types";

const ProductContext = createContext<any>({});

export default ProductContext;

export function ProductContextProvider(props: any) {
  const [productState, productDispatch] = useReducer(productReducer, {
    price: "",
    fastDelivery: false, // only fast delivery
    outOfStock: false, // only out of stock
    ratings: null,
    searchQuery: "",
  });

  function productReducer(state: any, action: FiltersReducerAction) {
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, price: action.payload };
      case "FILTER_BY_STOCK":
        return { ...state, outOfStock: !state.outOfStock };
      case "FILTER_BY_DELIVERY":
        return { ...state, fastDelivery: !state.fastDelivery };
      case "FILTER_BY_RATINGS":
        return { ...state, ratings: action.payload };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "CLEAR_FILTERS":
        return { outOfStock: false, fastDelivery: false, ratings: 0 };
      default:
        return state;
    }
  }

  const context = {
    productState,
    productDispatch,
  };

  return (
    <ProductContext.Provider value={context}>
      {props.children}
    </ProductContext.Provider>
  );
}
