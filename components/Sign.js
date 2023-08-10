// components/Sign.js (ログイン前のTOPページ)

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

// Inter({ subsets: ["latin"] });

export function Sign() {
  return (
    <div className={styles.top}>
      <h1 className={styles.title}>Tasting Note</h1>
      <nav className={styles.top_nav}>
        <ul className={styles.top_nav_list}>
          <li className={styles.top_nav_item}>
            {/* ログイン認証ページ */}
            <Link href="#">Sign In</Link>
          </li>
          {/*アカウント登録ページ  */}
          <li className={styles.top_nav_item}>
            <Link href="#">Sing Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
Sign();
