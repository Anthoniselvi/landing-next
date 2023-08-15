import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "@/components/Header/Header";
import SecondPage from "@/components/SecondPage/SecondPage";
import ThirdPage from "@/components/ThirdPage/ThirdPage";
import FourthPage from "@/components/FourthPage/FourthPage";
import FifthPage from "@/components/FifthPage/FifthPage";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="shortcut icon" href="/image/logo.jpeg" /> */}
        <title>Landing Page</title>
      </Head>
      <Header />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <Footer />
    </div>
  );
}
