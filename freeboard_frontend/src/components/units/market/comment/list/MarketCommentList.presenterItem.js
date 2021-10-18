import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
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
  PasswordInput,
} from "./BoardCommentList.styles";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { Modal } from "antd";

export default function ListPresenterItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [pw, setPw] = useState("");

  //모달띄워서 삭제
  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  //모달띄웠을때 댓글비번
  function onChangePw(event) {
    setPw(event.target.value);
  }

  //모달닫기
  function closeModal() {
    setIsOpenDeleteModal(false);
  }

  async function onClickCommentDelete() {
    // const pw = prompt("비밀번호를 입력해 주세요.");
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: props.el?._id,
          password: pw,
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
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickCommentDelete} onCancel={closeModal}>
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangePw} />
        </Modal>
      )}
      {!isEdit && (
        <CommentWrapeer>
          <CommentBox>
            <CommentImg src="/사람.png" />
            <CommentDtailBox>
              <CommentName>{props.el?.writer}</CommentName>
              <CommentContents>{props.el?.contents}</CommentContents>
            </CommentDtailBox>
            <CommentStar value={props.el?.rating} disabled />
            <UpdateIcon src="/연필.png" onClick={onClickUpdate} />
            <DeleteIcon
              src="/연필세트엑스.png"
              onClick={onClickOpenDeleteModal}
            />
          </CommentBox>
          <CommentDate>{props.el?.createdAt.slice(0, 10)}</CommentDate>
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
