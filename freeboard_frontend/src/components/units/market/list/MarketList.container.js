import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS } from "./MarketList.queries";
import MarKetListUI from "./MarketList.presenter";

export default function MarketList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1 },
  });

  //상세보기 페이지로 이동
  function onClickPage(event) {
    router.push(`/market/${event.target.id}`);
  }
  console.log(router.id);

  //등록하기 페이지로 이동
  function onClickNew() {
    router.push("/market/new");
  }
  return (
    <MarKetListUI
      data={data}
      onClickPage={onClickPage}
      onClickNew={onClickNew}
    />
  );
}
