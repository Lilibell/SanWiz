import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(
    props.drugList.indexOf(props.currentPageName)
  );
  const [displayedLinks, setDisplayedLinks] = useState([]);

  const changePageHandler = (newPageName) => {
    setCurrentPage(props.drugList.indexOf(newPageName));
  };

  const previousPage =
    currentPage === 0
      ? props.drugList[props.drugList.length - 1]
      : props.drugList[currentPage - 1];
  const nextPage =
    currentPage === props.drugList.length - 1
      ? props.drugList[0]
      : props.drugList[currentPage + 1];

  useEffect(() => {
    let tempDisplayedLinks = [
      previousPage,
      props.drugList[currentPage],
      nextPage,
    ];
    setDisplayedLinks(tempDisplayedLinks);
  }, [currentPage]);

  const links = displayedLinks.map((drugEntry) => (
    <Link href={`/karteikarten/${drugEntry}`} key={drugEntry}>
      <a
        className={
          props.drugList[currentPage] === drugEntry ? styles.active : undefined
        }
        onClick={() => {
          changePageHandler(drugEntry);
        }}
      >
        {drugEntry}
      </a>
    </Link>
  ));

  return (
    <div className={styles.pagination}>
      <Link href={`/karteikarten/${previousPage}`}>
        <a
          className={styles.pagination__arrow}
          onClick={() => {
            changePageHandler(previousPage);
          }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </a>
      </Link>
      <div className={styles.pagination__links}>{links}</div>
      <Link href={`/karteikarten/${nextPage}`}>
        <a
          className={styles.pagination__arrow}
          onClick={() => {
            changePageHandler(nextPage);
          }}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </a>
      </Link>
    </div>
  );
};

export default Pagination;
