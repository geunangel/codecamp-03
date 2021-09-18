import { useRouter } from "next/router";
import LayoutNaigaitionUI from "./LayoutNavigaition.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickBoardList() {
    router.push(`/boards`);
  }

  function onClickMypage() {
    router.push(`/mypage`);
  }

  function onClickMarketList() {
    router.push(`/market`);
  }

  return (
    <LayoutNaigaitionUI
      onClickBoardList={onClickBoardList}
      onClickMypage={onClickMypage}
      onClickMarketList={onClickMarketList}
    />
  );
}
