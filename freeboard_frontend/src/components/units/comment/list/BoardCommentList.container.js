import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardCommentPresenter from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.detail },
  });
  console.log(router);

  function onAllList() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  }

  return <BoardCommentPresenter data={data} onAllList={onAllList} />;
}
