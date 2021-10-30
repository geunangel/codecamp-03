import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS } from "./TodayView.queries";
import TodayViewUI from "./TodayView.presenter";

export default function TodayView() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1 },
  });

  //클릭하면 상세보기 페이지로 이동
  const onClickPage = (event) => {
    router.push(`/market/${event.currentTarget.id}`);
  };

  return <TodayViewUI data={data} onClickPage={onClickPage} />;
}
