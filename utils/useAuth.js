// utils.useAuth.js
// import jwtencode from "jwt-encode";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

const secret_key = "nextmarket";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const router = useRouter();
  const sign = require("jwt-encode");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/user/login");
    }
    try {
      // const decoded = jwt.verify(token, secret_key, { algorithms: ["HS256"] });
      const decode = jwt.decode(token, { complete: true });
      // console.log(decoded);
      setLoginUser(decode);
    } catch (err) {
      router.push("/user/login");
    }
  }, [router]);
  return loginUser;
};

export default useAuth;
