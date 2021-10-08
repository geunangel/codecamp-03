import { gql, useMutation, useQuery } from "@apollo/client";
import { update } from "lodash";

const FETCH_BOADES = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOADES);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId) => async () => {
    //boardId
    await deleteBoard({
      variables: {
        boardId: boardId,
      },
      // refetchQueries:[fetchBoards] 전에 했던 방식
      //result로 받은 응답이 data로 들어옴
      update(cache, { data }) {
        //cache를 수정하는 => cache.modify({});
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            //{readField} => 뽑아줌
            fetchBoards: (prev, { readField }) => {
              //기존에 fetchBoards 10에서, 지금 삭제된 ID를 제외한 9개를 만들고
              //그렇게 만들어진 9개의 새로운 fetchBoards를 return하여, 덮어씌우기
              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...newFetchBoards];
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "그나짱",
          password: "1004",
          title: "데스요",
          contents: "니혼징초등학교",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              //추가된 createBoard 결과물과 이전의 10개를 합쳐서 11개를 돌려주기
              return [data.createBoard, ...prev]; //새로운 data가 기존꺼 위에 추가
              //   return [...prev, data.createBoard]; //새로운 data 기존꺼 아래에 추가
            },
          },
        });
      },
    });
  };

  return (
    <>
      <button onClick={onClickCreate}>등록하기</button>
      {/* el=>매개변수 */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      {/* <button onClick={onClickCreate}>등록하기</button> */}
    </>
  );
}
