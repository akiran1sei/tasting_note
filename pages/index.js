import Head from "next/head";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
// import jwt from "jsonwebtoken";

// const secret_key = "tasting_coffee";
const Home = () => {
  return (
    <>
      <Head>
        <title>Tasting Note</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <div className={styles.main_contents}>
            <div className={styles.top}>
              <nav className={styles.top_nav}>
                <ul className={styles.top_nav_list}>
                  <li className={styles.top_nav_item}>
                    {/* ログイン認証ページ */}
                    <button>
                      <Link href={"/user/login"}> START</Link>
                    </button>
                  </li>
                  {/*アカウント登録ページ  */}
                  <li className={styles.top_nav_item}>
                    <button>
                      <Link href={"/user/register"}>Sing Up</Link>
                    </button>
                  </li>
                </ul>
                <div></div>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Home;
// export const getServerSideProps = async () => {
//   const response = await fetch("https://tasting-note.vercel.app/api/beans/readall");
//   const allItems = await response.json();

//   return {
//     props: allItems,
//   };
// };
