import {
  Wrapper,
  Line,
  CommentTitleBox,
  CommentTitle,
  CommentTitleIcon,
  CommentTitleText,
  CommentContentsBox,
  CommentContentsInput,
  CommentButtonBox,
  CommentTextLength,
  CommentButton,
} from "./MarketCommentWriter.styles";

export default function ProductCommentWriteUI(props) {
  return (
    <Wrapper>
      <Line />
      <CommentTitleBox>
        <CommentTitle>
          {!props.isEdit && (
            <>
              <CommentTitleIcon src="" />
              <CommentTitleText>문의하기</CommentTitleText>
            </>
          )}
          {props.isEdit && <div>{props.el.user.name}</div>}
        </CommentTitle>
        {/*댓글작성*/}
        <CommentContentsBox>
          <CommentContentsInput
            ref={props.inputRef}
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고, 불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.el?.contents}
            onChange={props.onChangeCommentContents}
          />
          <CommentButtonBox>
            <CommentTextLength>100</CommentTextLength>
            {!props.isEdit ? (
              <CommentButton onClick={props.onClickComment}>
                문의하기
              </CommentButton>
            ) : (
              <CommentButton
                id={props.el._id}
                // onClick={}
              >
                수정하기
              </CommentButton>
            )}
          </CommentButtonBox>
        </CommentContentsBox>
      </CommentTitleBox>
    </Wrapper>
  );
}
