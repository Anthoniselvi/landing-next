import { OrdersProvider } from "@/ordersContext";
import "@/styles/globals.css";
OrdersProvider;

function App({ Component, pageProps }) {
  return (
    <OrdersProvider>
      <Component {...pageProps} />
    </OrdersProvider>
  );
}

export default App;
