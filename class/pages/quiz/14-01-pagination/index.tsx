import { useQuery, gql } from "@apollo/client";

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

export default function Pagination() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      <div>페이지네이션 구현하기</div>
      <div>
        {data?.fetchboards.map((el) => (
          <div key={el}>{el.title}</div>
        ))}
      </div>
      <div></div>
    </>
  );
}
