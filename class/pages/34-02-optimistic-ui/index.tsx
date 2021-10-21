import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6170db47b55052002a93d144" },
  });

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "6170db47b55052002a93d144" },

      // 이거는 리패치 될때까지 기다려야 됨.
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "6170db47b55052002a93d144" },
      //     },
      //   ],

      //낙관적으로 미리 받음.(가짜로 받음)
      //optimisticResponse를 이용하기때문에 가짜로 먼저 카운트가 올라가면서
      //updata({data})에 들어가서
      //그 이후 나중에 진짜 업데이트 됨.
      optimisticResponse: {
        likeBoard: data?.fetchBoard.likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6170db47b55052002a93d144" },
          data: {
            fetchBoard: {
              _id: "6170db47b55052002a93d144",
              __typename: "board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요 갯수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!!</button>
    </>
  );
}
