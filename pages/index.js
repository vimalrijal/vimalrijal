import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import SEO from "@/components/global/SEO";
import MainPage from "./MainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SEO
        metaTitle="Vimal Rijal"
        metaDescription="this is my personal website"
        iconLink="https://miro.medium.com/max/512/1*nZ9VwHTLxAfNCuCjYAkajg.png"
      />
      <MainPage />
    </>
  );
}
