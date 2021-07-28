import { useState } from "react";
import Link from "next/link";
import styles from "./SideNavigation.module.css";

const SideNavigation = (props) => {
  const [currentPage, setCurrentPage] = useState(props.currentPageName);

  const changePageHandler = (newPageName) => {
    setCurrentPage(newPageName);
  };

  return (
    <div className={styles.sidenav}>
      <ul className={styles.sidenav__list}>
        {props.drugList.map((drug) => (
          <li className={styles.sidenav__item} key={drug}>
            <Link
              className={styles.sidenav__link}
              href={`/karteikarten/${drug}`}
            >
              <a
                className={currentPage === drug ? styles.active : undefined}
                onClick={() => {
                  changePageHandler(drug);
                }}
              >
                {drug}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
