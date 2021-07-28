import { Fragment } from "react";
import Link from "next/link";
import styles from "./DrugList.module.css";

const DrugList = (props) => {
  return (
    <Fragment>
      <h1 className={styles.drugs__heading}>Alle Medikamente</h1>
      <ul className={styles.drugs__list}>
        {props.drugs.map((drug) => (
          <li className={styles.drugs__item} key={drug._id}>
            <Link
              className={styles.drugs__link}
              href={`/karteikarten/${drug.name}`}
            >
              <a>&rarr; {drug.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default DrugList;
