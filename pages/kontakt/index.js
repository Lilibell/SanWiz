import { Fragment } from "react";
import Head from "next/head";
import ContactContent from "../../components/ContactContent/ContactContent";

const Kontakt = () => {
  return (
    <Fragment>
      <Head>
        <title>SanWiz - Kontakt</title>
        <meta
          name="description"
          content="Lernhilfe für Medikamente im Rettungsdienst"
        />
      </Head>
      <ContactContent />
    </Fragment>
  );
};

export default Kontakt;
