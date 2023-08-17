import React, { createContext, useContext, useState } from "react";

const OrdersContext = createContext();

export const useOrdersContext = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [ordersData, setOrdersData] = useState([]);

  return (
    <OrdersContext.Provider value={{ ordersData, setOrdersData }}>
      {children}
    </OrdersContext.Provider>
  );
};
