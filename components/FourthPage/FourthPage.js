import styles from "../../styles/FourthPage.module.css";
import Image from "next/image";

const FourthPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>WHAT CLIENTS SAY</h2>
      <div className={styles.innerbox}>
        <div className={styles.singlebox}>
          <div className={styles.imageContainer1}>
            {/* <Image
              src="/image/6.png"
              alt="Client 1"
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
          <div className={styles.right}>
            <h4>Jared Nicholson</h4>
            <p className={styles.text}>
              So happy to have found a garage filled with car-obsessed people
              like me! When it comes to my car, I trust only Miles' Garage.
            </p>
          </div>
        </div>

        <div className={styles.singlebox}>
          <div className={styles.imageContainer2}>
            {/* <Image
              src="/image/7.png"
              alt="Client 2"
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
          <div className={styles.right}>
            <h4>Nathaniel Gilmore</h4>
            <p className={styles.text}>
              The staff here really know their stuff. I can trust them with
              every repair, big or small.
            </p>
          </div>
        </div>

        <div className={styles.singlebox}>
          <div className={styles.imageContainer3}>
            {/* <Image
              src="/image/8.png"
              alt="Client 3"
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
          <div className={styles.right}>
            <h4>Martina Lewinson</h4>
            <p className={styles.text}>
              At Miles' Garage, I got fast and flawless service. I love their
              efficiency and attention to detail.
            </p>
          </div>
        </div>

        <div className={styles.singlebox}>
          <div className={styles.imageContainer4}>
            {/* <Image
              src="/image/9.png"
              alt="Client 4"
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
          <div className={styles.right}>
            <h4>Chris Nguyen</h4>

            <p className={styles.text}>
              Fast, fair, and affordable service. I highly recommend Miles'
              Garage if your car needs repair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
