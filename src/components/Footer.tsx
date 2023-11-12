import Link from "next/link";
import { footerLinks } from "@/constants";
import { Footer } from "@/types";

export default function Footer({ bgColor }: Footer) {
  return (
    <footer
      className={`${bgColor} mt-5 border-4 border-indigo-200 border-t-indigo-500 pb-4`}
    >
      <div className="flex flex-wrap lg:flex-row justify-between max-w-[1440px] mx-auto sm:px-16 px-6 py-10 gap-16">
        <div className="mb-16 lg:mb-0">
          <h1 className="font-bold text-xl mb-5">Flower Shop</h1>
          <p>
            Flower Shop <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex flex-wrap gap-16 md:flex-row gap-y-10 md:gap-36 md:pe-20">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h3 className="font-semibold mb-3">{footerLink.title}</h3>
              <div className="flex flex-col">
                {footerLink.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-600 mb-5 last:mb-0"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-w-[1440px] mx-auto sm:px-16 px-6 gap-2">
        <div className="me-auto font-semibold">
          @2023 Flower Shop. All rights reserved
        </div>
        <div className="text-gray-600 me-16">
          <Link href="/">Privacy & Policy</Link>
        </div>
        <div className="text-gray-600">
          <Link href="/">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
}
