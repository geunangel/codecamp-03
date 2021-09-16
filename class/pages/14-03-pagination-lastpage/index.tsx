import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationNextPagePage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage }, //첫페이지 기준으로 설정해줌
  });

  const { data: databoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(databoardsCount?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    //첫번째페이지에서 더이상 안넘어가게 하는 방법=>if로 조건을 걸면 됨
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    //마지막 페이지에서 더이상 안넘어가게 하는 방법 '2가지'
    //if로 조건을 걸면 됨

    //첫번째.얼리어식패턴으로 좀 더 간결하게 만드는 방법
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    //두번째
    // if (startPage + 10 <= lastPage) setStartPage((prev) => prev + 10);
  }

  function onClickStartPage() {
    //시작페이지로 이동
    setStartPage(1);
  }

  function onClickEndPage() {
    //끝페이지로 이동
    //const lastPage = Math.ceil(databoardsCount?.fetchBoardsCount / 10);
    setStartPage(lastPage);
  }

  return (
    <>
      <div>페이지네이션(마지막페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>

      <span onClick={onClickStartPage}>시작페이지</span>

      <span onClick={onClickPrevPage}>이전</span>

      {/* new Array을 쓰면 []안쓰고도 쉽게 쓸 수 있음 */}
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </Page>
          )
      )}

      <span onClick={onClickNextPage}>다음</span>

      <span onClick={onClickEndPage}>마지막페이지</span>
    </>
  );
}
