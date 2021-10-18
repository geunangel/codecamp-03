import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardCommentPresenter from "./BoardCommentWriter.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWriter.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentContainer(props) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPw(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  function onChangeStar(value) {
    setStar(value);
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
            rating: star,
          },
          boardId: router.query.detail,
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

  //댓글수정
  async function onClickUpdate(event) {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!pw) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: contents },
          password: pw,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detail },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <BoardCommentPresenter
      data={props.data}
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      onChangeStar={onChangeStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
