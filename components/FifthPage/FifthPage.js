import styles from "../../styles/FifthPage.module.css";

const FifthPage = () => {
  return (
    <div className={styles.container}>
      <h1>STEP BY STEP</h1>
      <div className={styles.innerbox}>
        <div>
          <p>Download Standard Format</p>
          <p>
            We have standard template for you to fill in your business details.
            Download the template from GIPMER.
          </p>
        </div>

        <div>
          <p>Fill in your business data & Submit</p>
          <p>Just enter your business data into the downloaded</p>
        </div>

        <div>
          <p>Watch your business insights</p>
          <p>
            Transforms raw numbers into clear insights and see your sales
            trends, order frequencies, and customer behavior.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
