import { Fragment } from "react";
import Head from "next/head";
import HomeContent from "../components/HomeContent/HomeContent";

const Startseite = () => {
  return (
    <Fragment>
      <Head>
        <title>SanWiz - Wissen für Sanitäter</title>
        <meta
          name="description"
          content="Lernhilfe für Medikamente im Rettungsdienst"
        />
      </Head>
      <HomeContent />
    </Fragment>
  );
};

export default Startseite;
