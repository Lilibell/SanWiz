import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import DrugList from "../../components/DrugList/DrugList";
import { dynamicSort } from "../../components/helpers/helpers";

const Karteikarten = (props) => {
  return (
    <Fragment>
      <Head>
        <title>SanWiz - Medikamente</title>
        <meta
          name="description"
          content="Lernhilfe für Medikamente im Rettungsdienst"
        />
      </Head>
      <DrugList drugs={props.drugs} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.DB_CREDENTIALS, {
    useUnifiedTopology: true,
  });

  const db = client.db();
  const drugsCollection = db.collection("drugs");

  const drugs = await drugsCollection.find().toArray();

  drugs.sort(dynamicSort("name"));

  client.close();

  if (!drugs) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      drugs: drugs.map((drug) => ({
        _id: drug._id.toString(),
        name: drug.name,
      })),
    },
  };
}

export default Karteikarten;
