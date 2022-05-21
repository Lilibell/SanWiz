import Button from "../UI/Button/Button";
import styles from "./Form.module.css";

const Form = () => {
    return (
        <div className={styles.form__wrapper}>
            <form
                action="mailto:lisa.meister.93@gmx.de"
                method="POST"
                encType="multipart/form-data"
                className={styles.form}
                autoComplete="off"
            >
                <div className={styles.form__group}>
                    <label htmlFor="name" className={styles.form__label}>
                        Name
                    </label>
                    <input
                        type="text"
                        className={styles.form__input}
                        id="name"
                        required
                    />
                </div>

                <div className={styles.form__group}>
                    <label htmlFor="email" className={styles.form__label}>
                        E-Mail
                    </label>
                    <input
                        type="email"
                        className={styles.form__input}
                        id="email"
                        required
                    />
                </div>

                <div className={styles.form__group}>
                    <label htmlFor="message" className={styles.form__label}>
                        Ihre Nachricht
                    </label>
                    <textarea
                        className={styles.form__input}
                        id="message"
                        rows="7"
                        cols="50"
                        required
                    ></textarea>
                </div>

                <div className={styles["form__button-wrapper"]}>
                    <Button type="submit" name="Nachricht senden" />
                </div>
            </form>
        </div>
    );
};

export default Form;
