import { useQuery } from "@apollo/client";
import BoardListPresenter from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);

  //상세페이지로 이동
  function onClickRead(event) {
    router.push(`/boards/${event.target.id}`);
  }
  console.log(router.id);

  //등록하기페이지로 이동
  function onClickNew() {
    router.push(`/boards/new`);
  }

  return (
    <BoardListPresenter
      data={data}
      onClickRead={onClickRead}
      onClickNew={onClickNew}
    />
  );
}
