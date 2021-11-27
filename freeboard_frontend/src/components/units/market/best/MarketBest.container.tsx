import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./MarketBest.queries";
import MarKetBestUI from "./MarketBest.presenter";

export default function MarketBest() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USEDITEMS);
  const { data: bestdata } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);

  //상세보기 페이지로 이동
  const onClickPage = (event) => {
    //currentTarget=>어딜 눌리던 해당페이지로 이동
    router.push(`/market/${event.currentTarget.id}`);
  };
  console.log(router.id);

  return (
    <MarKetBestUI data={data} bestdata={bestdata} onClickPage={onClickPage} />
  );
}
