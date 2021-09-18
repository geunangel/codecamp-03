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
  BoardListNumber,
  BoardListTitle,
  BoardListwriter,
  BoardLisDay,
  BoardListBottom,
  BoardListBottom2,
  BoardListNumber2,
  BoardListTitle2,
  BoardListwriter2,
  BoardLisDay2,
  PageIconBox,
  LeftPageIcon,
  RightPageIcon,
  LeftLeftPageIcon,
  RightRightPageIcon,
  Page,
  TitleSearchBox,
  TitleSearch,
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
      <TitleSearchBox>
        <TitleSearch>
          <img />
          <input />
          제목을 검색해주세요.
        </TitleSearch>
        <div>년도입력</div>
        <div>검색하기</div>
      </TitleSearchBox>
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
              <BoardListBottom2>
                <BoardListNumber2>{10 - index}</BoardListNumber2>
                <BoardListTitle2 id={el._id} onClick={props.onClickRead}>
                  {el.title}
                </BoardListTitle2>
                <BoardListwriter2>{el.writer}</BoardListwriter2>
                <BoardLisDay2>{el.createdAt}</BoardLisDay2>
              </BoardListBottom2>
            </div>
          ))}
        </BoardListBottom>
      </BoardListBox>
      <div>
        <PageIconBox>
          <LeftLeftPageIcon onClick={props.onClickStartPage} />
          <LeftPageIcon onClick={props.onClickPrevPage} />
          {new Array(10).fill(1).map(
            (_, index) =>
              props.startPage + index <= props.lastPage && (
                <Page
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  id={String(props.startPage + index)}
                >
                  {props.startPage + index}
                </Page>
              )
          )}
          <RightPageIcon onClick={props.onClickNextPage} />
          <RightRightPageIcon onClick={props.onClickEndPage} />
        </PageIconBox>
        <div>
          <img />
          <button onClick={props.onClickNew}>게시물 등록하기</button>
        </div>
      </div>
    </Wrapper>
  );
}