import {
  Wrapper,
  CommentBox,
  CommentIcon,
  CommentText,
  CommentData,
  CommentWriter,
  CommentPw,
  CommentStar,
  CommentContentsBox,
  CommentContents,
  ContentsLength,
  LengthButton,
  ButtonComment,
} from "./BoardCommentWriter.styles";

export default function BoardCommentPresenter(props) {
  return (
    <Wrapper>
      {!props.isEdit && (
        <>
          <br />
          <CommentIcon src="/댓글.png" />
          <CommentText>댓글</CommentText>
        </>
      )}
      <CommentBox>
        <CommentData>
          <CommentWriter
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          />
          <CommentPw
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <CommentStar
            onChange={props.onChangeStar}
            defaultValue={props.el?.rating}
          ></CommentStar>
        </CommentData>
        <CommentContentsBox>
          <CommentContents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제 될 수 있으며, 이에 대한 민사책임은 게시자에게 있습니다"
            onChange={props.onChangeContents}
          />
          <LengthButton>
            <ContentsLength>0/100</ContentsLength>
            <ButtonComment
              id={props.el?._id}
              onClick={
                props.isEdit ? props.onClickUpdate : props.onClickComment
              }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </ButtonComment>
          </LengthButton>
        </CommentContentsBox>
      </CommentBox>
    </Wrapper>
  );
}
