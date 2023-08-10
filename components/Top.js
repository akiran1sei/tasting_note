import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

// Inter({ subsets: ["latin"] });

export function Top() {
  return (
    <div className={styles.top}>
      <h1 className={styles.title}>Tasting Note</h1>
      <nav className={styles.top_nav}>
        <ul className={styles.top_nav_list}>
          <li className={styles.top_nav_item}>
            <Link href="/pages/create">新規作成</Link>
          </li>
          <li className={styles.top_nav_item}>
            <Link href="/pages/index.js">MyPage</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
Top();
