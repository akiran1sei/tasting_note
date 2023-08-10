// pages/user/register.js（アカウント登録ページ）
import { Header } from "@/components/Header";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://tasiing-note.vercel.app/api/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("ユーザー登録失敗");
    }
  };
  return (
    <>
      <Head>
        <title>ユーザー登録</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        {/* <Login /> */}
        <main className={styles.main}>
          <div className={styles.main_contents}>
            <h1 className={styles.heading_title}>REGISTER</h1>
            <div className={styles.register_input_box}>
              <form>
                <p className={styles.register_paragraph}>
                  名前
                  <br />
                  <input
                    className={styles.register_input}
                    width={300}
                    height={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="名前"
                    required
                  />
                </p>
                <p className={styles.register_paragraph}>
                  メールアドレス
                  <br />
                  <input
                    className={styles.register_input}
                    width={300}
                    height={50}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="email"
                    placeholder="メールアドレス"
                    required
                  />
                </p>
                <p className={styles.register_paragraph}>
                  パスワード
                  <br />
                  <input
                    className={styles.register_input}
                    width={300}
                    height={50}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    name="password"
                    placeholder="パスワード"
                    required
                  />
                </p>
                <div className={styles.register_btn_box}>
                  <button
                    className={styles.register_btn}
                    onClick={handleSubmit}
                  >
                    登録
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Register;
