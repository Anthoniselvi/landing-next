import styles from "../../styles/ThirdPage.module.css";
import Image from "next/image";

const ThirdPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>WHAT WE OFFER</h2>
      <div className={styles.innerbox}>
        <div className={styles.singlebox1}>
          <div className={styles.topbox1}></div>
          <div className={styles.bottombox1}>
            <h6 className={styles.toptext}>Effortless Data Analysis</h6>
            <p className={styles.bottomtext}>
              Say goodbye to hours of manual data crunching.
            </p>
          </div>
        </div>

        <div className={styles.singlebox2}>
          <div className={styles.topbox2}></div>
          <div className={styles.bottombox2}>
            <h6 className={styles.toptext}>Customer Insights</h6>
            <p className={styles.bottomtext}>
              Understand your customer base like never before.
            </p>
          </div>
        </div>

        <div className={styles.singlebox3}>
          <div className={styles.topbox3}></div>
          <div className={styles.bottombox3}>
            <h6 className={styles.toptext}>User-Friendly Interface</h6>
            <p className={styles.bottomtext}>
              No technical expertise needed. Access valuable insights with ease{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
