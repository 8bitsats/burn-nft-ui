import Footer from "components/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div  className=" flex flex-col h-screen justify-between">
      <Head>
        <title>Feel The Burn</title>
        <meta
          name="description"
          content="Burn your NFTs, get SOL in return!"
        />
      </Head>
      <GalleryView />
      <Footer/>
    </div>
  );
};

export default Home;
