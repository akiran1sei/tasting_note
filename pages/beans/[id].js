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
                    <p className={styles.browse_date}>
                      {props.singleItem.date}
                    </p>
                    <div
                      className={`${styles.browse_item} ${styles.browse_username}`}
                    >
                      <h3 className={styles.browse_item_title}>作成者</h3>
                      <p>{props.singleItem.username}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_coffee}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        1：珈琲豆 or 番号
                      </h3>
                      <p>{props.singleItem.coffee}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_roast}`}
                    >
                      <h3 className={styles.browse_item_title}>2：ロースト</h3>
                      <p>{props.singleItem.roast}%</p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.roastMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_aroma}`}
                    >
                      <h3 className={styles.browse_item_title}>3：アロマ </h3>
                      <div className={styles.browse_item_value_box}>
                        －３～３
                        <br />
                        <div className={styles.browse_item_dry_box}>
                          <p className={styles.browse_item_sub_title}>ドライ</p>
                          {/* ドライ（強さ） */}
                          <div className={styles.browse_item_value_box}>
                            <p className={styles.browse_item_value}>
                              <h4 className={styles.browse_item_sub_title}>
                                （強さ）
                              </h4>
                              <br />
                              {props.singleItem.aromaDryStrength}
                              <span className={styles.browse_yellow_color}>
                                点
                              </span>
                            </p>
                            {/* ドライ （質） */}
                            <p className={styles.browse_item_value}>
                              <h4 className={styles.browse_item_sub_title}>
                                （質）
                              </h4>
                              <br /> {props.singleItem.aromaDryQuality}
                              <span className={styles.browse_yellow_color}>
                                点
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className={styles.browse_item_crust_box}>
                          <p className={styles.browse_item_sub_title}>
                            クラスト
                          </p>
                          <div className={styles.browse_item_value_box}>
                            {/* クラスト（強さ） */}
                            <p className={styles.browse_item_value}>
                              <h4 className={styles.browse_item_sub_title}>
                                （強さ）
                              </h4>
                              <br />
                              {props.singleItem.aromaCrustStrength}
                              <span className={styles.browse_yellow_color}>
                                点
                              </span>
                            </p>
                            {/* クラスト（質） */}
                            <p className={styles.browse_item_value}>
                              <h4 className={styles.browse_item_sub_title}>
                                （質）
                              </h4>
                              <br /> {props.singleItem.aromaCrustQuality}
                              <span className={styles.browse_yellow_color}>
                                点
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className={styles.browse_item_break_box}>
                          <p className={styles.browse_item_sub_title}>
                            ブレーク
                          </p>
                          <div className={styles.browse_item_value_box}>
                            {/* ブレーク（強さ） */}
                            <p className={styles.browse_item_value}>
                              <h4 className={styles.browse_item_sub_title}>
                                （強さ）
                              </h4>
                              <br /> {props.singleItem.aromaBreakStrength}
                              <span className={styles.browse_yellow_color}>
                                点
                              </span>
                            </p>
                            {/*  ブレーク（質） */}
                            <p className={styles.browse_item_value}>
                              <h4 className={styles.browse_item_sub_title}>
                                （質）
                              </h4>
                              <br /> {props.singleItem.aromaBreakQuality}
                              <span className={styles.browse_yellow_color}>
                                点
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.browse_item_message_box}>
                        <h4>memo</h4>
                        <br />
                        <p>{props.singleItem.aromaMessage}</p>
                      </div>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_defects}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        4：欠点・瑕疵
                      </h3>
                      <p>
                        {props.singleItem.defects}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.defectsMessage}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_cleancap}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        5：カップの綺麗さ
                      </h3>
                      <p>
                        {props.singleItem.cleancap}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.cleancapMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_sweet}`}
                    >
                      <h3 className={styles.browse_item_title}>6：甘さ</h3>
                      <p>
                        {props.singleItem.sweet}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.sweetMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_acidity}`}
                    >
                      <h3 className={styles.browse_item_title}>7：酸の質</h3>
                      <p>
                        {props.singleItem.acidity}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.acidityMessage}</p>
                      <p>{props.singleItem.acidityStrength}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_mouthfeel}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        8：口に含んだ質感
                      </h3>
                      <p>
                        {props.singleItem.mouthfeel}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.mouthfeelMessage}</p>
                      <p>{props.singleItem.bodyStrength}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_flavor}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        9：フレーバー
                      </h3>
                      <p>
                        {props.singleItem.flavor}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.flavorMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_after}`}
                    >
                      <h3 className={styles.browse_item_title}>
                        10：後味の印象度
                      </h3>
                      <p>
                        {props.singleItem.after}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.afterMessage}</p>
                    </div>
                    <div
                      className={`${styles.browse_item} ${styles.browse_balance}`}
                    >
                      <h3 className={styles.browse_item_title}>11：バランス</h3>
                      <p>
                        {props.singleItem.balance}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.browse_item_memo}>
                        <span className={styles.browse_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.balanceMessage}</p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_overall}`}
                    >
                      <h3 className={styles.browse_item_title}>12：総合評価</h3>
                      <p>
                        {props.singleItem.overall}
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
                        {props.singleItem.result}
                        <span className={styles.browse_yellow_color}>点</span>
                        <span>（＋３６）</span>
                      </p>
                      <p>
                        {props.singleItem.total}
                        <span className={styles.browse_yellow_color}>点</span>
                      </p>
                    </div>

                    <div
                      className={`${styles.browse_item} ${styles.browse_impression}`}
                    >
                      <h3 className={styles.browse_item_title}>14：味の印象</h3>
                      <p>{props.singleItem.impression}</p>
                    </div>
                  </div>
                  <div className={styles.browse_return_btn_box}>
                    <button className={styles.browse_return_btn}>
                      <Link href={"selection"}>戻る</Link>
                    </button>
                    <button className={styles.browse_edit_btn}>
                      <Link href={`update/${props.singleItem._id}`} passHref>
                        編集する
                      </Link>
                    </button>
                    <button className={styles.browse_edit_btn}>
                      <Link href={`delete/${props.singleItem._id}`} passHref>
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
  const singleItem = await response.json();

  return {
    props: singleItem,
  };
};
