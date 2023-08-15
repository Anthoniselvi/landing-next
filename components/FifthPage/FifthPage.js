import styles from "../../styles/FifthPage.module.css";

const FifthPage = () => {
  return (
    <div className={styles.container}>
      <h2>STEP BY STEP</h2>
      <div className={styles.innerbox}>
        <div className={styles.singlebox}>
          <p className={styles.heading}>Download Standard Format</p>
          <p className={styles.text}>
            We have standard template for you to fill in your business details.
            Download the template from GIPMER.
          </p>
        </div>

        <div className={styles.singlebox}>
          <p className={styles.heading}>Fill in your business data & Submit</p>
          <p className={styles.text}>
            Just enter your business data into the downloaded
          </p>
        </div>

        <div className={styles.singlebox}>
          <p className={styles.heading}>Watch your business insights</p>
          <p className={styles.text}>
            Transforms raw numbers into clear insights and see your sales
            trends, order frequencies, and customer behavior.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
