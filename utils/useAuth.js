// utils.useAuth.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

const secret_key = "tastingcoffee";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const router = useRouter();
  //
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/user/login");
    }
    try {
      const decoded = jwt.verify(token, secret_key, { algorithms: ["HS256"] });
      // const decoded = jwt.decode(token, { complete: true });
      // console.log(decoded);
      setLoginUser(decoded);
    } catch (err) {
      router.push("/user/login");
    }
  }, [router]);
  return loginUser;
};

export default useAuth;
