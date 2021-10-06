import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickSignin() {
    router.push("/signin");
  }

  function onClickSignup() {
    router.push("/signup");
  }

  return (
    <LayoutHeaderUI
      onClickSignin={onClickSignin}
      onClickSignup={onClickSignup}
    />
  );
}
