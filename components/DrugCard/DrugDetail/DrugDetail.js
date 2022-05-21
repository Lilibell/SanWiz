import { useState, Fragment } from "react";
import AnimateHeight from "react-animate-height";
import styles from "./DrugDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const DrugDetail = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState(0);

    const toggleDetails = () => {
        setExpanded((previousState) => {
            return !previousState;
        });
    };

    const toggleHeight = () => {
        setHeight((previousState) => {
            return previousState === 0 ? "auto" : 0;
        });
    };

    return (
        <Fragment>
            <div className={styles.drug__accordion}>
                <h2
                    onClick={(toggleDetails, toggleHeight)}
                    className={styles.drug__subheading}
                >
                    {props.property}
                </h2>
                <div
                    onClick={(toggleDetails, toggleHeight)}
                    className={styles["drug__accordion-button"]}
                >
                    <FontAwesomeIcon
                        icon={expanded ? faCaretUp : faCaretDown}
                    />
                </div>
            </div>
            <AnimateHeight duration={500} height={height}>
                <p className={styles.drug__property}>{props.details}</p>
            </AnimateHeight>
        </Fragment>
    );
};

export default DrugDetail;
