import {
    Wrapper,Detail,Header,Footer,Head1,Head2,
    Title,Img,Contents,Youtube,
    Likedislike,Like,Likecount,Dislike,Dislikecount,Count,
    Box,WriterImg,
    ButtonBox,ButtonList,ButtonEdit,ButtonDelete,
    CommentBox,CommentIcon,CommentText,CommentData,
    CommentWriter,CommentPw,CommentStarbox,CommentStar,
    CommentContentsBox,CommentContents,ButtonComment
} from './BoardRead.styles'


export default function BoardReadPresenter(props){

    return(
        <Wrapper>
            <Detail>
            <Header>
                <Head1>
                    <WriterImg>
                        <div>이미지</div>
                    </WriterImg>
                    <div>
                        <div>{props.data?.fetchBoard.writer}</div>
                        <div>2021.02.18</div>
                    </div>
                </Head1>
                <Head2>
                    <div>위치글자</div>
                    <div>아이콘</div>
                    <div>아이콘</div>
                </Head2>
            </Header>
            <Footer>
                <Title>{props.data?.fetchBoard.title}</Title>
                <Box>
                    <Img>사진</Img>
                    <Contents>{props.data?.fetchBoard.contents}</Contents>
                    <Youtube></Youtube>
                    <Likedislike>
                        <Likecount>
                            <Like></Like>
                            <Count>1920</Count>
                        </Likecount>
                        <Dislikecount>
                            <Dislike></Dislike>
                            <Count>1920</Count>
                        </Dislikecount>
                    </Likedislike>
                </Box>
            </Footer>
            </Detail>
            <ButtonBox>
                <ButtonList onClick={props.onClickList}>목록으로</ButtonList>
                <ButtonEdit onClick={props.onClickEdit}>수정하기</ButtonEdit>
                <ButtonDelete onClick={props.onClickDelete}>삭제하기</ButtonDelete>
            </ButtonBox>
            <br />
            <CommentBox>
                <CommentIcon></CommentIcon>
                <CommentText>댓글</CommentText>
                <CommentData>
                    <CommentWriter placeholder="작성자" onChange={props.onChangeWriter} />
                    <CommentPw placeholder="비밀번호" onChange={props.onChangePassword} />
                    <CommentStarbox>
                        <CommentStar>별</CommentStar>
                        <CommentStar>별</CommentStar>
                        <CommentStar>별</CommentStar>
                        <CommentStar>별</CommentStar>
                    </CommentStarbox>
                </CommentData>
                <CommentContentsBox>
                    <CommentContents 
                        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제 될 수 있으며, 이에 대한 민사책임은 게시자에게 있습니다" 
                        onChange={props.onChangeContents}
                    />
                    <div>
                        <div></div>
                        <ButtonComment onClick={props.onClickComment}>등록하기</ButtonComment>
                    </div>
                </CommentContentsBox>
                <div>
                    <div>
                        <div>이미지</div>
                        <div>
                            <div>사진</div>
                            <div>
                                <div>별</div>
                                <div>별</div>
                                <div>별</div>
                                <div>별</div>
                                <div>별</div>
                            </div>
                            <div>수정하기아이콘</div>
                            <div>삭제하기아이콘</div>
                        </div>
                        <div>내용</div>
                        <br />
                    </div>
                </div>
            </CommentBox>
        </Wrapper>
    )
}