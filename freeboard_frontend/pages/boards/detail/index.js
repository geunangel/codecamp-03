import {
    Wrapper,Header,Footer,Head1,Head2,
    ImgTitle,Img,ImgText,Youtube,
    Likedislike,Like,Likecount,Dislike,Dislikecount,Count,
    Box

} from '../../../styles/boardsDetail.styles'

export default function BoardsDetailPage(){

    return(
        <Wrapper>
            <Header>
                <Head1>
                    <div>
                        <div>이미지</div>
                    </div>
                    <div>
                        <div>이름</div>
                        <div>작성날짜</div>
                    </div>
                </Head1>
                <Head2>
                    <div>위치글자</div>
                    <div>아이콘</div>
                    <div>아이콘</div>
                </Head2>
            </Header>
            <Footer>
                <ImgTitle>게시글 제목입니다.</ImgTitle>
                <Box>
                    <Img>사진</Img>
                    <ImgText>내용</ImgText>
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
        </Wrapper>
    )
}