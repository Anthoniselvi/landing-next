import React, { useState } from "react";
import { read, utils } from "xlsx";
import { useRouter } from "next/router";
import styles from "../../styles/ExcelUpload.module.css";

const ExcelUploader = ({ setOrdersData }) => {
  const router = useRouter();

  const [dataArray, setDataArray] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = read(data, { type: "array" });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(worksheet, { header: 1 });

      const headers = jsonData[0];
      const ordersData = jsonData.slice(1).map((row) => {
        const order = {};
        row.forEach((value, index) => {
          order[headers[index]] = value;
        });
        return order;
      });

      setDataArray(ordersData);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataArray);
    setOrdersData(dataArray);
    router.push("/orders");
  };
  return (
    <div className={styles.container}>
      <h2 style={{ marginBottom: "20%", textAlign: "center" }}>
        Upload file to Generate Reports
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "left",
          justifyContent: "left",
        }}
      >
        <input
          type="file"
          accept=".xlsx"
          onChange={handleFileUpload}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            width: "300px",
            height: "50px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            width: "150px",
            height: "40px",
            backgroundColor: "#3480FA",
            border: "none",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExcelUploader;
