import {
  Wrapper,
  CommentListBox,
  CommentList,
  CommentWriterImgBox,
  CommentWriterImg,
  WriterContentsBox,
  CommentWriter,
  Writer,
  Contents,
  CommentListIsEditBox,
  CommentIsEditButton,
  CommentDeleteButton,
  CommentDate,
} from "./MarketCommentList.styles";
import MarketCommentWriter from "../writer/MarketCommentWriter.container";

export default function MarketCommentListUI(props) {
  return (
    <>
      {!props.isEdit ? (
        <Wrapper>
          <CommentListBox>
            <CommentList>
              <CommentWriterImgBox>
                <CommentWriterImg src="" />
              </CommentWriterImgBox>
              <WriterContentsBox>
                <CommentWriter>
                  <Writer>{props.el.user.name}</Writer>
                </CommentWriter>
                <Contents>{props.el.contents}</Contents>
              </WriterContentsBox>
              {/* 수정,삭제 */}
              <CommentListIsEditBox>
                <CommentIsEditButton src="" onClick={props.onClickEdit} />
                <CommentDeleteButton
                  id={props.el._id}
                  src=""
                  onClick={props.onClickDelete}
                />
                <div>
                  <img src="" />
                </div>
              </CommentListIsEditBox>
            </CommentList>
            <CommentDate>2020.20.20</CommentDate>
          </CommentListBox>
        </Wrapper>
      ) : (
        <MarketCommentWriter
          isEdit={props.isEdit}
          el={props.el}
          setIsEdit={props.setIsEdit}
        />
      )}
    </>
  );
}
