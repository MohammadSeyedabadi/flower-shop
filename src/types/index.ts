import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface HeroProps {
  highlight?:string;
  subTitle?:string;
  title:string;
  children?:any;
  index?:string;
}

export interface Footer{
  bgColor:string;
}