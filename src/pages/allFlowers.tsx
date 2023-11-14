import { Filters } from "@/components";
import { useContext } from "react";

export default function allFlowers() {
  return (
    <>
      <nav className="nav">
        <div>im nav</div>
      </nav>
      <section className="allFlowers--contentWrapper">
        <aside className="sidebar">
          <Filters />
        </aside>
        <div className="content"></div>
      </section>
    </>
  );
}
