import { useRouter } from "next/router";
import MainUI from "./LayoutMain.presenter";

export default function LayoutMain() {
  const router = useRouter();

  function onClickNonMember() {
    router.push(`/all`);
  }

  return <MainUI onClickNonMember={onClickNonMember} />;
}
