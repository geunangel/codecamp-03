import {
    Wrapper,Header,
    BestBoards,BoardsImg,BoardTitle,
    WriterBoardBox,WriterBox,WriterImg,WriterName
} from './BoardList.styles'

export default function BoardListPresenter(props){
    return(
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
                    <input />제목을 검색해주세요.
                </div>
                <div>년도입력</div>
                <div>검색하기</div>
            </div>
            <div>
                <div>번호</div>
                <div>제목</div>
                <div>작성자</div>
                <div>날짜</div>
            </div>
            <div>
                {props.data?.fetchBoards.map((el, index) => (
                    <div key={el._id}>
                        <div>{index+1}</div>
                        <div>{el.title}</div>
                        <div>{el.writer}</div>
                        <div>{el.createdAt}</div>
                    </div>
                ))}
            </div>
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
    )
}