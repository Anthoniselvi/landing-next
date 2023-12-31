import styles from "../../styles/SecondPage.module.css";
import Image from "next/image";

const SecondPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftbox}></div>
      {/* <Image
        src="/image/2.png"
        style={{
          width: "100%",
          height: "100%",
        }}
        width={400}
        height={400}
        alt="production-img"
      /> */}
      <div className={styles.rightbox}>
        <h2 className={styles.heading}>YOUR BUSINESS INTELLIGENCE SOLUTION</h2>
        <p className={styles.text}>
          Are you drowning in a sea of Excel spreadsheets, trying to make sense
          of your business data? Wish you could unlock valuable insights and
          drive your business forward with confidence? Look no further!
          Introducing GIPMER - Your ultimate solution to convert mundane Excel
          data into actionable business intelligence for any type of business.
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
