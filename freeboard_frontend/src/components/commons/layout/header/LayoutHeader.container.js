import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext, useEffect } from "react";

export default function LayoutHeader() {
  const router = useRouter();
  const { accessToken, setUserInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (accessToken) return;
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);

  const onClickSignin = () => {
    router.push("/signin");
  };

  const onClickSignup = () => {
    router.push("/signup");
  };

  const onClickSignout = () => {
    localStorage.removeItem("refreshToken");
    setUserInfo("");
    router.push("/market/list");
  };

  const onClickLogo = (event) => {
    router.push("/");
  };

  const onClickMyPage = () => {
    router.push("/mypage");
  };

  return (
    <LayoutHeaderUI
      data={data}
      accessToken={accessToken}
      onClickSignin={onClickSignin}
      onClickSignup={onClickSignup}
      onClickSignout={onClickSignout}
      onClickLogo={onClickLogo}
      onClickMyPage={onClickMyPage}
    />
  );
}
