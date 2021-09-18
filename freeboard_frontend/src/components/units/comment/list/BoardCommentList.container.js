import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardCommentPresenter from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.detail },
  });
  console.log(router);

  return <BoardCommentPresenter data={data} />;
}
