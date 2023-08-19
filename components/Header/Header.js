import styles from "../../styles/Header.module.css";
import { read, utils } from "xlsx";
import { useRouter } from "next/router";
import { useState, useRef } from "react"; // Import 'useRef'
import { useOrdersContext } from "@/ordersContext";

const Header = () => {
  const router = useRouter();
  const { setOrdersData } = useOrdersContext();
  const fileInputRef = useRef(null); // Create a ref for the file input element

  const handleFileUpload = async () => {
    if (fileInputRef.current.files.length === 0) {
      return; // Don't proceed if no file selected
    }

    const file = fileInputRef.current.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = read(data, { type: "array" });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(worksheet, { header: 1 });

      const headers = jsonData[0];
      const ordersData = jsonData.slice(1).map((row) => {
        const order = {};
        headers.forEach((header, index) => {
          order[header] = row[index];
        });
        return order;
      });

      setOrdersData(ordersData);
      await router.push("/orders");
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h3 className={styles.headcolor}>GIPMER</h3>
        <h1 className={styles.heading}>UNLOCK THE POWER OF YOUR EXCEL DATA</h1>
        <p className={styles.text}>Transform Your Business Insights</p>
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".xls,.xlsx"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        {/* Button triggers the hidden file input */}
        <button
          className={styles.button}
          onClick={() => fileInputRef.current.click()}
        >
          UPLOAD DATA
        </button>
      </div>
    </div>
  );
};

export default Header;
