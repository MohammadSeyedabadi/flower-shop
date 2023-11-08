import Link from "next/link";
import { ButtonOne } from "@/components";

export default function Navigation() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto sm:px-16 px-6 flex justify-between items-center py-4 bg-transparent">
        <Link href="/" className="font-bold text-xl">
          AutoTrader
        </Link>
        <ButtonOne
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] font-semibold"
        />
      </nav>
    </header>
  );
}
