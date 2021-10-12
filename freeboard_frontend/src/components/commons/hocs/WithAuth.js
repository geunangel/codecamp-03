import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/router";

export const WithAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  //accessToken이 있는가!?
  //accessToken이 없다면, login 페이지로 보내기!!!
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인후 이용해주세요");
      router.push("/signin");
    }
  }, [accessToken]);

  return <Component {...props} />;
};
