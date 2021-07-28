import styles from "./Footer.module.css";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <div className={styles.footer__wrapper}>
      <p className={styles.footer__text}>
        &copy; {date} Erstellt von Lisa Meister.
      </p>
    </div>
  );
};

export default Footer;
