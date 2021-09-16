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

export default function PaginationNextPagePage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage }, //첫페이지 기준으로 설정해줌
  });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }

  return (
    <>
      <div>(이전페이지)페이지네이션(다음페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <span onClick={onClickPrevPage}>이전</span>

      {/* new Array을 쓰면 []안쓰고도 쉽게 쓸 수 있음 */}
      {new Array(10).fill(1).map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
      ))}

      {/* []안에 뭐라도 10번 채워져 있어야 그려짐 */}
      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
      ))} */}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
