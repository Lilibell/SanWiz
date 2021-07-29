import DrugDetail from "./DrugDetail/DrugDetail";
import styles from "./DrugCard.module.css";

const DrugCard = (props) => {
  return (
    <div className={styles.drug__card}>
      <div className={styles.drug__caption}>
        <h1 className={styles.drug__heading}>{props.name}</h1>
      </div>
      <div className={styles.drug__properties}>
        <DrugDetail property="Wirkweise" details={props.wirkweise} />
        <DrugDetail property="Indikation" details={props.indikation} />
        <DrugDetail
          property="Kontraindikation"
          details={props.kontraindikation}
        />
        <DrugDetail property="Nebenwirkungen" details={props.nebenwirkungen} />
        <DrugDetail
          property="Maßnahmen bei Nebenwirkungen"
          details={props.nwmaßnahmen}
        />
        <DrugDetail property="Wirkeintritt" details={props.wirkeintritt} />
        <DrugDetail property="Wirkdauer" details={props.wirkdauer} />
      </div>
    </div>
  );
};

export default DrugCard;
