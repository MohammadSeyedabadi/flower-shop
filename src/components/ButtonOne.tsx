import Image from "next/image";
import { CustomButtonProps } from "@/types";

export default function ButtonOne({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
