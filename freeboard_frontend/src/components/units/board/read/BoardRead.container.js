import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardRead.queries";
import BoardReadPresenter from "./BoardRead.presenter";

export default function BoardReadContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  //data로 응답
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detail },
  });
  console.log(router.query);

  //해당 글 삭제
  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.detail } });
      alert("게시물이 삭제되었습니다.");
      router.push(`/boards/list`);
    } catch (error) {
      console.log(error);
    }
  }

  //수정하기 페이지로 이동
  function onClickEdit() {
    //상세보기 페이지 이동
    router.push(`/boards/${router.query.detail}/edit`);
    //위와 똑같음
    //router.push(`/boardsEdit/${router.query.detail}`)
  }

  //목록으로 이동
  function onClickList() {
    router.push(`/boards`);
  }

  //좋아요 버튼
  function onClickLike() {
    likeBoard({
      variables: { boardId: router.query.detail },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.detail } },
      ],
    });
  }

  //싫어요 버튼
  function onClickDislike() {
    dislikeBoard({
      variables: { boardId: router.query.detail },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.detail } },
      ],
    });
  }

  return (
    <BoardReadPresenter
      data={data}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickList={onClickList}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
