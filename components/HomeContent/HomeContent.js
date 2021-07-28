import styles from "./HomeContent.module.css";
import Button from "../UI/Button/Button";

const HomeContent = () => {
  return (
    <div className={styles.home__background}>
      <div className={styles.home__content}>
        <h1 className={styles.home__heading}>Willkommen bei SanWiz!</h1>
        <p className={styles.home__description}>
          Diese Seite ist eine Lernhilfe zum Thema
          <span className={styles["home__description--span"]}>
            &nbsp;Medikamente im Rettungsdienst
          </span>
          . Im Folgenden findest Du zu den gebräuchlichen Medikamenten
          Karteikarten mit deren wichtigsten Eigenschaften. Viel Erfolg beim
          Lernen!
        </p>
        <p className={styles.home__description}>
          Wichtig: Die Angaben auf dieser Seite beziehen sich auf die
          <span className={styles["home__description--span"]}>
            &nbsp;Algorithmen für den Rettungsdienst im Land Schleswig-Holstein
            (Version 5.0.0)
          </span>
          ! Alle Angaben sind ohne Gewähr.
        </p>
        <Button type="button" name="Karteikarten" target="karteikarten" />
      </div>
    </div>
  );
};

export default HomeContent;
