import { Filters } from "@/components";
import { useContext } from "react";
import { FiltersContext } from "@/store/product-context";
import data from "@/utils/data/data";

export default function allFlowers() {
  const { filtersState, filtersDispatch } = useContext(FiltersContext);

  const { price, fastDelivery, outOfStock, ratings, searchQuery } =
    filtersState;
  console.log(price,"price")
  function transformProducts() {
    let sortedProducts = data;
    if (price) {
      sortedProducts = sortedProducts.sort((a, b) =>
        price === "Ascending" ? a.price - b.price : b.price - a.price
      );
    }

    if (!outOfStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (fastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (ratings) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= ratings);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  }

  return (
    <>
      <nav className="nav">
        <div>im nav</div>
      </nav>
      <section className="allFlowers--contentWrapper">
        <aside className="sidebar">
          <Filters />
        </aside>
        <div className="content">
          {transformProducts().map((prod) => {
           
            return (
              <div key={prod.id} className="flex justify-between">
                <span className="flex-1">name: {prod.name}</span>
                <span className="flex-1">
                  description: {prod.description}
                </span>
                <span className="flex-1">price: {prod.price}</span>
                <span className="flex-1">ratings: {prod.ratings}</span>
                <span className="flex-1">inStock: {prod.inStock}</span>
                <span className="flex-1">
                  fastDelivery: {`${prod.fastDelivery}`}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
