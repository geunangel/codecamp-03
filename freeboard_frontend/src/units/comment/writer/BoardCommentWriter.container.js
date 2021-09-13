import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardCommentPresenter from "./BoardCommentWriter.presenter";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWriter.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentContainer(props) {
  const router = useRouter();

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

  //댓글등록
  async function onClickComment() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: pw,
            contents: contents,
            rating: 0,
          },
          boardId: String(router.query.detail),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detail },
          },
          console.log(router),
        ],
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BoardCommentPresenter
      data={props.data}
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
    />
  );
}
