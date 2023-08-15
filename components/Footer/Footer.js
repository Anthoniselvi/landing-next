import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>
        CONTACT
        <br /> DETAILS
      </h2>
      <div className={styles.innerbox}>
        <div>
          <p className={styles.text}>Mailing Address</p>
          <p className={styles.text}>GJ Salai, Chromepet, Chennai 600021</p>
        </div>
        <div>
          <p className={styles.text}>Email Address</p>
          <p className={styles.text}>support@gipmer.com</p>
        </div>
        <div>
          <p className={styles.text}>Phone Number</p>
          <p className={styles.text}>(123) 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
