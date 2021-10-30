import { useRouter } from "next/router";
import LayoutNaigaitionUI from "./LayoutNavigaition.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMarketNew = () => {
    router.push("/market/new");
    // setIsSelect(true);
  };
  const onClickMarketList = () => {
    router.push("/market/list");
    // setIsSelect(true);
  };

  const onClickMarketBest = () => {
    router.push("/market/best");
    // setIsSelect(true);
  };

  const onClickBoardList = () => {
    router.push("/boards");
    // setIsSelect(true);
  };

  return (
    <LayoutNaigaitionUI
      onClickMarketNew={onClickMarketNew}
      onClickMarketList={onClickMarketList}
      onClickBoardList={onClickBoardList}
      onClickMarketBest={onClickMarketBest}
    />
  );
}
