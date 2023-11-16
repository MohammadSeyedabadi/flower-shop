import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  link?: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface HeroProps {
  highlight?: string;
  subTitle?: string;
  title: string;
  children?: any;
  index?: string;
}

export interface Footer {
  bgColor?: string;
}

export interface FiltersType {
  price: string;
  fastDelivery: boolean; 
  outOfStock: boolean;
  ratings: number; // the initial state of the MUI rating component is null !? idk
  searchQuery: string;
}

export interface FiltersReducerAction {
  payload: string | number | null; // null and number are for rating
  type:string;
}

export interface ProductsType {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  ratings: number;
  inStock: number;
  fastDelivery: boolean;
}
