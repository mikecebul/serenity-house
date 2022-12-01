import { type NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Charlevoix Alano Club</title>
        <meta
          name="description"
          content="An alcohol and drug-free environment for recovery programs."
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />

    </>
  );
};

export default Home;
