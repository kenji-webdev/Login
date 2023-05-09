import Card from "../../components/Card/Card";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  return (
    <main className={styles.background}>
      {
        // make into card component
      }
      <Card
        function={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </main>
  );
};

export default AuthPage;
