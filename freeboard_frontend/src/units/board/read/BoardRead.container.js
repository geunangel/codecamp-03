import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  CREATE_BOARD_COMMENT,
} from "./BoardRead.queries";
import BoardReadPresenter from "./BoardRead.presenter";
import { useState } from "react";

export default function BoardReadContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [contents, setContents] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPw(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  //data로 응답
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detail },
  });

  const { data: commentInput } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detail },
  });

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.detail } });
      alert("게시물이 삭제되었습니다.");
      router.push(`/boards/list`);
    } catch (error) {
      console.log(error);
    }
  }

  function onClickEdit() {
    //상세보기 페이지 이동
    //실무에서 많이 쓰임
    router.push(`/boards/${router.query.detail}/edit`);
    //위와 똑같음
    //router.push(`/boardsEdit/${router.query.detail}`)
  }

  function onClickList() {
    router.push(`/boards/list`);
  }

  //댓글등록
  async function onClickComment() {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: pw,
            contents: contents,
          },
          boardId: router.query.detail,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BoardReadPresenter
      data={data}
      commentInput={commentInput}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickList={onClickList}
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
    />
  );
}
