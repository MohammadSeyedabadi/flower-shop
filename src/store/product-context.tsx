import { createContext, useReducer } from "react";

const initialFiltersState = {
  price: "",
  fastDelivery: false, // only fast delivery
  outOfStock: false, // only out of stock
  ratings: 0,
  searchQuery: "",
};

type FILTERSACTIONTYPE =
  | { type: "SORT_BY_PRICE"; payload: string }
  | { type: "FILTER_BY_STOCK" }
  | { type: "FILTER_BY_DELIVERY" }
  | { type: "FILTER_BY_RATINGS"; payload: number }
  | { type: "FILTER_BY_SEARCH"; payload: string };

function filtersReducer(
  state: typeof initialFiltersState,
  action: FILTERSACTIONTYPE
) {
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
    default:
      // return state;
      throw new Error("Unknown action");
  }
}

export const FiltersContext = createContext<{
  filtersState: typeof initialFiltersState;
  filtersDispatch: React.Dispatch<FILTERSACTIONTYPE>;
}>({
  filtersState: initialFiltersState,
  filtersDispatch: () => {},
});

export default function FiltersContextProvider(props: any) {
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    initialFiltersState
  );

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {props.children}
    </FiltersContext.Provider>
  );
}
