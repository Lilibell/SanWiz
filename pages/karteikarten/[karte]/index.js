import { MongoClient } from "mongodb";
import { useState, useEffect, Fragment } from "react";
import useWindowSize from "../../../components/hooks/windowSize";
import Router from "next/router";
import Head from "next/head";
import DrugCard from "../../../components/DrugCard/DrugCard";
import Pagination from "../../../components/UI/Pagination/Pagination";
import SideNavigation from "../../../components/UI/SideNavigation/SideNavigation";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { dynamicSort } from "../../../components/helpers/helpers";

const DrugPage = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setIsLoading(true);
        };
        const end = () => {
            setIsLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    const width = useWindowSize();

    let navType =
        width < 900 ? (
            <Pagination
                drugList={props.drugList}
                currentPageName={props.drugData.name}
            />
        ) : (
            <SideNavigation
                drugList={props.drugList}
                currentPageName={props.drugData.name}
            />
        );
    let style =
        width < 900
            ? {
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
              }
            : {
                  position: "fixed",
                  top: "50%",
                  left: "60%",
                  transform: "translate(-50%, -50%)",
              };

    return (
        <Fragment>
            <Head>
                <title>{props.drugData.name}</title>
                <meta
                    name="description"
                    content={`${props.drugData.name} ${props.drugData.wirkweise}`}
                />
            </Head>
            {navType}
            {!isLoading && (
                <DrugCard
                    name={props.drugData.name}
                    wirkweise={props.drugData.wirkweise}
                    wirkeintritt={props.drugData.wirkeintritt}
                    wirkdauer={props.drugData.wirkdauer}
                    indikation={props.drugData.indikation}
                    kontraindikation={props.drugData.kontraindikation}
                    nebenwirkungen={props.drugData.nebenwirkungen}
                    nwmaßnahmen={props.drugData.nwmaßnahmen}
                />
            )}
            {isLoading && (
                <Loader
                    style={style}
                    type="ThreeDots"
                    color="#2095ac"
                    height={80}
                    width={80}
                />
            )}
        </Fragment>
    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect(process.env.DB_CREDENTIALS, {
        useUnifiedTopology: true,
    });

    const db = client.db();
    const drugsCollection = db.collection("drugs");

    const drugs = await drugsCollection.find({}, { name: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: drugs.map((drug) => ({
            params: { karte: drug.name.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const drugName = context.params.karte;

    const client = await MongoClient.connect(process.env.DB_CREDENTIALS, {
        useUnifiedTopology: true,
    });

    const db = client.db();
    const drugsCollection = db.collection("drugs");

    const drug = await drugsCollection.findOne({ name: drugName });
    const drugList = await drugsCollection.find().toArray();

    drugList.sort(dynamicSort("name"));

    client.close();

    if (!drug) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            drugData: {
                _id: drug._id.toString(),
                name: drug.name,
                wirkweise: drug.wirkweise,
                wirkeintritt: drug.wirkeintritt,
                wirkdauer: drug.wirkdauer,
                indikation: drug.indikation,
                kontraindikation: drug.kontraindikation,
                nebenwirkungen: drug.nebenwirkungen,
                nwmaßnahmen: drug.nwmaßnahmen,
            },
            drugList: drugList.map((drugEntry) => {
                return drugEntry.name;
            }),
        },
    };
}

export default DrugPage;
