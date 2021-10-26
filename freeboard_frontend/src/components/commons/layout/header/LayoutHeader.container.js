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

  function onClickSignin() {
    router.push("/signin");
  }

  function onClickSignup() {
    router.push("/signup");
  }

  function onClickSignout() {
    localStorage.removeItem("refreshToken");
    setUserInfo("");
    router.push("/market/list");
  }

  return (
    <LayoutHeaderUI
      data={data}
      accessToken={accessToken}
      onClickSignin={onClickSignin}
      onClickSignup={onClickSignup}
      onClickSignout={onClickSignout}
    />
  );
}
