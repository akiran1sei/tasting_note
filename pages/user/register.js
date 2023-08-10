// pages/user/register.js（アカウント登録ページ）
import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function register() {
  return (
    <>
      <Head>
        <title>Tasting Note</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* <Login /> */}
        <main className={styles.main}>
          <h1 className={styles.title}>Tasting Note</h1>
          <div className={styles.login_btn_box}>
            <form>
              <p>名前：</p>
              <p>メールアドレス：</p>
              <p>パスワード：</p>
              <button className={styles.login_btn}>
                <a href="">登録</a>
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
register();
