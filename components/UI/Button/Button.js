import { useRouter } from "next/router";
import styles from "./Button.module.css";

const Button = (props) => {
  const router = useRouter();

  const onClickHandler = () => {
    if (props.target) {
      router.push(`/${props.target}`);
    }
    return;
  };

  const btnClasses = `${styles.button} ${props.secondary && styles.secondary}`;

  return (
    <button type={props.type} className={btnClasses} onClick={onClickHandler}>
      {props.name}
    </button>
  );
};

export default Button;
