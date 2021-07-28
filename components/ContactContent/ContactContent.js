import Form from "../Form/Form";
import styles from "./ContactContent.module.css";

const ContactContent = () => {
  return (
    <div className={styles.contact__wrapper}>
      <h1 className={styles.contact__heading}>Kontakt</h1>
      <p className={styles.contact__text}>
        Fragen, Wünsche oder Anregungen? Schreib mir gerne eine Nachricht über
        das Kontaktformular oder als E-Mail an lisa.meister.93@gmx.de.
      </p>
      <Form />
    </div>
  );
};

export default ContactContent;
