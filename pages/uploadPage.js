import Head from "next/head";
import styles from "../styles/orders.module.css";
import ExcelUploader from "@/components/Upload/ExcelUploader";
import GetReports from "@/components/Orders/GetReports";
import { useState } from "react";
import { useOrdersContext } from "@/ordersContext";

export default function UploadPage() {
  const [upload, setUpload] = useState(true);
  const { ordersData, setOrdersData } = useOrdersContext();
  console.log("ordersData in uploadPage :" + JSON.stringify(ordersData));
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
      </Head>
      {upload ? (
        <ExcelUploader setOrdersData={setOrdersData} />
      ) : (
        <GetReports />
      )}
    </div>
  );
}
