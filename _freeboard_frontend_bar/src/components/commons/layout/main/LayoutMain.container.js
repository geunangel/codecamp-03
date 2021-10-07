import { useRouter } from "next/router";
import MainUI from "./LayoutMain.presenter";

export default function LayoutMain() {
  const router = useRouter();

  function onClickNonMember() {
    router.push("/all");
  }

  function onClickSignin() {
    router.push("/signin");
  }

  return (
    <MainUI onClickNonMember={onClickNonMember} onClickSignin={onClickSignin} />
  );
}
