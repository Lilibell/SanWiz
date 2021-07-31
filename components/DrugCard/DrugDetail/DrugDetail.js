import { useState, Fragment } from "react";
import styles from "./DrugDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const DrugDetail = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded((previousState) => {
      return !previousState;
    });
  };

  const detailClasses = `${styles.drug__property} ${
    expanded && styles["drug__property--expanded"]
  }`;

  return (
    <Fragment>
      <div className={styles.drug__accordion}>
        <h2 onClick={toggleDetails} className={styles.drug__subheading}>
          {props.property}
        </h2>
        <div
          onClick={toggleDetails}
          className={styles["drug__accordion-button"]}
        >
          <FontAwesomeIcon icon={expanded ? faCaretUp : faCaretDown} />
        </div>
      </div>
      <p className={detailClasses}>{props.details}</p>
    </Fragment>
  );
};

export default DrugDetail;
