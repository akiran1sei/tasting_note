import Head from "next/head";
import { Header } from "@/components/Header";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const CoffeeSingleItem = (props) => {
  return (
    <>
      <Head>
        <title>個別ページ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.browse_page}>
            <h1 className={styles.heading_title}>BROWSE</h1>
            <div className={styles.browse}>
              <div className={styles.browse_data}>
                <div className={styles.browse_main}>
                  <div className={styles.browse_list}>
                    <div
                      className={`${styles.browse_item} ${styles.browse_coffee}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        1：珈琲豆 or 番号
                      </h3>
                      <p>{props.singleBeans.coffee}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_roast}`}
                    >
                      <h3 className={styles.browse_item_title}>2：ロースト</h3>
                      <p>{props.singleBeans.roast}%</p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.roastMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_aroma}`}
                    >
                      <h3 className={styles.browse_item_title}>3：アロマ</h3>
                      <p>
                        <span className={styles.browse_yellow_color}>
                          ドライ：
                        </span>
                        {props.singleBeans.aromaDry}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <p>
                        <span className={styles.browse_yellow_color}>
                          クラスト：
                        </span>
                        {props.singleBeans.aromaCrust}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <p>
                        <span className={styles.browse_yellow_color}>
                          ブレーク：
                        </span>
                        {props.singleBeans.aromaBreak}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.aromaMessage}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_defects}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        4：欠点・瑕疵
                      </h3>
                      <p>
                        {props.singleBeans.defects}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.defectsMessage}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_cleancap}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        5：カップの綺麗さ
                      </h3>
                      <p>
                        {props.singleBeans.cleancap}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.cleancapMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_sweet}`}
                    >
                      <h3 className={styles.browse_item_title}>6：甘さ</h3>
                      <p>
                        {props.singleBeans.sweet}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.sweetMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_acidity}`}
                    >
                      <h3 className={styles.browse_item_title}>7：酸の質</h3>
                      <p>
                        {props.singleBeans.acidity}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.acidityMessage}</p>
                      <p>{props.singleBeans.acidityStrength}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_mouthfeel}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        8：口に含んだ質感
                      </h3>
                      <p>
                        {props.singleBeans.mouthfeel}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.mouthfeelMessage}</p>
                      <p>{props.singleBeans.bodyStrength}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_flavor}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        9：フレーバー
                      </h3>
                      <p>
                        {props.singleBeans.flavor}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.flavorMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_after}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        10：後味の印象度
                      </h3>
                      <p>
                        {props.singleBeans.after}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.afterMessage}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_balance}`}
                    >
                      <h3 className={styles.browse_item_title}>11：バランス</h3>
                      <p>
                        {props.singleBeans.balance}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleBeans.balanceMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_overall}`}
                    >
                      <h3 className={styles.browse_item_title}>12：総合評価</h3>
                      <p>
                        {props.singleBeans.overall}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_total}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        13：TOTAL（+36）
                      </h3>
                      <p>
                        {props.singleBeans.result}
                        <span className={styles.browse_yellow_color}>点</span>
                        <span>（＋３６）</span>
                      </p>
                      <p>
                        {props.singleBeans.total}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_impression}`}
                    >
                      <h3 className={styles.browse_item_title}>14：味の印象</h3>
                      <p>{props.singleBeans.impression}</p>
                    </div>
                  </div>
                  <div className={styles.browse_return_btn_box}>
                    <button className={styles.browse_return_btn}>戻る</button>
                    <button className={styles.browse_edit_btn}>
                      <Link href={`update/${props.singleBeans._id}`} passHref>
                        編集する
                      </Link>
                    </button>
                    <button className={styles.browse_edit_btn}>
                      <Link href={`delete/${props.singleBeans._id}`} passHref>
                        削除する
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CoffeeSingleItem;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://tasting-note.vercel.app/api/beans/${context.query.id}`
  );
  const singleBeans = await response.json();

  return {
    props: singleBeans,
  };
};
