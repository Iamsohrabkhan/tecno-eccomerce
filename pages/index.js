import Head from "next/head";
import { useGlobalContext } from "./components/appContext";
import Banner from "./components/banner";
import Brand from "./components/brand";
import Featureproduct from "./components/featureproduct";
import HeroSection from "./components/HeroSection";
import Loader from "./components/loader";
import Newslater from "./components/newslater";

export default function Home() {
  const { isLoading } = useGlobalContext();
  return (
    <>
      <Head>
        <title>Eccomerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <Banner/>
        
        <section className="bg-white my-2">
   <div className="mx-auto px-4 sm:container">
      <div className="border-primary border-l-[5px] pl-5">
         <h2 className="text-2xl font-semibold text-black">
            Featured Product
         </h2>
      
      </div>
   </div>
</section>
        {isLoading ? <Loader /> : <Featureproduct />}
        <Brand />
        <Newslater/>
      </main>
    </>
  );
}
