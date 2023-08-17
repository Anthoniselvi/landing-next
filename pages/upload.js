import Head from "next/head";
import styles from "../styles/orders.module.css";
import ExcelUploader from "@/components/Upload/ExcelUploader";

export default function Upload() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="shortcut icon" href="/image/logo.jpeg" /> */}
        <title>Landing Page</title>
      </Head>
      <ExcelUploader />
    </div>
  );
}
