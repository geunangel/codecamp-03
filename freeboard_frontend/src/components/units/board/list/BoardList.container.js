import { useQuery } from "@apollo/client";
import BoardListPresenter from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardListContainer() {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  // const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const { data: dataBoardsOfTheBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  //검색
  function onChangeKeyword(value) {
    setKeyword(value);
  }

  //첫페이지 기준으로 설정함
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    vareables: { page: startPage },
  });

  // 전체 게시글 갯수을 이용해서 만듬
  const { data: databoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(databoardsCount?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  function onClickStartPage() {
    //시작페이지로 이동
    setStartPage(1);
  }

  function onClickEndPage() {
    //끝페이지로 이동
    const lastPage = Math.ceil(databoardsCount?.fetchBoardsCount / 10);
    setStartPage(lastPage);
  }

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
      dataBoardsOfTheBest={dataBoardsOfTheBest}
      onClickRead={onClickRead}
      onClickNew={onClickNew}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickStartPage={onClickStartPage}
      onClickEndPage={onClickEndPage}
      onChangeKeyword={onChangeKeyword}
      startPage={startPage}
      lastPage={lastPage}
    />
  );
}
