import { HeroProps } from "@/types";
import { title } from "process";

export default function Hero({
  highlight,
  subTitle,
  title,
  children,
  index,
}: HeroProps) {
  return (
    <header className="flex-1 pt-36 sm:px-16 px-6">
      {title && (
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          {title}
        </h1>
      )}

      {subTitle && (
        <p className="text-[27px] text-black-100 font-light mt-5">
         {subTitle}
        </p>
      )}
      {children && children}
    </header>
  );
}
