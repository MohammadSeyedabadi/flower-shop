import Head from "next/head";
import "../styles/global-styles.css"

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
