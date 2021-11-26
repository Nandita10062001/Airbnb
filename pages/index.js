import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link
          rel="icon"
          href="https://www.pngkit.com/png/detail/60-606032_airbnb-a-icon-vector-logo-airbnb-logo-vector.png"
        />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        
        {cardsData.map((item) => (
          <MediumCard
          key={item.img}
          img={item.img}
          title={item.title}
          />
        ))}
      
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
