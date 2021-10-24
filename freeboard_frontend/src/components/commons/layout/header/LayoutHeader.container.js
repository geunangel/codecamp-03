import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";

export default function LayoutHeader() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickSignin() {
    router.push("/signin");
  }

  function onClickSignup() {
    router.push("/signup");
  }

  function onClickSignout() {
    localStorage.removeItem("refreshToken");
    setAccessToken("");
    router.push("/market");
  }

  return (
    <LayoutHeaderUI
      data={data}
      onClickSignin={onClickSignin}
      onClickSignup={onClickSignup}
      onClickSignout={onClickSignout}
    />
  );
}
