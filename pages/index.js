import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tasting Note</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header_title}>
            <h1 className={styles.title}>Tasting Note</h1>
          </div>
        </header>
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
