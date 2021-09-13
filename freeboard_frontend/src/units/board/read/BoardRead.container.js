import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardRead.queries";
import BoardReadPresenter from "./BoardRead.presenter";

export default function BoardReadContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

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
    //실무에서 많이 쓰임
    router.push(`/boards/${router.query.detail}/edit`);
    //위와 똑같음
    //router.push(`/boardsEdit/${router.query.detail}`)
  }

  //목록으로 이동
  function onClickList() {
    router.push(`/boards`);
  }

  return (
    <BoardReadPresenter
      data={data}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickList={onClickList}
    />
  );
}
