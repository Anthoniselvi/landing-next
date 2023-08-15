import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>CONTACT DETAILS</h2>
      <div className={styles.innerbox}>
        <div className={styles.singlebox}>
          <h5 className={styles.text}>MAILING ADDRESS</h5>
          <p className={styles.text}>GJ Salai, Chromepet, Chennai 600021</p>
        </div>
        <div className={styles.singlebox}>
          <h5 className={styles.text}>EMAIL ADDRESS</h5>
          <p className={styles.text}>support@gipmer.com</p>
        </div>
        <div className={styles.singlebox}>
          <h5 className={styles.text}>PHONE NUMBER</h5>
          <p className={styles.text}>(123) 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
