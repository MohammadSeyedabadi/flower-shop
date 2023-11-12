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
  fastDelivery: boolean;
  inStock: number;
  ratings: number;
  searchQuery: string;
}

export interface Products {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  ratings: null | number;
  inStock: number;
  fastDelivery: boolean;
}
