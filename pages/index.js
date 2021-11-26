import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://www.pngkit.com/png/detail/60-606032_airbnb-a-icon-vector-logo-airbnb-logo-vector.png" />
      </Head>
      <Header/>
      <Banner/>
    </div>
  );
}
