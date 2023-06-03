import styles from "./AuthCard.module.scss";
import logo from "../../assets/logo.svg";
import AuthForm from "../AuthForm/AuthForm";

const AuthCard = () => {
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
      <AuthForm isSignUp={true} />
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

export default AuthCard;
