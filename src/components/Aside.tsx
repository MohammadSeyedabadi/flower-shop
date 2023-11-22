import { useState } from "react";
import Link from "next/link";
import { Filters } from ".";

export default function Aside() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
    <>
      <div
        className={`menu-toggle ${isSidebarActive ? "isSidebarActive" : ""}`}
        onClick={() =>
          setIsSidebarActive(isSidebarActive === true ? false : true)
        }
      >
        <div className="hamburger">
          <span></span>
        </div>
      </div>
      <aside
        className={`sidebar uiGradient--one  ${
          isSidebarActive ? "isSidebarActive" : ""
        }`}
      >
        <Filters />
        <nav className="menu">
          <Link href="/" className="menu-item">
            Home
          </Link>
          <Link href="/" className="menu-item">
            About
          </Link>
          <Link href="/" className="menu-item">
            Portfolio
          </Link>
          <Link href="/" className="menu-item">
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
}
