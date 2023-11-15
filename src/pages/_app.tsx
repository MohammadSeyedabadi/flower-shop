import Head from "next/head";
import "../styles/global-styles.css";
import FiltersContextProvider from "@/store/product-context";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FiltersContextProvider>
        <Component {...pageProps} />
      </FiltersContextProvider>
    </>
  );
}

export default MyApp;
