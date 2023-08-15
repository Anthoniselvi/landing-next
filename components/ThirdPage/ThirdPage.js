import styles from "../../styles/ThirdPage.module.css";
import Image from "next/image";

const ThirdPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>What we offer</h2>
      <div className={styles.innerbox}>
        <div className={styles.singlebox1}>
          <div className={styles.bottombox1}>
            <p>Effortless Data Analysis</p>
            <p>Say goodbye to hours of manual data crunching.</p>
          </div>
        </div>

        <div className={styles.singlebox2}>
          <div className={styles.bottombox2}>
            <p>Customer Insights</p>
            <p>Understand your customer base like never before.</p>
          </div>
        </div>

        <div className={styles.singlebox3}>
          <div className={styles.bottombox3}>
            <p>User-Friendly Interface</p>
            <p>
              No technical expertise needed. Access valuable insights with ease{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
