import styles from "./Card.module.scss";
import logo from "../../assets/logo.svg";

interface CardProps {
  function: () => void;
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.container} ${styles["container-logo"]}`}>
        <img
          src={logo}
          alt="Health company dashboard logo"
          width={68}
          height={85}
          decoding="async"
        />
        <h1 className={styles.title}>Login</h1>
      </div>
      <form>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Olaboluwatofezzy@ymail.com"
          className={`${styles.input} ${styles["input-email"]}`}
        />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="XXXXXXXXXXXXXX"
          className={`${styles.input} ${styles["input-password"]}`}
        />
        <div className={styles.container}>
          <div className={styles.center}>
            <input type="checkbox" name="remember" id="remember" />
            <label
              htmlFor="remember"
              className={`${styles.label} ${styles["label-remember"]}`}
            >
              Remember me
            </label>
          </div>
          <a href="#" className={`${styles.label} ${styles["label-password"]}`}>
            Forgot Password?
          </a>
        </div>
        <button type="submit" className={styles.submit}>
          Login
        </button>
      </form>
      <div>
        <p className={styles.paragraph}>
          Don't have an account?{" "}
          <a href="#" className={styles.cta}>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
