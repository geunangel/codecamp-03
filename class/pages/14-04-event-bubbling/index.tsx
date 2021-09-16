import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  margin: 20px;
`;

export default function EventBubblingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  function onClickRow(event) {
    alert("클릭!!!");

    // Row에만 id를 설정하면 배경클릭하면 아이디가 나오고 배경클릭하면 아이디가 안나옴
    // 각각 id를 다 설정하면 아이디가 나오긴하는데 번거로움때문에 쓸 수 있는 기능이 있음
    // 그게 이벤트 버블링이라 함

    //target 이라고 적으면 그 해당 아이디를 읽는데 해당아이디가 없기에 아이디가 안뜸
    alert(event.target.id);
    //currentTarget 이라고 적으면 부모한테 있는 해당 아이디가 뜸
    alert(event.currentTarget.id);
  }

  return (
    <>
      <div>이벤트버블링</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id} id={el._id} onClick={onClickRow}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
        ))}
      </div>
    </>
  );
}
