import { useEffect, useState } from "react";
import { Filters } from "@/components";
import { useContext } from "react";
import { FiltersContext } from "@/store/product-context";
import { ProductsType } from "@/types";
import data from "@/utils/data/data";
import Aside from "@/components/Aside";
import CustomModal from "@/components/CustomModal";

export default function allFlowers() {
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
  console.log(filtersState);
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

  return (
    <section className="flex min-h-screen">
      <Aside />
      <main className="content">
        <h1>ALL FLOWERS</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          explicabo!
        </p>
        <CustomModal/>
      </main>
    </section>
  );
}
