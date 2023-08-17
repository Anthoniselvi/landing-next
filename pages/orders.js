import Head from "next/head";
import styles from "../styles/orders.module.css";
import GetReports from "@/components/Orders/GetReports";

export default function Orders() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="shortcut icon" href="/image/logo.jpeg" /> */}
        <title>Landing Page</title>
      </Head>
      <GetReports />
    </div>
  );
}
