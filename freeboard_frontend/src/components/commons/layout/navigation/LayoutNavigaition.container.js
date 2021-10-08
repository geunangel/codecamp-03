import { useRouter } from "next/router";
import LayoutNaigaitionUI from "./LayoutNavigaition.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickMarketList() {
    router.push("/all");
  }

  function onClickBoardList() {
    router.push("/boards/list");
  }

  return (
    <LayoutNaigaitionUI
      onClickMarketList={onClickMarketList}
      onClickBoardList={onClickBoardList}
    />
  );
}
