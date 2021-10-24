import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/router";

export const WithAuth = (Component) => (props) => {
  const router = useRouter();

  //accessToken이 있는가!?
  //accessToken이 없다면, login 페이지로 보내기!!!
  useEffect(() => {
    const accessToken = window.localStorage.getItem("refreshToken");
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인후 이용해주세요");
      router.push("/signin");
    }
  });

  return <Component {...props} />;
};
