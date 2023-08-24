import Head from "next/head";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import useAuth from "@/utils/useAuth";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

const SelectionTop = (props) => {
  console.log(props);
  const ReadAll = props.allItems.map((beans) => (
    <div className={styles.select_list} key={beans._id}>
      <div className={styles.select_btn_box}>
        <button className={styles.delete_btn}>
          <Link href={`delete/${beans._id}`} passHref>
            <Image
              src="../images/delete_FILL0_wght400_GRAD0_opsz48.svg"
              alt="削除ボタン"
              width={48}
              height={48}
              priority
            />
          </Link>
        </button>
        <button className={styles.select_btn}>
          <Link href={`update/${beans._id}`} passHref>
            <Image
              src="../images/edit_FILL0_wght400_GRAD0_opsz48.svg"
              alt="編集ボタン"
              width={48}
              height={48}
              priority
            />
          </Link>
        </button>
        <button className={styles.select_btn}>
          <Link href={`${beans._id}`} passHref>
            <Image
              src="../images/visibility_FILL0_wght400_GRAD0_opsz48.svg"
              alt="閲覧ボタン"
              width={48}
              height={48}
              priority
            />
          </Link>
        </button>
      </div>
      <div className={`${styles.select_item} ${styles.select_coffee}`}>
        <label htmlFor="name" className={styles.select_item_title}>
          珈琲豆の名 or 番号
          {/* NAME or NUMBER */}
        </label>
        <div className={styles.select_item_value}>{beans.coffee}</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_roast}`}>
        <label htmlFor="roast" className={styles.select_item_title}>
          ロースト
          {/* ROAST */}
        </label>
        <div className={styles.select_item_value}>{beans.roast}％</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_aroma}`}>
        <label htmlFor="aroma" className={styles.select_item_title}>
          アロマ
          {/* AROMA */}
        </label>
        <div className={styles.select_item_value}>
          <p className={styles.select_aroma_value}>ドライ：{beans.aromaDry}</p>
          <p className={styles.select_aroma_value}>
            クラスト：{beans.aromaCrust}
          </p>
          <p className={styles.select_aroma_value}>
            ブレーク：{beans.aromaBreak}
          </p>
        </div>
      </div>
      <div className={`${styles.select_item} ${styles.select_defects}`}>
        <label htmlFor="defects" className={styles.select_item_title}>
          欠点・瑕疵
          {/* DEFECTS */}
        </label>
        <div className={styles.select_item_value}>{beans.defects}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_cleancap}`}>
        <label htmlFor="cleancap" className={styles.select_item_title}>
          カップの綺麗さ
          {/* CLEAN CAP */}
        </label>
        <div className={styles.select_item_value}>{beans.cleancap}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_sweet}`}>
        <label htmlFor="sweet" className={styles.select_item_title}>
          甘さ
          {/* SWEET */}
        </label>
        <div className={styles.select_item_value}>{beans.sweet}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_acidity}`}>
        <label htmlFor="acidity" className={styles.select_item_title}>
          酸の質
          {/* ACIDITY */}
        </label>
        <div className={styles.select_item_value}>{beans.acidity}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_mouthfeel}`}>
        <label htmlFor="mouthfeel" className={styles.select_item_title}>
          口に含んだ質感
          {/* MOUTHFEEL */}
        </label>
        <div className={styles.select_item_value}>{beans.mouthfeel}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_flavor}`}>
        <label htmlFor="flavor" className={styles.select_item_title}>
          フレーバー
          {/* FLAVOR */}
        </label>
        <div className={styles.select_item_value}>{beans.flavor}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_after}`}>
        <label htmlFor="after" className={styles.select_item_title}>
          後味の印象度
          {/* AFTER */}
        </label>
        <div className={styles.select_item_value}>{beans.after}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_balance}`}>
        <label htmlFor="balance" className={styles.select_item_title}>
          バランス
          {/* BALANCE */}
        </label>
        <div className={styles.select_item_value}>{beans.balance}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_overall}`}>
        <label htmlFor="overall" className={styles.select_item_title}>
          総合評価
          {/* OVER ALL */}
        </label>
        <div className={styles.select_item_value}>{beans.overall}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_result}`}>
        <label htmlFor="result" className={styles.select_item_title}>
          RESULT
        </label>
        <div className={styles.select_item_value}>{beans.result}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_total}`}>
        <label htmlFor="total" className={styles.select_item_title}>
          TOTAL
          <br />
          （＋３６）
        </label>
        <div className={styles.select_item_value}>{beans.total}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_impression}`}>
        <label htmlFor="impression" className={styles.select_item_title}>
          味の印象
          {/* IMPRESSION */}
        </label>
        <div className={styles.select_item_value}>{beans.impression}</div>
      </div>
    </div>
  ));

  const loginUser = useAuth();
  // console.log(loginUser);
  if (loginUser) {
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
              <div className={styles.select}>
                <h1 className={styles.heading_title}>SELECT</h1>

                {ReadAll}
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
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
            <div className={styles.select}>
              <h1 className={styles.heading_title}>SELECT</h1>
              {}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default SelectionTop;
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/beans/readall");
  const allItems = await response.json();

  return {
    props: allItems,
  };
};
