import { useRouter } from "next/router";
import { useState } from "react";
import LayoutNaigaitionUI from "./LayoutNavigaition.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [isSelect, setIsSelect] = useState(false);

  const onClickMarketNew = () => {
    router.push("/market/new");
    setIsSelect(true);
  };
  const onClickMarketList = () => {
    router.push("/market/list");
    setIsSelect(true);
  };

  const onClickMarketBest = () => {
    router.push("/market/best");
    setIsSelect(true);
  };

  const onClickBoardList = () => {
    router.push("/boards");
    setIsSelect(true);
  };

  return (
    <LayoutNaigaitionUI
      onClickMarketNew={onClickMarketNew}
      onClickMarketList={onClickMarketList}
      onClickMarketBest={onClickMarketBest}
      onClickBoardList={onClickBoardList}
    />
  );
}
