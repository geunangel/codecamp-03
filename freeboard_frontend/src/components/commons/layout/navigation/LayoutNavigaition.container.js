import { useRouter } from "next/router";
import LayoutNaigaitionUI from "./LayoutNavigaition.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickMarketNew() {
    router.push("/market/new");
  }

  function onClickMarketList() {
    router.push("/market/list");
  }

  function onClickBoardList() {
    router.push("/boards");
  }

  return (
    <LayoutNaigaitionUI
      onClickMarketList={onClickMarketList}
      onClickBoardList={onClickBoardList}
      onClickMarketNew={onClickMarketNew}
    />
  );
}
