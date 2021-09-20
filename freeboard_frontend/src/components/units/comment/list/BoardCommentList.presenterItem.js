import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWriter from "../writer/BoardCommentWriter.container";

import {
  CommentWrapeer,
  CommentBox,
  CommentImg,
  CommentDtailBox,
  CommentName,
  CommentStar,
  UpdateIcon,
  DeleteIcon,
  CommentContents,
  CommentDate,
} from "./BoardCommentList.styles";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { useMutation } from "@apollo/client";

export default function ListPresenterItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  async function onClickCommentDelete() {
    const pw = prompt("비밀번호를 입력해 주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: pw,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detail },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  }

  //댓글수정
  function onClickUpdate() {
    setIsEdit(true);
  }

  return (
    <>
      {!isEdit && (
        <CommentWrapeer>
          <CommentBox>
            <CommentImg src="/사람.png" />
            <CommentDtailBox>
              <CommentName>{props.el?.writer}</CommentName>
              <CommentContents>{props.el?.contents}</CommentContents>
            </CommentDtailBox>
            <CommentStar value={props.el?.rating} />
            <UpdateIcon src="/연필.png" onClick={onClickUpdate} />
            <DeleteIcon
              src="/연필세트엑스.png"
              onClick={onClickCommentDelete}
            />
          </CommentBox>
          <CommentDate>{props.el?.createdAt}</CommentDate>
        </CommentWrapeer>
      )}
      {isEdit && (
        <BoardCommentWriter
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
