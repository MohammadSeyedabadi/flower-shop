import { Filters } from "@/components";


export default function allCars() {
  return (
    <>
      <nav className="nav">
        <div>im nav</div>
      </nav>
      <div className="page">
        <aside className="sidebar">
            <Filters />
        </aside>
        <div className="content"></div>
      </div>
    </>
  );
}
