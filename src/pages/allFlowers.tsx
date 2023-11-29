import { useEffect, useState } from "react";
import { Filters } from "@/components";
import { useContext } from "react";
import { FiltersContext } from "@/store/product-context";
import { ProductsType } from "@/types";
import data from "@/utils/data/data";
import Aside from "@/components/Aside";
import CustomModal from "@/components/CustomModal";

export default function allFlowers() {
  const colOne: ProductsType[] = [];
  const colTwo: ProductsType[] = [];
  const colThree: ProductsType[] = [];
  const colFour: ProductsType[] = [];

  const [mainData, setMainData] = useState<ProductsType[]>();
  const [copyData, setCopyData] = useState<ProductsType[]>();

  useEffect(() => {
    setMainData(data);
    let COPY_DATA = data.slice(0);
    setCopyData(COPY_DATA);
  }, []);

  const { filtersState, filtersDispatch } = useContext(FiltersContext);

  const { price, fastDelivery, outOfStock, ratings, searchQuery } =
    filtersState;

  function transformProducts() {
    let sortedProducts;
    if (mainData) {
      sortedProducts = mainData;
    }

    if (price && mainData) {
      if (price === "Ascending" || price === "Descending") {
        sortedProducts = sortedProducts?.sort((a, b) =>
          price === "Ascending" ? a.price - b.price : b.price - a.price
        );
      } else {
        sortedProducts = copyData;
      }
    }

    if (!outOfStock && mainData) {
      sortedProducts = sortedProducts?.filter((prod) => prod.inStock);
    }

    if (fastDelivery && mainData) {
      sortedProducts = sortedProducts?.filter((prod) => prod.fastDelivery);
    }

    if (ratings && mainData) {
      sortedProducts = sortedProducts?.filter(
        (prod) => prod.ratings >= ratings
      );
    }

    if (searchQuery && mainData) {
      sortedProducts = sortedProducts?.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  }

  transformProducts()?.map((prod) => {
    if (prod.col === 1) {
      colOne.push(prod);
    } else if (prod.col === 2) {
      colTwo.push(prod);
    } else if (prod.col === 3) {
      colThree.push(prod);
    } else if (prod.col === 4) {
      colFour.push(prod);
    }
  });

  return (
    <section className="flex min-h-screen">
      <Aside />
      <main className="content">
        <div className="row">
          <div className="column">
            {colOne.map((prod) => (
              <CustomModal key={prod.id} prod={prod} />
            ))}
          </div>
          <div className="column">
            {colTwo.map((prod) => (
              <CustomModal key={prod.id} prod={prod} />
            ))}
          </div>
          <div className="column">
            {colThree.map((prod) => (
              <CustomModal key={prod.id} prod={prod} />
            ))}
          </div>
          <div className="column">
            {colFour.map((prod) => (
              <CustomModal key={prod.id} prod={prod} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
