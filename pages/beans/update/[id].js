import Head from "next/head";
import { Header } from "../../../components/Header";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import useAuth from "@/utils/useAuth";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const UpDateItem = (props) => {
  const [coffee, setCoffee] = useState(props.singleBeans.coffee);
  const [roast, setRoast] = useState(props.singleBeans.roast);
  const [roastMessage, setRoastMessage] = useState(
    props.singleBeans.roastMessage
  );
  const [aromaDry, setAromaDry] = useState(props.singleBeans.aromaDry);
  const [aromaCrust, setAromaCrust] = useState(props.singleBeans.aromaCrust);
  const [aromaBreak, setAromaBreak] = useState(props.singleBeans.aromaBreak);
  const [aromaMessage, setAromaMessage] = useState(
    props.singleBeans.aromaMessage
  );
  const [defects, setDefects] = useState(props.singleBeans.defects);
  const [point, setPoint] = useState("0");
  const [score, setScore] = useState("0");
  const [defectsMessage, setDefectsMessage] = useState(
    props.singleBeans.defectsMessage
  );
  const [cleancap, setCleancap] = useState(props.singleBeans.cleancap);
  const [cleancapMessage, setCleancapMessage] = useState(
    props.singleBeans.cleancapMessage
  );
  const [sweet, setSweet] = useState(props.singleBeans.sweet);
  const [sweetMessage, setSweetMessage] = useState(
    props.singleBeans.sweetMessage
  );
  const [acidity, setAcidity] = useState(props.singleBeans.acidity);
  const [acidityMessage, setAcidityMessage] = useState(
    props.singleBeans.acidityMessage
  );
  const [acidityStrength, setAcidityStrength] = useState(
    props.singleBeans.acidityStrength
  );
  const [mouthfeel, setMouthfeel] = useState(props.singleBeans.mouthfeel);
  const [mouthfeelMessage, setMouthfeelMessage] = useState(
    props.singleBeans.mouthfeelMessage
  );
  const [bodyStrength, setBodyStrength] = useState(
    props.singleBeans.bodyStrength
  );
  const [flavor, setFlavor] = useState(props.singleBeans.flavor);
  const [flavorMessage, setFlavorMessage] = useState(
    props.singleBeans.flavorMessage
  );
  const [after, setAfter] = useState(props.singleBeans.after);
  const [afterMessage, setAfterMessage] = useState(
    props.singleBeans.afterMessage
  );
  const [balance, setBalance] = useState(props.singleBeans.balance);
  const [balanceMessage, setBalanceMessage] = useState(
    props.singleBeans.balanceMessage
  );
  const [overall, setOverall] = useState(props.singleBeans.overall);
  const [error, setError] = useState();

  const [impression, setImpression] = useState(props.singleBeans.impression);
  const [isEditContents, setIsEditContents] = useState(false);
  const router = useRouter();
  const handleEditListButton = () => {
    setIsEditContents(!isEditContents);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sum =
      Number(cleancap) +
      Number(sweet) +
      Number(acidity) +
      Number(mouthfeel) +
      Number(flavor) +
      Number(after) +
      Number(balance) +
      Number(overall) -
      Number(defects);
    try {
      const response = // フォームの入力値をサーバーに送信する
        await fetch(
          `https://tasting-note.vercel.app/api/beans/update/${props.singleBeans._id}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              coffee: coffee,
              roast: roast,
              roastMessage: roastMessage,
              aromaDry: aromaDry,
              aromaCrust: aromaCrust,
              aromaBreak: aromaBreak,
              aromaMessage: aromaMessage,
              defects: point * score * 4,
              defectsMessage: defectsMessage,
              cleancap: cleancap,
              cleancapMessage: cleancapMessage,
              sweet: sweet,
              sweetMessage: sweetMessage,
              acidity: acidity,
              acidityMessage: acidityMessage,
              acidityStrength: acidityStrength,
              mouthfeel: mouthfeel,
              mouthfeelMessage: mouthfeelMessage,
              bodyStrength: bodyStrength,
              flavor: flavor,
              flavorMessage: flavorMessage,
              after: after,
              afterMessage: afterMessage,
              balance: balance,
              balanceMessage: balanceMessage,
              overall: overall,
              total: Number(sum) + Number(36),
              result: sum,
              impression: impression,
            }),
          }
        );
      // バリデーション

      if (!coffee) {
        return setError("未記入:名前または、番号を入力してください");
      } else if (!roast || null) {
        return setError("未記入:roastを入力してください");
      } else if (!aromaDry || null) {
        return setError("未記入:アロマのドライを入力してください");
      } else if (!aromaCrust || null) {
        return setError("未記入:アロマのクラストを入力してください");
      } else if (!aromaBreak || null) {
        return setError("未記入:アロマのブレイクを入力してください");
      } else if (!defects || null) {
        return setError("未記入:欠点などがなければ0と記入してください。");
      } else if (defects < 0) {
        return setError("マイナス数字になっています。正しく入力してください。");
      } else if (!cleancap || null) {
        return setError("未記入:クリーンカップを入力してください");
      } else if (!sweet || null) {
        return setError("未記入:甘さを入力してください");
      } else if (!acidity || null) {
        return setError("未記入:酸の質を入力してください");
      } else if (!acidityStrength || null) {
        return setError("未記入:酸の強さを入力してください");
      } else if (!mouthfeel || null) {
        return setError("未記入:口に含んだ質感を入力してください");
      } else if (!bodyStrength || null) {
        return setError("未記入:ボディの強さを入力してください");
      } else if (!flavor || null) {
        return setError("未記入:フレーバーを入力してください");
      } else if (!after || null) {
        return setError("未記入:後味の印象度を入力してください");
      } else if (!balance || null) {
        return setError("未記入:バランスを入力してください");
      } else if (!overall || null) {
        return setError("未記入:総合評価を入力してください");
      } else {
        // return
        setError(null);
        const jsonData = await response.json();
        alert(jsonData.message);
        router.push("/beans/selection");
      }
    } catch (error) {
      alert("アイテム編編集失敗");
    }
  };
  function defectsAnswer() {
    const answer = Number(point * score * 4);
    setDefects(answer);
  }
  const loginUser = useAuth();
  if (loginUser.email === props.singleBeans.email) {
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
            <div className={styles.edit_page}>
              <h1 className={styles.heading_title}>UP DATE</h1>
              <div className={`${styles.edit} ${styles.open}`}>
                <div
                  className={
                    isEditContents
                      ? `${styles["edit_number"]} ${styles["active"]}`
                      : styles["edit_number"]
                  }
                >
                  <div className={styles.edit_toc}>
                    <button
                      className={styles.button}
                      onClick={handleEditListButton}
                    >
                      編集目次<span className={styles.edit_toc_open}>▼</span>
                      <span className={styles.edit_toc_close}>△</span>
                    </button>
                  </div>
                  <ul className={styles.edit_number_list}>
                    <li className={styles.edit_number_item}>
                      1:コーヒー豆の名前 or 番号
                    </li>
                    <li className={styles.edit_number_item}>2:ロースト</li>
                    <li className={styles.edit_number_item}>3:アロマ</li>
                    <li className={styles.edit_number_item}>4:欠点・瑕疵</li>
                    <li className={styles.edit_number_item}>
                      5:カップの綺麗さ
                    </li>
                    <li className={styles.edit_number_item}>6:甘さ</li>
                    <li className={styles.edit_number_item}>7:酸の質</li>
                    <li className={styles.edit_number_item}>
                      8:口に含んだ質感
                    </li>
                    <li className={styles.edit_number_item}>9:フレーバー</li>
                    <li className={styles.edit_number_item}>10:後味の印象度</li>
                    <li className={styles.edit_number_item}>11:バランス</li>
                    <li className={styles.edit_number_item}>12:総合評価</li>
                    <li className={styles.edit_number_item}>
                      13:TOTAL
                      <br />
                      （+36）
                    </li>
                    <li className={styles.edit_number_item}>14:味の印象</li>
                  </ul>
                </div>

                <div className={styles.edit_data}>
                  <form onSubmit={handleSubmit} className={styles.edit_main}>
                    <div className={styles.edit_list}>
                      <div
                        className={`${styles.edit_item} ${styles.edit_coffee}`}
                      >
                        <label
                          htmlFor="coffee"
                          className={styles.edit_item_title}
                        >
                          1：珈琲豆 or 番号
                        </label>
                        <input
                          className={styles.edit_input_name}
                          type="text"
                          name="coffee"
                          id="coffee"
                          width={300}
                          height={50}
                          placeholder="名前 or 番号"
                          value={coffee}
                          onChange={(e) => setCoffee(e.target.value)}
                        />
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_roast}`}
                      >
                        <label
                          htmlFor="roast"
                          className={styles.edit_item_title}
                        >
                          2：ロースト
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <input
                            type="range"
                            name="roast"
                            id="roast"
                            className={styles.edit_input_range}
                            value={roast}
                            list="roast_value"
                            onChange={(e) => setRoast(e.target.value)}
                          />
                          <datalist id="roast_value">
                            <option value="0">ライト</option>
                            <option value="15">シナモン</option>
                            <option value="30">ミディアム</option>
                            <option value="45">ハイ</option>
                            <option value="60">シティ</option>
                            <option value="75">フルシティ</option>
                            <option value="90">フレンチ</option>
                            <option value="100">イタリアン</option>
                          </datalist>

                          <p className={styles.edit_roast_value}>{roast}%</p>
                        </div>
                        <div className={styles.edit_item_message_box}>
                          <label htmlFor="roast-message">memo</label>
                          <br />
                          <textarea
                            className={styles.edit_item_message}
                            name="roast-message"
                            id="roast-message"
                            placeholder="ローストの参考にしてください。0%：ライト、15%：シナモン、30%：ミディアム、45%：ハイ、60%：シティ、75%：フルシティ、90%：フレンチ、100%：イタリアン"
                            value={roastMessage}
                            onChange={(e) => setRoastMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_aroma}`}
                      >
                        <p className={styles.edit_item_title}>3：アロマ </p>
                        <div className={styles.edit_item_value_box}>
                          <p className={styles.edit_item_value}>
                            <label htmlFor="aroma-dry">ドライ </label>－３～３
                            <select
                              name="aroma-dry"
                              id="aroma-dry"
                              value={aromaDry}
                              onChange={(e) => setAromaDry(e.target.value)}
                            >
                              <option></option>
                              <option value={-3}>-3</option>
                              <option value={-2}>-2</option>
                              <option value={-1}>-1</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                          </p>

                          <p className={styles.edit_item_value}>
                            <label htmlFor="aroma_crust">クラスト</label>{" "}
                            －３～３
                            <select
                              name="aroma_crust"
                              id="aroma_crust"
                              value={aromaCrust}
                              onChange={(e) => setAromaCrust(e.target.value)}
                            >
                              <option></option>
                              <option value={-3}>-3</option>
                              <option value={-2}>-2</option>
                              <option value={-1}>-1</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                          </p>

                          <p className={styles.edit_item_value}>
                            <label htmlFor="aroma_break">ブレーク</label>{" "}
                            －３～３
                            <select
                              name="aroma_break"
                              id="aroma_break"
                              value={aromaBreak}
                              onChange={(e) => setAromaBreak(e.target.value)}
                            >
                              <option></option>
                              <option value={-3}>-3</option>
                              <option value={-2}>-2</option>
                              <option value={-1}>-1</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                          </p>
                        </div>
                        <div className={styles.edit_item_message_box}>
                          <label htmlFor="aroma_message">memo</label>
                          <br />
                          <textarea
                            className={styles.edit_item_message}
                            name="aroma_message"
                            id="aroma_message"
                            placeholder="ご記入ください。"
                            value={aromaMessage}
                            onChange={(e) => setAromaMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_defects}`}
                      >
                        <label
                          htmlFor="defects"
                          className={styles.edit_item_title}
                        >
                          4：欠点・瑕疵
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <p className={styles.edit_defects_explanation}>
                            欠点等が無き場合は、黄色の枠内を０と記入にしてください。
                            <br />
                            <span>＃×ｉ×４＝【　】</span>
                          </p>
                          <div className={styles.edit_defects_calc}>
                            <input
                              type="number"
                              className={styles.edit_input_defects}
                              value={point}
                              onChange={(e) => setPoint(e.target.value)}
                              name="point"
                            />
                            ×
                            <select
                              type="number"
                              className={styles.edit_defects_score}
                              onChange={(e) => setScore(e.target.value)}
                              value={score}
                              name="score"
                            >
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                            ×４＝
                            <output
                              name="defects"
                              onChange={defectsAnswer}
                              className={styles.edit_defects_answer}
                            >
                              {point * score * 4}
                            </output>
                          </div>

                          <input
                            type="number"
                            name="defects"
                            id="defects"
                            className={styles.edit_input_answer}
                            value={defects}
                            onChange={(e) => setDefects(e.target.value)}
                          />
                          <div className={styles.edit_item_message_box}>
                            <label htmlFor="defects-message"></label>memo
                            <br />
                            <textarea
                              className={styles.edit_item_message}
                              name="defects-message"
                              id="defects-message"
                              placeholder="ご記入ください。"
                              value={defectsMessage}
                              onChange={(e) =>
                                setDefectsMessage(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_cleancap}`}
                      >
                        <label
                          htmlFor="cleancap"
                          className={styles.edit_item_title}
                        >
                          5：カップの綺麗さ
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <div className={styles.edit_item_value}>
                            ０～８
                            <select
                              type="number"
                              name="cleancap"
                              id="cleancap"
                              className={styles.select_box}
                              value={cleancap}
                              onChange={(e) => setCleancap(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={6.5}>6.5</option>
                              <option value={7}>7</option>
                              <option value={7.5}>7.5</option>
                              <option value={8}>8</option>
                            </select>
                          </div>

                          <div className={styles.edit_item_message_box}>
                            <label htmlFor="cleancap-message">
                              <label htmlFor="cleancap-message">memo</label>
                            </label>
                            <br />
                            <textarea
                              className={styles.edit_item_message}
                              name="cleancap-message"
                              id="cleancap-message"
                              placeholder="ご記入ください。"
                              value={cleancapMessage}
                              onChange={(e) =>
                                setCleancapMessage(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_sweet}`}
                      >
                        <label
                          htmlFor="sweet"
                          className={styles.edit_item_title}
                        >
                          6：甘さ
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <div className={styles.edit_item_value}>
                            ０～８
                            <select
                              type="number"
                              name="sweet"
                              id="sweet"
                              className={styles.select_box}
                              value={sweet}
                              onChange={(e) => setSweet(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={6.5}>6.5</option>
                              <option value={7}>7</option>
                              <option value={7.5}>7.5</option>
                              <option value={8}>8</option>
                            </select>
                          </div>
                          <div className={styles.edit_item_message_box}>
                            <label htmlFor="sweet-message">memo</label>
                            <br />
                            <textarea
                              className={styles.edit_item_message}
                              name="sweet-message"
                              id="sweet-message"
                              placeholder="ご記入ください。"
                              value={sweetMessage}
                              onChange={(e) => setSweetMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_acidity}`}
                      >
                        <label
                          htmlFor="acidity"
                          className={styles.edit_item_title}
                        >
                          7：酸の質
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <div className={styles.edit_item_value}>
                            ０～８
                            <select
                              type="number"
                              name="acidity"
                              id="acidity"
                              className={styles.select_box}
                              value={acidity}
                              onChange={(e) => setAcidity(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={6.5}>6.5</option>
                              <option value={7}>7</option>
                              <option value={7.5}>7.5</option>
                              <option value={8}>8</option>
                            </select>
                          </div>
                          <div className={styles.edit_item_value}>
                            酸の強さ
                            <br />
                            <select
                              name="acidity"
                              value={acidityStrength}
                              onChange={(e) =>
                                setAcidityStrength(e.target.value)
                              }
                            >
                              <option value={null}>{null}</option>
                              <optgroup label="High">
                                <option>{"High2"}</option>
                                <option>{"High1"}</option>
                              </optgroup>
                              <optgroup label="Middle">
                                <option>{"Middle2"}</option>
                                <option>{"Middle1"}</option>
                              </optgroup>
                              <optgroup label="Low">
                                <option>{"Low2"}</option>
                                <option>{"Low1"}</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                        <div className={styles.edit_item_message_box}>
                          <label htmlFor="acidity-message">memo</label>
                          <br />
                          <textarea
                            className={styles.edit_item_message}
                            name="acidity-message"
                            id="acidity-message"
                            placeholder="ご記入ください。"
                            value={acidityMessage}
                            onChange={(e) => setAcidityMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_mouthfeel}`}
                      >
                        <label
                          htmlFor="mouthfeel"
                          className={styles.edit_item_title}
                        >
                          8：口に含んだ質感{" "}
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <div className={styles.edit_item_value}>
                            ０～８
                            <select
                              type="number"
                              name="mouthfeel"
                              id="mouthfeel"
                              className={styles.select_box}
                              value={mouthfeel}
                              onChange={(e) => setMouthfeel(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={6.5}>6.5</option>
                              <option value={7}>7</option>
                              <option value={7.5}>7.5</option>
                              <option value={8}>8</option>
                            </select>
                          </div>
                          <div className={styles.edit_item_value}>
                            Bodyの強さ
                            <br />
                            <select
                              name="body"
                              value={bodyStrength}
                              onChange={(e) => setBodyStrength(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <optgroup label="High">
                                <option>{"High2"}</option>
                                <option>{"High1"}</option>
                              </optgroup>
                              <optgroup label="Middle">
                                <option>{"Middle2"}</option>
                                <option>{"Middle1"}</option>
                              </optgroup>
                              <optgroup label="Low">
                                <option>{"Low2"}</option>
                                <option>{"Low1"}</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                        <div className={styles.edit_item_message_box}>
                          <label htmlFor="mouthfeel-message">memo</label>
                          <br />
                          <textarea
                            className={styles.edit_item_message}
                            name="mouthfeel-message"
                            id="mouthfeel-message"
                            placeholder="ご記入ください。"
                            value={mouthfeelMessage}
                            onChange={(e) =>
                              setMouthfeelMessage(e.target.value)
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_flavor}`}
                      >
                        <label
                          htmlFor="flavor"
                          className={styles.edit_item_title}
                        >
                          9：フレーバー
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <div className={styles.edit_item_value}>
                            ０～８
                            <select
                              name="flavor"
                              type="number"
                              id="flavor"
                              className={styles.select_box}
                              value={flavor}
                              onChange={(e) => setFlavor(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={6.5}>6.5</option>
                              <option value={7}>7</option>
                              <option value={7.5}>7.5</option>
                              <option value={8}>8</option>
                            </select>
                          </div>
                          <div className={styles.edit_item_message_box}>
                            <label htmlFor="flavor-message">memo</label>
                            <br />
                            <textarea
                              className={styles.edit_item_message}
                              name="flavor-message"
                              id="flavor-message"
                              placeholder="ご記入ください。"
                              value={flavorMessage}
                              onChange={(e) => setFlavorMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`${styles.edit_item} ${styles.edit_after}`}
                      >
                        <label
                          htmlFor="after"
                          className={styles.edit_item_title}
                        >
                          10：後味の印象度{" "}
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <div className={styles.edit_item_value}>
                            ０～８
                            <select
                              name="after"
                              type="number"
                              id="after"
                              className={styles.select_box}
                              value={after}
                              onChange={(e) => setAfter(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={6.5}>6.5</option>
                              <option value={7}>7</option>
                              <option value={7.5}>7.5</option>
                              <option value={8}>8</option>
                            </select>
                          </div>

                          <div className={styles.edit_item_message_box}>
                            <label htmlFor="after-message">memo</label>
                            <br />
                            <textarea
                              className={styles.edit_item_message}
                              name="after-message"
                              id="after-message"
                              placeholder="ご記入ください。"
                              value={afterMessage}
                              onChange={(e) => setAfterMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_balance}`}
                      >
                        <label
                          htmlFor="balance"
                          className={styles.edit_item_title}
                        >
                          11：バランス{" "}
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <div className={styles.edit_item_value}>
                            ０～８
                            <select
                              name="balance"
                              type="number"
                              id="balance"
                              className={styles.select_box}
                              value={balance}
                              onChange={(e) => setBalance(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={6.5}>6.5</option>
                              <option value={7}>7</option>
                              <option value={7.5}>7.5</option>
                              <option value={8}>8</option>
                            </select>
                          </div>
                        </div>
                        <div className={styles.edit_item_message_box}>
                          <label htmlFor="balance-message">memo</label>
                          <br />
                          <textarea
                            className={styles.edit_item_message}
                            name="balance-message"
                            id="balance-message"
                            placeholder="ご記入ください。"
                            value={balanceMessage}
                            onChange={(e) => setBalanceMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_overall}`}
                      >
                        <label
                          htmlFor="overall"
                          className={styles.edit_item_title}
                        >
                          12：総合評価
                        </label>
                        <div className={styles.edit_item_value_box}>
                          <div className={styles.edit_item_value}>
                            ０～８
                            <select
                              name="overall"
                              type="number"
                              id="overall"
                              className={styles.select_box}
                              value={overall}
                              onChange={(e) => setOverall(e.target.value)}
                            >
                              <option value={null}>{null}</option>
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={6.5}>6.5</option>
                              <option value={7}>7</option>
                              <option value={7.5}>7.5</option>
                              <option value={8}>8</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_total}`}
                      >
                        <div className=""></div>
                        <label
                          htmlFor="total"
                          className={styles.edit_item_title}
                        >
                          13：TOTAL（+36）
                        </label>
                        <div className={styles.edit_result}>
                          <p>下記の空白に項目４～１２を加算した数字が出力。</p>
                          <div className={styles.edit_addition}>
                            <output className={styles.edit_sub_value}>
                              {-Number(defects) +
                                Number(cleancap) +
                                Number(sweet) +
                                Number(acidity) +
                                Number(mouthfeel) +
                                Number(flavor) +
                                Number(after) +
                                Number(balance) +
                                Number(overall)}
                            </output>
                            <span className={styles.edit_basic}>＋３６</span>
                          </div>
                        </div>
                        <div className={styles.edit_total_value}>
                          <p>TOTAL</p>
                          <output className={styles.edit_sub_value}>
                            {Number(cleancap) +
                              Number(sweet) +
                              Number(acidity) +
                              Number(mouthfeel) +
                              Number(flavor) +
                              Number(after) +
                              Number(balance) +
                              Number(overall) -
                              Number(defects) +
                              Number(36)}
                          </output>
                        </div>
                      </div>
                      <div
                        className={`${styles.edit_item} ${styles.edit_impression}`}
                      >
                        <label
                          htmlFor="impression"
                          className={styles.edit_item_title}
                        >
                          14：味の印象
                        </label>
                        <div className={styles.edit_item_message_box}>
                          memo
                          <br />
                          <textarea
                            className={styles.edit_item_message}
                            name="impression"
                            id="impression"
                            value={impression}
                            onChange={(e) => setImpression(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className={styles.edit_submit_btn_box}>
                      {error && (
                        <span
                          onChange={(e) => setError(e.target.value)}
                          className="edit-error"
                        >
                          {error}
                        </span>
                      )}
                      {/* ErrorMessage */}
                      <button
                        type="submit"
                        className={styles.edit_submit_btn}
                        // onClick={handleSubmit}
                      >
                        編集する
                      </button>
                      <button className={styles.edit_return_btn}>
                        <Link href={"/beans/selection"}>戻る</Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  } else {
    return <h1>権限がありません</h1>;
  }
};
export default UpDateItem;
export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://tasting-note.vercel.app/api/beans/udate/${context.query.id}`
  );
  const singleBeans = await response.json();

  return {
    props: singleBeans,
  };
};
