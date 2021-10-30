import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./MarketList.queries";
import MarKetListUI from "./MarketList.presenter";

export default function MarketList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1 },
  });
  const { data: bestdata } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);

  //상세보기 페이지로 이동
  const onClickPage = (event) => {
    //currentTarget=>어딜 눌리던 해당페이지로 이동
    router.push(`/market/${event.currentTarget.id}`);
  };
  console.log(router.id);

  //등록하기 페이지로 이동
  const onClickNew = () => {
    router.push("/market/new");
  };
  return (
    <MarKetListUI
      data={data}
      bestdata={bestdata}
      onClickPage={onClickPage}
      onClickNew={onClickNew}
    />
  );
}
