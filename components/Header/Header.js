import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <p>GIPMER</p>
        <h1>Unlock the Power of Your Excel Data</h1>
        <p>Transform Your Business Insights</p>
        <button>UPLOAD DATA</button>
      </div>
    </div>
  );
};

export default Header;
