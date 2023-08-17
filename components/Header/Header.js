import styles from "../../styles/Header.module.css";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();

  const navigateToUploadPage = () => {
    router.push("/uploadPage");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h3 className={styles.headcolor}>GIPMER</h3>
        <h1 className={styles.heading}>UNLOCK THE POWER OF YOUR EXCEL DATA</h1>
        <p className={styles.text}>Transform Your Business Insights</p>
        <button onClick={navigateToUploadPage} className={styles.button}>
          UPLOAD DATA
        </button>
      </div>
    </div>
  );
};

export default Header;
