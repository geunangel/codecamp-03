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

  function onClickMarketBest() {
    router.push("/market/best");
  }

  function onClickBoardList() {
    router.push("/boards");
  }

  return (
    <LayoutNaigaitionUI
      onClickMarketList={onClickMarketList}
      onClickBoardList={onClickBoardList}
      onClickMarketBest={onClickMarketBest}
      onClickMarketNew={onClickMarketNew}
    />
  );
}
