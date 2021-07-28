import { useState } from "react";
import Link from "next/link";
import styles from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  const [iconClicked, setIconClicked] = useState(false);

  const iconClickHandler = () => {
    setIconClicked((prevState) => !prevState);
    console.log(iconClicked);
  };

  const navMenuClasses = `${styles.navbar__menu} ${
    iconClicked && styles["navbar__menu--active"]
  }`;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>SanWiz</div>
      <ul className={navMenuClasses}>
        <li className={styles.navbar__link}>
          <Link href="/">Start</Link>
        </li>
        <li className={styles.navbar__link}>
          <Link href="/karteikarten">Medikamente</Link>
        </li>
        <li className={styles.navbar__link}>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
      <div className={styles.navbar__icon} onClick={iconClickHandler}>
        <FontAwesomeIcon icon={iconClicked ? faTimes : faBars} />
      </div>
    </nav>
  );
};

export default MainNavigation;
