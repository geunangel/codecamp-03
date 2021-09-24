import { useRouter } from "next/router";
import LayoutNaigaitionUI from "./LayoutNavigaition.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickMarketList() {
    router.push(`/all`);
  }

  return <LayoutNaigaitionUI onClickMarketList={onClickMarketList} />;
}
