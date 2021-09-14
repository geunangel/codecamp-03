import ReactPlayer from "react-player";
import {
  Wrapper,
  Detail,
  Header,
  Footer,
  Head1,
  Head2,
  WriterName,
  Title,
  Img,
  Contents,
  Youtube,
  Likedislike,
  Like,
  Likecount,
  Dislike,
  Dislikecount,
  Count,
  Box,
  WriterImg,
  ButtonBox,
  ButtonList,
  ButtonEdit,
  ButtonDelete,
} from "./BoardRead.styles";

export default function BoardReadPresenter(props) {
  return (
    <Wrapper>
      <Detail>
        <Header>
          <Head1>
            <WriterImg src="/사람.png" />
            <div>
              <WriterName>{props.data?.fetchBoard.writer}</WriterName>
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
            <Youtube>
              <ReactPlayer
                url={props.data?.fetchBoard.youtubeUrl}
                width={486}
                height={240}
              />
            </Youtube>

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
    </Wrapper>
  );
}
