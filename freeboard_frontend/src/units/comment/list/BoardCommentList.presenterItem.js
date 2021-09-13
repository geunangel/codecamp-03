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
// import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function ListPresenterItem(props) {
  return (
    <CommentWrapeer>
      <CommentBox>
        <CommentImg src="/사람.png" />
        <CommentDtailBox>
          <CommentName>{props.el?.writer}</CommentName>
          <CommentContents>{props.el?.contents}</CommentContents>
        </CommentDtailBox>
        <CommentStar>별</CommentStar>
        <UpdateIcon src="/연필.png" />
        <DeleteIcon src="/연필세트엑스.png" />
      </CommentBox>
      <CommentDate>{props.el?.createdAt}</CommentDate>
      <br />
      {/* <BoardCommentWriter el={props.el} /> */}
    </CommentWrapeer>
  );
}
