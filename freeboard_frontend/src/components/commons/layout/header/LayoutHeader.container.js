import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";

export default function LayoutHeader() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);

  function onClickSignin() {
    router.push("/signin");
  }

  function onClickSignup() {
    router.push("/signup");
  }

  function onClickSignout() {
    localStorage.removeItem("accessToken");
    setAccessToken("");
  }

  return (
    <LayoutHeaderUI
      onClickSignin={onClickSignin}
      onClickSignup={onClickSignup}
      onClickSignout={onClickSignout}
    />
  );
}
