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
  BoardListDay,
  BoardListBottom,
  BoardListBottom2,
  BoardListNumber2,
  BoardListTitle2,
  BoardListwriter2,
  BoardListDay2,
  PageIconBox,
  LeftPageIcon,
  RightPageIcon,
  LeftLeftPageIcon,
  RightRightPageIcon,
  Page,
  TitleSearchBox,
  TitleSearch,
  TextColor,
} from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";

export default function BoardListPresenter(props) {
  return (
    <Wrapper>
      {/* <Header>베스트 게시글</Header> */}
      <BestBoards>
        <BoardsImg />
        <BoardTitle>게시물 제목</BoardTitle>

        {/* {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el) => (
            < key={el._id} id={el._id} onClick={props.onClickBest}> */}

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
          <input
            // refetch={props.refetch}
            onChangeKeyword={props.onChangeKeyword}
            placeholder="제목을 검색해주세요."
          />
        </TitleSearch>
        <div>년도입력</div>
        <button>검색하기</button>
      </TitleSearchBox>
      <BoardListBox>
        <BoardListTop>
          <BoardListNumber>번호</BoardListNumber>
          <BoardListTitle>제목</BoardListTitle>
          <BoardListwriter>작성자</BoardListwriter>
          <BoardListDay>날짜</BoardListDay>
        </BoardListTop>
        <BoardListBottom>
          {props.data?.fetchBoards.map((el, index) => (
            <div key={el._id}>
              <BoardListBottom2>
                <BoardListNumber2>{10 - index}</BoardListNumber2>
                <BoardListTitle2 id={el._id} onClick={props.onClickRead}>
                  {el.title
                    .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                    .split("@#$%")
                    .map((el) => (
                      <TextColor
                        key={uuidv4()}
                        isMatched={props.keyword === el}
                      >
                        {el}
                      </TextColor>
                    ))}
                </BoardListTitle2>
                <BoardListwriter2>{el.writer}</BoardListwriter2>
                <BoardListDay2>{el.createdAt.slice(0, 10)}</BoardListDay2>
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
