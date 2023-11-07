import Link from "next/link";
import { footerLinks } from "@/constants";
import { Footer } from "@/types";

export default function Footer({ bgColor }: Footer) {
  return (
    <section className={`${bgColor} mt-5 border-gray-600`}>
      <footer className="flex flex-col lg:flex-row justify-between border-t max-w-[1440px] mx-auto sm:px-16 px-6 py-10">
        <div className="mb-16 lg:mb-0">
          <h1 className="font-bold text-xl mb-5">Car Rent</h1>
          <p>
            Car Rent <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-36 md:pe-20">
          {footerLinks.map((footerLink) => (
            <div>
              <h3 className="font-semibold mb-3">{footerLink.title}</h3>
              <div className="flex flex-col">
                {footerLink.links.map((link) => (
                  <Link
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
      </footer>
    </section>
  );
}
