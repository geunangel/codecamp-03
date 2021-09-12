import {
  Wrapper,
  Header,
  BestBoards,
  BoardsImg,
  BoardTitle,
  WriterBoardBox,
  WriterBox,
  WriterImg,
  WriterName,
  BoardListBox,
  BoardListTop,
  BoardListBottom,
  BoardListNumber,
  BoardListTitle,
  BoardListwriter,
  BoardLisDay,
} from "./BoardList.styles";

export default function BoardListPresenter(props) {
  return (
    <Wrapper>
      <Header>베스트 게시글</Header>
      <BestBoards>
        <BoardsImg />
        <BoardTitle>게시물 제목입니다.</BoardTitle>
        <WriterBoardBox>
          <WriterBox>
            <WriterImg>사진</WriterImg>
            <WriterName>노원두</WriterName>
          </WriterBox>
          <div>날짜</div>
          <div>
            <div>따봉</div>
            <div>356</div>
          </div>
        </WriterBoardBox>
      </BestBoards>
      <div>
        <div>
          <img />
          <input />
          제목을 검색해주세요.
        </div>
        <div>년도입력</div>
        <div>검색하기</div>
      </div>
      <BoardListBox>
        <BoardListTop>
          <BoardListNumber>번호</BoardListNumber>
          <BoardListTitle>제목</BoardListTitle>
          <BoardListwriter>작성자</BoardListwriter>
          <BoardLisDay>날짜</BoardLisDay>
        </BoardListTop>
        <BoardListBottom>
          {props.data?.fetchBoards.map((el, index) => (
            <div key={el._id}>
              <BoardListNumber>{index + 1}</BoardListNumber>
              <BoardListTitle>{el.title}</BoardListTitle>
              <BoardListwriter>{el.writer}</BoardListwriter>
              <BoardLisDay>{el.createdAt}</BoardLisDay>
            </div>
          ))}
        </BoardListBottom>
      </BoardListBox>
      <div>
        <div>
          <div>앞</div>
          <div>1</div>
          <div>뒤</div>
        </div>
        <div>
          <img />
          <div>게시물 등록하기</div>
        </div>
      </div>
    </Wrapper>
  );
}
