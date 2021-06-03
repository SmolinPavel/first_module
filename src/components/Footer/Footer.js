import { Test } from "components/shared/Test";
import styles from "./Footer.module.scss";

export const Footer = ({
  first,
  children,
  user: { name, state, questions },
}) => {
  return (
    <footer className={styles.Footer}>
      <Test />
      <h2 className={styles.Footer__Title}>
        Everyone has come back from the break
      </h2>
      <p>
        First {first} is less then 10 that is {first < 10 ? "correct" : "a lie"}
      </p>
      {children}
      <p>
        My name is {name}, I am {state} and I will try my best to cover all{" "}
        {questions} questions
      </p>
    </footer>
  );
};

Footer.defaultProps = {
  first: 3,
};
