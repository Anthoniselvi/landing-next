import React from "react";

const DuplicatesTable = ({ duplicateCustomers, duplicateAddresses }) => {
  const renderMobileDuplicates = () => {
    return duplicateCustomers.map((duplicate, index) => (
      <div key={index}>
        <h5
          style={{ textAlign: "left", color: "#3480FA", paddingLeft: "20px" }}
        >
          {duplicate.mobileNumber}
        </h5>

        {duplicate.customers.map((customer, i) => (
          <div key={i} style={{ backgroundColor: "#fff" }}>
            <p style={{ textAlign: "left", fontSize: 14 }}>
              {`${i + 1}. ${customer.customerID} - ${customer.customerName}`}
            </p>
          </div>
        ))}
      </div>
    ));
  };

  const renderAddressDuplicates = () => {
    return duplicateAddresses.map((address, index) => (
      <div key={index}>
        <h5
          style={{ textAlign: "left", color: "#3480FA", paddingLeft: "20px" }}
        >
          {address.address}
        </h5>

        {address.customers.map((customer, i) => (
          <div key={i}>
            <p style={{ textAlign: "left", fontSize: 14 }}>
              {`${i + 1}. ${customer.customerID} - ${customer.customerName}`}
            </p>
          </div>
        ))}
      </div>
    ));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h4>Duplicate Entries by Mobile Number</h4>
        <div
          style={{
            alignItems: "left",
            height: "35vh",
            overflowY: "scroll",
            border: "1px solid #C9C9C9",
            marginBottom: "25px",
            borderRadius: "10px",
            backgroundColor: "#fff",
            paddingLeft: "20px",
          }}
        >
          {/* <h3>Duplicates by Mobile Number:</h3> */}
          {renderMobileDuplicates()}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h4>Duplicate Entries by Address</h4>
        <div
          style={{
            alignItems: "left",
            height: "35vh",
            overflowY: "scroll",
            border: "1px solid #C9C9C9",
            borderRadius: "10px",
            backgroundColor: "#fff",
            paddingLeft: "20px",
          }}
        >
          {/* <h3>Duplicates by Address:</h3> */}
          {renderAddressDuplicates()}
        </div>
      </div>
    </div>
  );
};

export default DuplicatesTable;
